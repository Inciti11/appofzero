import React from 'react';
import { View, Text, ImageBackground, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
    <ImageBackground 
      source={require('./assets/front2.png')} 
      style={styles.backgroundImage}
    >
        <View style={styles.overlay}>
          <View style={styles.textContainer}>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>inciti.co</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button mode="contained" style={styles.loginButton} onPress={() => {}}>
              INICIAR SESIÓN
            </Button>
            <Button mode="outlined" style={styles.registerButton} onPress={() => {}}>
              REGÍSTRATE
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: 20,
  },
  description: {
    textAlign: 'center',
    color: '#666',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
  },
  loginButton: {
    marginBottom: 10,
    backgroundColor: '#3b5998',
  },
  registerButton: {
    borderColor: '#3b5998',
  },
});

export default WelcomeScreen;
