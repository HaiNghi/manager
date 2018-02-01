// import library for making a components
import React from 'react';
import {
    Text,
    View
} from 'react-native';


// Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 30,
       
    },
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingTop: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        elevation: 2,
        position: 'relative'
        

    }
};

// Make the component available to other parts of the app
export { Header };

