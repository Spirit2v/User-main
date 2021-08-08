/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import {NavigationContainer} from '@react-navigation/native';
 import 'react-native-gesture-handler';
 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import StackNavigator from './Source/Navigation/StackNavigator';
 import StatusBar from './Source/Components/StatusBar';
 
 const App = () => {
   return (
     <>
       <StatusBar backgroundColor="#121417" barStyle="light-content" />
       <NavigationContainer>
         <StackNavigator />
       </NavigationContainer>
     </>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
     fontFamily: 'Open Sans',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 