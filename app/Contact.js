import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import styles from './styles'; 

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact:</Text>
      <Text style={styles.buttonText}>lars.swenson@gmail.com</Text>
      <Text style={styles.buttonText}>https://www.linkedin.com/in/lars-swenson/</Text>
      <Text style={styles.buttonText}>https://github.com/larsswenson</Text>
      <Text style={styles.buttonText}>+1 (206) 718-3398</Text>
      <Link push href="/Home" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}
