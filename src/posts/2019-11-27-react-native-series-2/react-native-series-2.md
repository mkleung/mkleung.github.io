---

title: "React Native Series Part 2/5 - Add Redux"

date: "2019-11-27"
featuredImage: "../../assets/blog/react.png"
categories:
  - ReactNative
  - All
---

### Step 1: Add React Redux for Global State Management

We need redux to manage the state globally. Redux is the solution for when you need to pass props between child and parent components which can get complex once the app scales.

Install the redux package

```npm install --save redux```

```npm install --save react-redux```

```npm install --save redux-thunk```

### Step 2: Create a blueprint for Place object inside models folder

inside models/Place.js

```
class Place {
    constructor(id, title, imageUri, address, lat, lng) {
        this.id = id;
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.lat = lat;
        this.lng = lng;
    }
}
export default Place;
```

### Step 3: Create the Actions file

Inside store/places-actions.js

```
export const ADD_PLACE = 'ADD_PLACE';
export const addPlace = (title, image, location) => {
    return { type: ADD_PLACE, placeData: { title: title } }
};
```

### Step 4: Create the Reducer File

Inside store/places-reducer.js

```
const initialState = {
    places: []
};
export default (state = initialState, action) => {
    return state
};
```

### Step 3: Import the Redux Store into App.js

Inside App.js

```
import { ADD_PLACE } from './places-actions';
import Place from '../models/Place';

const initialState = {
    places: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(
                action.placeData.id.toString(),
                action.placeData.title,
                action.placeData.image,
                action.placeData.address,
                action.placeData.coords.lat,
                action.placeData.coords.lng
            );
            return {
                places: state.places.concat(newPlace)
            };
        default:
            return state;
    }
};
```

### Step 4: Import Redux Store into App.js

inside App.js

```
// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import placesReducer from './store/places-reducer'

const rootReducer = combineReducers({
  places: placesReducer
})

export default function App() {
  return (
    <Provider store={createStore(rootReducer, applyMiddleware(ReduxThunk))}>
      <AppNavigator />
    </Provider>
  );
}
```
