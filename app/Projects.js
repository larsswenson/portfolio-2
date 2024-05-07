import React from "react";
import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import styles from './styles';

export default function Projects() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>
      <Link
        href={{
          pathname: "/projects/[id]",
          params: { id: "Pelletier" },
        }}
        asChild
      >
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            View Pelletier Construction Group project
          </Text>
        </Pressable>
      </Link>
      <Link
        href={{
          pathname: "/projects/[id]",
          params: { id: "Ulloa" },
        }}
        asChild
      >
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>View Ulloa Barbershop project</Text>
        </Pressable>
      </Link>
      <Link href="/Home" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}


