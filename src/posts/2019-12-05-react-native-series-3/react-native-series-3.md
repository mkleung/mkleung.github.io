---
title: "React Native Series Part 3 - Access the Camera"

date: "2019-12-05"
featuredImage: "../../assets/blog/react.png"
categories:
  - ReactNative
  - All
---

**Expo-image-picker** allows the user to take pictures with their phones and save it into the computer.

### What we will learn:
- Install the Image Picker package to access camera
- Save the image inside the app (but not on phone)
- Display the image saved on the screen

### Step 1 – Install Image Picker

```expo install expo-image-picker```

```expo install expo-permissions```

```expo install expo-file-system```

### Step 2 - Access The Camera

- Create the image picker component
- First ask for permissions (IOS only)
- Then take the image using **launchCameraAsync** and save it into the state

<div class="filename">components/ImagePicker.js</div>

```jsx
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
            props.onImageTaken(image.uri)
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

- Put the **image picker** component inside the **NewPlaceScreen**
- Then save the image from imagepicker into state (imageTakenHandler function)
- Finally dispatch INSERT_PLACE action and add the selectedImage

<div class="filename">screens/NewPlaceScreen.js</div>

```jsx
import ImagePicker from '../components/ImagePicker'
.
.
.
// ADD PLACE
const [titleValue, setTitleValue] = useState('');
const dispatch = useDispatch();
const savePlaceHandler = () => {
    dispatch(placesActions.insertPlaceAction(titleValue, selectedImage));
    props.navigation.goBack();
};

// SET IMAGE
const [selectedImage, setSelectedImage] = useState()
const imageTakenHandler = imagePath => {
    setSelectedImage(imagePath)
}
.
.
.
// SET IMAGE
const [selectedImage, setSelectedImage] = useState()

const imageTakenHandler = imagePath => {
    setSelectedImage(imagePath)
}
...
 return (
    <ScrollView>
        .
        .
        .
        <ImagePicker onImageTaken={imageTakenHandler} />
        .
        .
        .
    </ScrollView>
)
```


### Step 4 - Add image uri to place Reducers and Actions

<div class="filename">store/places-actions.js</div>

```jsx
export const INSERT_PLACE = 'INSERT_PLACE ';
let previousId = 0;
export const insertPlaceAction = (title, imageUri) => {
    let id = previousId + 1;
    previousId = id;
    return {
        type: INSERT_PLACE,
        placeData: {
            id: id,
            title: title,
            imageUri: imageUri
        }
    }
};
```

<div class="filename">store/places-reducer.js</div>

```jsx
.
.
.
const newPlace = new Place(
    action.placeData.id.toString(),
    action.placeData.title,
    action.placeData.imageUri,
);
.
.
.
```

### Step 5 - Display the image next to item

- After saving the image, we can display it inside the placesListScreen

<div class="filename">screen/PlacesListScreen.js</div>

```jsx
 <TouchableOpacity onPress={() => onSelect(itemData.item.title)} style={styles.placeItem}>
    <Image style={styles.image} source={{ uri: itemData.item.imageUri }} />
   .
   .
   .
</TouchableOpacity>
```

### Result:
<img src="../posts/react-native-series-3.gif" alt="react-native-series-3" width="300"  />

### Related Posts

- [React Native Series Part 1 - Project Setup](/blog/react-native-series-1)
- [React Native Series Part 2 - Add Redux](/blog/react-native-series-2)
- [React Native Series Part 3 - Access the Camera](/blog/react-native-series-3)
- [React Native Series Part 4 - Setup SQLite and File Management](/blog/react-native-series-4)
- [React Native Series Part 5 - Add Insert SQLite Operation](/blog/react-native-series-5)
- [React Native Series Part 6 - Add Fetch SQLite Operation](/blog/react-native-series-6)
- [React Native Series Part 7 - Add Delete SQLite Operation](/blog/react-native-series-7)