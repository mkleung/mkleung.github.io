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
- Create Redux Actions
- Create Redux reducer
- Import Redux Store into App.js


Definitions
===========

**Store**
The store is where the entire state of your application lives. It is one big object.

**Action** 
Redux actions are like instructions to modify the store. It also contains the payload (data) from the components.

**Reducer**
A reducer contains a list of **Actions** that get called whenever a component needs it. Reducer reads the payload from the actions and update the store.

### Step 1: Install React Redux

- Install the redux packages
- Redux Thunk middleware allows you to write action creators that return a function instead of an action

```npm install --save redux```

```npm install --save react-redux```

```npm install --save redux-thunk```


### Step 2: Create the Place Class

- The Place class/object can be used to hold information about a place like place title, image, etc

<div class="filename">models/Place.js</div>

```jsx
export default class Place {
    constructor(id, title, imageUri) {
        this.id = id;
        this.title = title;
        this.imageUri = imageUri;
    }
}
```

### Step 3: Create a Redux Action

- Recall: Actions are like instructions to modify the store.
- We create an action for adding a place and add the data that it will contain.

<div class="filename">store/places-actions.js</div>

```jsx
export const INSERT_PLACE  = 'INSERT_PLACE ';
let previousId = 0;
export const insertPlaceAction  = (title) => {
    let id = previousId + 1;
    previousId = id;
    return {
        type: INSERT_PLACE,
        placeData: { 
          id: id, 
          title: title
        }
    }
};

```

### Step 4: Create a Redux Reducer

- Recall: A reducer contains a list of **Actions** that get called whenever a component needs it. 
- We first initialize an empty array (initialState) which will contain an array of places. 
- We then add a case for INSERT_ACTION which adds an item into the array.
- We create an object called newPlace which will contain data passed from the action
- Finally we push the newly created place into the initial array.

<div class="filename">store/places-reducer.js</div>

```jsx
import { INSERT_PLACE } from './places-actions';
import Place from '../models/Place';
const initialState = { places: [] };

export default (state = initialState, action) => {
    switch (action.type) {
        case INSERT_PLACE:
          const newPlace = new Place(
              action.placeData.id.toString(),
              action.placeData.title,
              action.placeData.imageUri,
          );
          return {
              places: state.places.concat(newPlace)
          };
        default: return state;
    }
};
```

### Step 4: Import Redux Store into App.js

- First we import the redux packages
- Then we create a provider which will wrap the navigator
- The provider makes redux available to any nested components inside AppNavigator.

<div class="filename">App.js</div>

```jsx
...

// Redux Imports

import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import placesReducer from './store/places-reducer'

export default function App() {
  return (
    <Provider store={
      createStore(combineReducers({ places: placesReducer }),
        applyMiddleware(ReduxThunk))}>
      <AppNavigator />
    </Provider>
  );
}
```

### Step 5: Create a AddNewPlace component Screen

- This component has an input and a button. 
- When the user enters a value into the input and presses save, an action called INSERT_PLACE gets dispatched which adds the value to the store.


<div class="filename">screens/NewPlaceScreen.js</div>

```jsx
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

export default NewPlaceScreen = props => {

    const [titleValue, setTitleValue] = useState('');
    const dispatch = useDispatch();

    const savePlaceHandler = () => {
        dispatch(placesActions.insertPlaceAction(titleValue, selectedImage));
        props.navigation.goBack();
    };
    return (
        <ScrollView>
            <View style={styles.form}>
                <TextInput style={styles.textInput} onChangeText={(text) => setTitleValue(text)} value={titleValue} placeholder="Title" />
                <Button title="Save Place" color={Colors.primary} onPress={savePlaceHandler} />
            </View>
        </ScrollView>
    );
};
NewPlaceScreen.navigationOptions = { headerTitle: 'Add Place' };
```

### Step 6: Create the ListAllPlaces Component

- This component will list all the places in a flatlist.
- The **useSelector** is being used to retrieve the existing array of places from the redux store.
- The flatlist then displays the items in the places array.
- We add TouchableOpacity so that when the user taps on an item, it will go to the Details component on step 7 and pass the place Id parameter.

<div class="filename">screens/PlacesListScreen.js</div>

```jsx
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

export default PlacesListScreen = props => {

    // Retrieve all places from redux
    const places = useSelector(state => state.places.places);

    // Navigate to PlaceDetail screen on tap and pass the id parameter
    const onSelect = (id) => {
        props.navigation.navigate('PlaceDetail', { placeId: id });
    }

    return (
        <View>
            <FlatList
                data={places} keyExtractor={(item, index) => index.toString()}
                renderItem={itemData => (
                    <TouchableOpacity
                        onPress={() => onSelect(itemData.item.id)}
                        style={styles.placeItem}>
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>{itemData.item.id} - {itemData.item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

PlacesListScreen.navigationOptions = navData => { return { headerTitle: 'All Places' }; };

const styles = StyleSheet.create({
    placeItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#ccc',
        borderColor: Colors.primary,
        borderWidth: 1
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    address: {
        color: '#666',
        fontSize: 16
    }
});

```

### Step 7: Create a PlaceDetailScreen Component 

- This screen component will get the place title parameter from the navigator and display it on screen.
- Firstly, get the id from PlacesListScreen (getParam)
- Secondly, use (useSelector ... find) to get the corresponding place id that matches with the place id from the PlacesListScreen and then display the place details on the screen.

<div class="filename">screens/DetailScreen.js</div>

```jsx
import React from 'react';
import { ScrollView, TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { useSelector, useDispatch } from 'react-redux';

const DetailScreen = props => {

    // Get the id from PlacesListScreen
    const placeId = props.navigation.getParam('placeId');

    // get all places and get the place that matches with the id from PlacesListScreen
    const selectedPlace = useSelector(state =>
        state.places.places.find(place => place.id === placeId)
    );

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.title}>{selectedPlace.title}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

DetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('placeTitle')
    };
};

const styles = StyleSheet.create({
    addressContainer: {
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default DetailScreen;
```

### Step 8: Add the new routes to AppNavigator

<div class="filename">navigation/AppNavigator.js</div>

```jsx
.
.
.
const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    NewPlace: NewPlaceScreen,
    ListPlaces: PlacesListScreen,
    PlaceDetail: DetailScreen,
}
.
.
.
```


### Result:
<img src="../posts/react-native-series-2.gif" alt="react-native-series-2" width="300"  />


### Related Posts

- [React Native Series Part 1 - Project Setup](/blog/react-native-series-1)
- [React Native Series Part 2 - Add Redux](/blog/react-native-series-2)
- [React Native Series Part 3 - Access the Camera](/blog/react-native-series-3)
- [React Native Series Part 4 - Setup SQLite and File Management](/blog/react-native-series-4)
- [React Native Series Part 5 - Add Insert SQLite Operation](/blog/react-native-series-5)
- [React Native Series Part 6 - Add Fetch SQLite Operation](/blog/react-native-series-6)
- [React Native Series Part 7 - Add Delete SQLite Operation](/blog/react-native-series-7)