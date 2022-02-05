import React, { useState } from 'react';
import * as Font from 'expo-font';
import{ AppLoading } from 'expo';
import RootStackScreen from "./app/screens/RootStackScreen";
import axios from 'axios';




export default function App() {
  const [userToken, setUserToken] = React.useState(null);

  async function login(userToken = null) {
    setUserToken(userToken)
  }

  async function logout() {
    setUserToken(null)
  }



  
  return (
    RootStackScreen()
  );
}
