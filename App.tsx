import React, { createContext, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Bottom tab screens
import HomeScreen from './src/screens/HomeScreen';
import LiveBiddingScreen from './src/screens/LiveBiddingScreen';
import SellProductStack from './src/navigation/SellProductStack';
import MyAdsScreen from './src/screens/MyAdsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

// Auth screens
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

// Custom tab bar component
import CustomTabBar from './src/components/CustomTabBar';
import MyAdsStack from './src/navigation/MyAdsStack'; // ✅ Correct import

// Authentication Context
interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar?: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Authentication Provider
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
    setIsLoggedIn(true);
  };
  
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Root stack to switch between Auth flow and Main app
export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

// Auth stack (Login and Sign up)
const AuthStack = createNativeStackNavigator();
function AuthStackScreen() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />   
      <AuthStack.Screen name="Signup" component={SignupScreen} /> 
    </AuthStack.Navigator>
  );
}

// Bottom tabs for main app after login
const Tab = createBottomTabNavigator();
function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}  // Use custom tab bar
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />  
      <Tab.Screen name="Live Bidding" component={LiveBiddingScreen} /> 
      <Tab.Screen name="Sell Product" component={SellProductStack} />  
      <Tab.Screen name="My Ads" component={MyAdsStack} />  
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// Root stack decides what to show: Auth or Main app
const RootStack = createNativeStackNavigator<RootStackParamList>();

// App Navigator Component
const AppNavigator = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <RootStack.Screen name="Main" component={MainTabNavigator} />  // Show main app if logged in
        ) : (
          <RootStack.Screen name="Auth" component={AuthStackScreen} />  // Show login/signup if not logged in
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
