import * as React from 'react';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './Pages/HomePage';
import RecherchePage from './Pages/RecherchePage';
import CommandePage from './Pages/CommandePage';
import ProfilePage from './Pages/ProfilePage';
import ArticleOne from './Pages/ArticleOne';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor='black' />
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='home' component={HomePage}/>
        <Stack.Screen name='commande' component={CommandePage}/>
        <Stack.Screen name='profile' component={ProfilePage}/>
        <Stack.Screen name='search' component={RecherchePage}/>
        <Stack.Screen name='article' component={ArticleOne}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;