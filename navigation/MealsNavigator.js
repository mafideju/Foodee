import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categorias: CategoriesScreen,
    Refeições: CategoriesMealsScreen,
    Detalhes: MealDetailScreen
});

export default createAppContainer(MealsNavigator);