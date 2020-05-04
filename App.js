import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { enableScreens } from 'react-native-screens';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals';
import { Provider } from 'react-redux';


enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

const rootReducer = combineReducers({
  meals: mealsReducer
});
const store = createStore(rootReducer);

export default function App() {
  const [font, setFont] = useState(false);
  
  if (!font) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFont(true)} />
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}


// git add . && git status && git commit -m "feat(): feat desc here" && git push && git status && git log