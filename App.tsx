import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home-screen/home-screen';
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();

interface AppProps {
}
class App extends Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    LogBox.ignoreAllLogs()
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;