import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';


const ProfilePage = () => {

    return (
        <SafeAreaView>
            
        <Text>hi from ProfilePage</Text>
        <Image source={require('./assets/blank_pfp.png')} />
                
        </SafeAreaView>
    );
}

export default ProfilePage;