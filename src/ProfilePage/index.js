import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, Button } from 'react-native';

const ProfilePage = () => {

    return (
        <SafeAreaView style={[styles.container, styles.button]}>
            
        <Text>hi from ProfilePage</Text>
            <Button style={styles.button} color='#99182e' title='Active Listing' onPress={console.log}/>
            <Button style={styles.button} color='#99182e' title='Reviews and Ratings' onPress={console.log}/>
            <Button style={styles.button} color='#99182e' title='Purchased Items' onPress={console.log}/>
            <Button style={styles.button} color='#99182e' title='Sold Items'onPress={console.log}/>               
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        marginBottom: 20,
        padding: 30,
    }
  });

export default ProfilePage;