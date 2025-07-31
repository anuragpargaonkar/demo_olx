// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/AuthStack';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../App';

type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Basic validation
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    // Simulate login success
    Alert.alert('Success', 'Logged in successfully!', [
      {
        text: 'OK',
        onPress: () => {
          // Create dummy user data for login
          const userData = {
            id: '1',
            name: 'User',
            email: email,
            username: email.split('@')[0]
          };
          login(userData); // This will trigger navigation to home screen
        }
      }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOGO</Text>
      <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur. Ipsum massa turpis morbi platea.
          </Text>

          {/* Email label */}
          <Text style={styles.label}>Email address</Text>
          <TextInput 
            placeholder="Enter email address" 
            placeholderTextColor="#999"
            style={styles.input} 
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          {/* Password label */}
          <Text style={styles.label}>Password</Text>
          <TextInput 
            placeholder="Enter password" 
            placeholderTextColor="#999"
            secureTextEntry 
            style={styles.input} 
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
              Sign up
            </Text>
          </Text>
        </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D6D99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  formContainer: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  subtitle: {
    fontSize: 12,
    color: '#777',
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: '#555',
    marginBottom: 4,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 12,
    marginBottom: 12,
    color: '#000',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: '#1D6D99',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#1D6D99',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
  },
  link: {
    color: '#1D6D99',
  },
});
