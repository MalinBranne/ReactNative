// Index.ios.js - place code for IOS here

//Import librabry ro help create component
import React from 'react';
import { AppRegistry, View } from 'react-native'; //   Import the Text and Appregistry components from the react-native library
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'


// Create component
const App = () => {
    return (
        <View>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );
}

// Same code, but better looking

// const App = () => (
//     <Text>Some text</Text>
// );



// Render component to device. This statements featherfunction automatically returns App component without the actual return statement
AppRegistry.registerComponent('albums', () => App); // Only the 'root' component uses 'Appregistry'

