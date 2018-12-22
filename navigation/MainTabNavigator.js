import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TrendingScreen from '../screens/TrendingScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMoviesScreen from '../screens/CategoryMoviesScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';

const TrendingStack = createStackNavigator({
  Trending: TrendingScreen,
  MovieDetail: MovieDetailScreen
});

TrendingStack.navigationOptions = {
  tabBarLabel: 'Trending',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const CategoriesStack = createStackNavigator({
  Category: CategoriesScreen,
  CategoryMovies: CategoryMoviesScreen,
  CategoryMovieDetail: MovieDetailScreen
});

CategoriesStack.navigationOptions = {
  tabBarLabel: 'Kategori',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

export default createBottomTabNavigator({
  TrendingStack,
  CategoriesStack,
});
