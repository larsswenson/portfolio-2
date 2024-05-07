import React from "react";
import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import styles from "./styles";

export default function Skills() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skills</Text>
      <Text style={styles.buttonText}>
        Languages: JavaScript, HTML, CSS, Python, PHP, Java
      </Text>
      <Text style={styles.buttonText}>
        Frameworks: React, Expo, Next.js, Node.js
      </Text>
      <Text style={styles.buttonText}>
        Tools: Git/GitHub, VisualStudio, Replit
      </Text>
      <Text style={styles.buttonText}>
        Operating Systems: macOS, Ubuntu Linux, Windows 11
      </Text>
      <Link push href="/Home" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}
