import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

export default function App() {
  const [font, setFont] = useState(false);
  
  if (!font) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFont(true)} />
  }

  return (
    <MealsNavigator />
  );
}


// git add . && git status && git commit -m "feat(): feat desc here" && git push && git status && git log