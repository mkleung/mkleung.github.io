---

title: "React Native Series Part 1/5 - Project Setup"

date: "2019-11-26"
featuredImage: "../../assets/blog/react.png"
categories:
  - ReactNative
  - All
---

In this tutorial series, we are going to create an app that takes pictures of public artwork and store the location inside a database which can also be accessed by users around the world. They will be able to view public artworks in your city and rate them.

We will develop the app using react native as it allows quick development in IOS and Android while retaining native features.


### Step 0: Install React Native


We are going to create the app using expo which is easier to install and learn.

Install the react expo CLI

```npm install expo-cli --global```

Create the app using the following command

```expo init my-new-project```


### Step 1: Installation of Navigation


We will first install the navigation

Install the following packages

```npm install --save react-navigation```

```expo install react-native-gesture-handler```

```expo install react-native-reanimated```

```npm install --save react-navigation-stack```


### Step 2: Create Navigation Header

Inside **navigation/AppNavigator.js**

```
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'
import AboutScreen from '../screens/AboutScreen'
import Colors from '../constants/Colors'

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    About: AboutScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
})
export default createAppContainer(AppNavigator)
```

Inside **App.js**
```
import AppNavigator from './navigation/AppNavigator'
export default function App() {
  return (
    <>
      <AppNavigator />
    </>
  )
}
```

### Step 3: Create the screen components

All screens should be inside the screen folder.

Inside **screens/HomeScreen.js**

```
import React from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
};
HomeScreen.navigationOptions = navData => {
    return {
        headerTitle: "Home"
    };
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default HomeScreen;
```

### Step 4: Add a button in the header

```npm install --save react-navigation-header-buttons```

```npm install --save @expo/vector-icons```

Inside **components/HeaderButton.js**

```
import React from 'react';
import {Platform} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import Colors from '../constants/Colors';

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
        />
    );
};
export default CustomHeaderButton;
```

Inside **screens/HomeScreen.js**
Add the navigation code after the return function

```
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

// NAVIGATION
HomeScreen.navigationOptions = navData => {
    return {
        headerTitle: 'HomeScreen ',
        headerRight: 
            (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="About"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => {
                        navData.navigation.navigate("About")
                    }}
                />
                </HeaderButtons>
            )
    }
};
```
