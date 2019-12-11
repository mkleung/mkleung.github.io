---
title: "React Native Series Part 5 - Add SQLite Operations (CRUD)"

date: "2019-12-12"
featuredImage: "../../assets/blog/react.png"
categories:
  - ReactNative
  - All
  - New
---

Inside **database/db.js**

- Use the INSERT INTO command to add a record to a table (places)
- Inside the parenthesis, add the fields that you want to target except the id

```
// Insert Data into database

export const insertPlace = (title, imageUri, address, lat, lng) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?);`,
                [title, imageUri, address, lat, lng],
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

### Update Action 

Inside **places-actions.js**

```
export const addPlace = (title, location, image) => {
    let id = previousId + 1;
    previousId = id;
    
    return async dispatch => {

        // Get filename fr0m image .e.g. myimage.jpg
        // Then create a new path
        const newPath = FileSystem.documentDirectory + image.split('/').pop();;

        // The code below takes exinsting image path and
        // Saves it into the new path on filesystem
        try {
            await FileSystem.moveAsync({
                from: image,
                to: newPath
            })

            // ADD PLACE into DATABASE
            const insertDB = await insertPlace(
                title,
                newPath,
                "Dummy Address",
                15.6,
                12.3
            );
            console.log(insertDB)
            
            // Reducer ADD_PLACE (adds an item to store)
            dispatch({
                type: ADD_PLACE,
                placeData: {
                    id: insertDB.insertId,
                    title: title,
                    location: location,
                    imageUri: newPath
                }
            })
        } catch (err) { console.log(err) }
    }
};
```

### Update Reducer

```
const newPlace = new Place(
    action.placeData.id.toString(),
    action.placeData.title,
    action.placeData.location,
    action.placeData.imageUri,
);
```

### Result

Now start the app and add a new place. You should see the result below.

The rows affected: 1 means that one row has been added to the database table.

<img src="./result.png" alt="react-native-series-5" width="300"  /><br/>


### Related Posts

- [React Native Series Part 1 - Project Setup](http://localhost:8000/blog/react-native-series-1)
- [React Native Series Part 2 - Add Redux](http://localhost:8000/blog/react-native-series-2)
- [React Native Series Part 3 - Access the Camera](http://localhost:8000/blog/react-native-series-3)
- [React Native Series Part 4 - Setup SQLite and File Management](http://localhost:8000/blog/react-native-series-4)
- [React Native Series Part 5 - Add SQLite Operations (CRUD)](http://localhost:8000/blog/react-native-series-5)