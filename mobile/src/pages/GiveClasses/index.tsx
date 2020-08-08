import React from 'react';
import { View, Text, ImageBackground, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {
  function handleNavigateBack() {
    return Linking.openURL('http://192.168.0.104:3000/give-classes');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImage}
        style={styles.content}
      >
        <Text style={styles.title}>Want to be a Proffy?</Text>
        <Text style={styles.description}>
          To start, you need to register on our web platform.
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Register</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
