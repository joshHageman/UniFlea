import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProfilePage from './src/ProfilePage';

export default function App() {
  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>hi from app.js</Text>
      <ProfilePage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
