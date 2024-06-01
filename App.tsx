import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

interface AppProps {
}
class App extends Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          children
          screenOptions={{headerShown: false}}></Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;