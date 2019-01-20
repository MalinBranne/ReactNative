// Import libraries for making component
import React from 'react';
import { Text, View } from 'react-native'; // destructured import, importing only the text instead of the whole library.


// Make component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;//destructuring styles variable to reference our styling, removing duplicate code

    // if you have a single line of jsx then dont use parentheses and put the retunstatement and the tag om she ame line.
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}

//Styling

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 2,
        position: 'relative',
        // Shadow not working
        shadowColor: '#000', //black
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 1
    },
    textStyle: {
        color: 'grey',
        fontSize: 30
    }

}

// Make the component available to other parts of the app
export default Header;