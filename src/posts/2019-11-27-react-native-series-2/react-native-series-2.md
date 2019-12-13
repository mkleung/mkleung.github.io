---

title: "React Native Series Part 2 - Add Redux"

date: "2019-11-27"
featuredImage: "../../assets/blog/react.png"
categories:
  - ReactNative
  - All
---


Redux helps apps to scale by providing a sensical way to manage state through a unidirectional data flow model.

An app without redux will each have their own state and and passing data between components becomes extrememly confusing once the app scales.

An app with redux has a master state that lives in one place and components send requests that update the master state and vice versa.

### What we will learn:
- Install React Redux
- Create Places Model
- Create an ADD_ITEM Action
- Create the reducer that handles the action
- Import Redux Store into App.js
- Create the screen that dispatches action (AddNewPlaceScreen)
- Create the screen that displays all the elements inside store (ListAllPlacesScreen)
- Create the screen that display single element (PlaceDetailScreen)

### Result:
<img src="../posts/2019-11-27-react-native-series-2.gif" alt="react-native-series-2" width="300"  /><br/>


Definitions
===========

**Store**
The store is where the entire state of your application lives. It is one big object. An analogy would be a bank vault that contains all the money for the bank.

**Action** 
Redux actions are like instructions to modify the store. It also contains the payload (data) from the components. For example, withdrawing money or depositing a cheque to the bank vault.

**Reducer**
A reducer contains a list of **Actions** that get called whenever a component needs it. Reducer reads the payload from the actions and update the store.

In the bank analogy, the reducer is a bank employee who handle transactions (dispatches) and the component is the client who needs to withdraw/deposit cash.

### Step 1: Install React Redux

Install the redux packages

```npm install --save redux```

```npm install --save react-redux```

```npm install --save redux-thunk```


### Step 2: Create Places Model

inside **models/Place.js**

```
class Place {
    constructor(id, title, location) {
      this.id = id;
      this.title = title; 
      this.location = location;
    }
}
export default Place;
```

### Step 3: Create a Redux Action

Recall: Actions are like instructions to modify the store. 

In the code below, we create an action for adding a place and add the data that it will contain.

Inside **store/places-actions.js**

```
export const ADD_PLACE = 'ADD_PLACE';
let previousId = 0;

export const addPlace = (title, location) => {
    let id = previousId + 1;
    previousId = id;
    return {
        type: ADD_PLACE,
        placeData: { 
          id: id, 
          title: title, 
          location: location 
        }
    }
};

```

### Step 4: Create a Redux Reducer

Recall: A reducer contains a list of **Actions** that get called whenever a component needs it. 

In the code below, we first initialize an empty state which will contain an array of places. We then add a case for ADD_ACTION which adds an item into the array.

Inside **store/places-reducer.js**

```
import { ADD_PLACE } from './places-actions';
import Place from '../models/Place';
const initialState = { places: [] };

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(
              action.placeData.id, 
              action.placeData.title, 
              action.placeData.location
            );
            return { 
              places: state.places.concat(newPlace) 
            };
        default: return state;
    }
};
```

### Step 4: Import Redux Store into App.js

inside **App.js**

```
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import AppNavigator from './navigation/AppNavigator'

// Redux
import { 
  createStore, 
  combineReducers, 
  applyMiddleware 
} from 'redux'

import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import placesReducer from './store/places-reducer'

const rootReducer = combineReducers({ places: placesReducer })

export default function App() {
  return (
    <Provider 
    store={
      createStore(rootReducer, applyMiddleware(ReduxThunk))
    }>
      <AppNavigator />
    </Provider>
  );
}
```

### Step 5: Create a AddNewPlace component

This component has two inputs and a button. When the user saves, it will dispatch the data entered to the actions.

Inside **screens/NewPlaceScreen.js**

```
import React from 'react';
import {
  ScrollView, 
  View, 
  Button, 
  Text, 
  TextInput,
   StyleSheet
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../constants/Colors';
import * as placesActions from '../store/places-actions';

export default const NewPlaceScreen = props => {

    const [titleValue, setTitleValue] = useState('');
    const [locationValue, setLocationValue] = useState('');
    const dispatch = useDispatch();

    const savePlaceHandler = () => {
        dispatch(placesActions.addPlace(titleValue, locationValue));
        props.navigation.goBack();
    };
    return (
        <ScrollView>
            <View style={styles.form}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setTitleValue(text)}
                    value={titleValue}
                    placeholder="Title"
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => { setLocationValue(text); }}
                    value={locationValue}
                    placeholder="Location"
                />
                <Button title="Save Place" color={Colors.primary} onPress={savePlaceHandler}
                />
            </View>
        </ScrollView>
    );
};
NewPlaceScreen.navigationOptions = { headerTitle: 'Add Place' };
```

### Step 6: Create the ListAllPlaces Component

This component will list all the places in a flatlist. When the user taps on an item, it will go to the Details component on step 7 and pass the palce title parameter.

Inside **screens/PlacesListScreen.js**

```
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Platform, 
  FlatList, 
  TouchableOpacity 
} from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../constants/Colors';

const PlacesListScreen = props => {

    const places = useSelector(state => state.places.places);
    const onSelect = (title) => { 
      props.navigation.navigate('PlaceDetail', { placeTitle: title}); 
    }

    return (
        <View>
            <FlatList
                data={places}
                keyExtractor={(item, index) => index.toString()}
                renderItem={itemData => (
                    <TouchableOpacity
                        onPress={() => onSelect(itemData.item.title)}
                        style={styles.placeItem}>
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>{itemData.item.id} - {itemData.item.title}, {itemData.item.location}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};
PlacesListScreen.navigationOptions = navData => { return { headerTitle: 'All Places' }; };
```

### Step 7: Create a PlaceDetailScreen Component

This screen component will get the place title parameter from the navigator and display it on screen.

Inside **screens/DetailScreen.js**

```
import React from 'react';
import { 
  ScrollView, 
  Image, 
  View, 
  Text, 
  StyleSheet 
} from 'react-native';
import Colors from '../constants/Colors';

const DetailScreen = props => {
    const placeTitle = props.navigation.getParam('placeTitle');
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                  <Text style={styles.address}>{placeTitle}</Text>
                </View>
            </View>
        </ScrollView>
    );
};
DetailScreen.navigationOptions = navData => { return { headerTitle: navData.navigation.getParam('placeTitle') }; };
```

### Related Posts

- [React Native Series Part 1 - Project Setup](/blog/react-native-series-1)
- [React Native Series Part 2 - Add Redux](/blog/react-native-series-2)
- [React Native Series Part 3 - Access the Camera](/blog/react-native-series-3)
- [React Native Series Part 4 - Setup SQLite and File Management](/blog/react-native-series-4)
- [React Native Series Part 5 - Add SQLite Operations (CRUD)](/blog/react-native-series-5)