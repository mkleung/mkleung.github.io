---
title: "React Native Series Part 7 - Add Delete SQLite Operation"

date: "2019-12-17"
featuredImage: "../../assets/blog/react.png"
categories:
  - React Native
  - All
  - New
---

###Step 1 - Add the delete database function

<div class="filename">database/db.js</div>

```jsx
// Delete Data from database
export const deletePlaceDB = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `DELETE FROM places where id=?;`,
                [id],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
};
```

###Step 2 - Add the delete action

<div class="filename">store/places-actions.js</div>

```jsx
// DELETE PLACE ACTION
export const DELETE_PLACE = 'DELETE_PLACE';
export const deletePlaceAction = (id) => {
    return async dispatch => {
        try {
            const deleteDB = await deletePlaceDB(
                id
            );
            dispatch({
                type: DELETE_PLACE,
                placeData: {
                    id: deleteDB.id
                }
            })
        } catch (err) { console.log(err) }
    }
};
```

### Step 3 - add delete place reducer case

<div class="filename">store/places-reducer.js</div>

```jsx
case DELETE_PLACE:
    return {
        places: state.places.filter(place =>
            place.id !== action.placeData.id
        )
};
```

### Step 4 - Add delete button inside Detail component

<div class="filename">screens/DetailScreen.js</div>

```jsx
import { useSelector, useDispatch } from 'react-redux';
import * as placesActions from "../store/places-actions"
const DetailScreen = props => {
    // Get place
    const placeId = props.navigation.getParam('placeId');
    const selectedPlace = useSelector(state =>
        state.places.places.find(place => place.id === placeId)
    );
    // Delete place
    const dispatch = useDispatch();
    const onDelete = (id) => {
        dispatch(placesActions.deletePlaceAction(id));
        props.navigation.navigate('ListPlaces', {
            onBack: () => this.refresh()
        });
    }
    
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            <Image source={{ uri: selectedPlace.imageUri }} style={styles.image} />
            <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.title}>{selectedPlace.title}</Text>
                    <Text style={styles.address}>{selectedPlace.address}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => onDelete(placeId)}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};
```

### Result:

<img src="../posts/2019-12-12-react-native-series-7.gif" alt="react-native-series-7" width="300"  />

### Related Posts

- [React Native Series Part 1 - Project Setup](/blog/react-native-series-1)
- [React Native Series Part 2 - Add Redux](/blog/react-native-series-2)
- [React Native Series Part 3 - Access the Camera](/blog/react-native-series-3)
- [React Native Series Part 4 - Setup SQLite and File Management](/blog/react-native-series-4)
- [React Native Series Part 5 - Add Insert SQLite Operation](/blog/react-native-series-5)
- [React Native Series Part 6 - Add Fetch SQLite Operation](/blog/react-native-series-6)
- [React Native Series Part 7 - Add Delete SQLite Operation](/blog/react-native-series-7)
