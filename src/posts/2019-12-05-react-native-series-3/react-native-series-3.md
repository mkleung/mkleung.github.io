---
title: "React Native Series Part 3 - Access the Camera"

date: "2019-12-05"
featuredImage: "../../assets/blog/react.png"
categories:
  - ReactNative
  - All
---

In this post, we are going to add the camera feature where the user can take a photo/selfie and save the image.


### What we will learn:
- Install Image Picker to access camera
- Save the image inside the app (but not on phone)
- Display the image saved on the screen


### Result:
<img src="../posts/2019-12-05-react-native-series-3.gif" alt="react-native-series-3" width="300"  /><br/>


### Step 1 – Install Image Picker

```expo install expo-image-picker```

```expo install expo-permissions```

```expo install expo-file-system```

### Step 2 - Access The Camera

Inside **components/ImagePicker.js**

```
import React, { useState } from 'react'
import { View, Button, Image, Text, StyleSheet, Alert } from 'react-native'
import Colors from '../constants/Colors'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

const ImgPicker = props => {
    const [pickedImage, setPickedImage] = useState()
    const takeImageHandler = async () => {
        // ASK FOR CAMERA PERMISSIONS
        const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL)
        if (result.status !== 'granted') {
            Alert.alert(
                "Insufficient Permissions!",
                "You need to grant camera permissions to use this app",
                [{ text: "OK" }]
            )
            return false
        }
        else {
            // ACCESS CAMERA
            const image = await ImagePicker.launchCameraAsync({
                allowEditing: true,
                aspect: [16, 9],
                quality: 0.5,
            });
            setPickedImage(image.uri)
        }
    }

    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
                {!pickedImage ? (
                    <Text>No Image picked</Text>
                ) : (
                        <Image style={styles.image} source={{ uri: pickedImage }} />
                    )}
            </View>
            <Button
                title="Take Image"
                color={Colors.primary}
                onPress={takeImageHandler} />
        </View>
    )
}
const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center',
        marginBottom: 15
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#CCC',
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
export default ImgPicker;
```

### Step 3 - Add Image Picker into the NewPlaceScreen

Put the image picker components somewhere on the screen

Inside **screens/NewPlaceScreen.js**

```
import ImagePicker from '../components/ImagePicker'
   
const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(titleValue, locationValue, selectedImage));
    props.navigation.goBack();
};

// SET IMAGE
const [selectedImage, setSelectedImage] = useState()

const imageTakenHandler = imagePath => {
    setSelectedImage(imagePath)
}
...
 return (
    <ScrollView>
        ...
        <ImagePicker onImageTaken={imageTakenHandler} />
        ...
    </ScrollView>
)
```

### Step 4 - Add image uri to place model

Inside **models/Place.js**

```
class Place {
    constructor(id, title, location, imageUri) {
        ...
        this.imageUri = imageUri;
    }
}
```

### Step 5 - Add image uri to place Reducers and Actions

Inside **store/places-actions.js**

```
...
return {
    type: ADD_PLACE,
    placeData: {
        id: id,
        title: title,
        location: location,
        image: image
    }
}
...
```

store/places-reducer.js

```
...
switch (action.type) {
    case ADD_PLACE:
        const newPlace = new Place(
            action.placeData.id,
            action.placeData.title,
            action.placeData.location,
            action.placeData.image,
        );
        ...
}
```

### Step 6 - Display the image next to item

Inside **screen/PlacesListScreen.js**

```
 <TouchableOpacity onPress={() => onSelect(itemData.item.title)} style={styles.placeItem}>
    <Image style={styles.image} source={{ uri: itemData.item.imageUri }} />
   ...
</TouchableOpacity>
```

### Related Posts

- [React Native Series Part 1 - Project Setup](http://localhost:8000/blog/react-native-series-1)
- [React Native Series Part 2 - Add Redux](http://localhost:8000/blog/react-native-series-2)
- [React Native Series Part 3 - Access the Camera](http://localhost:8000/blog/react-native-series-3)
- [React Native Series Part 4 - Setup SQLite and File Management](http://localhost:8000/blog/react-native-series-4)
- [React Native Series Part 5 - Add SQLite Operations (CRUD)](http://localhost:8000/blog/react-native-series-5)