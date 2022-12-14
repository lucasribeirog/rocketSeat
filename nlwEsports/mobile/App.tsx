import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';


function Button(props: ButtonProps){
  return <TouchableOpacity>
    <Text>
      {props.title}
    </Text>
  </TouchableOpacity>
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
      <Button title='Send 1'/>
      <Button title='Send 2'/>
      <Button title='Send 3'/>
      <Button title='Hello world'/>
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps{
  title: string;
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
