import React from "react";
import { useState } from 'react';
import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import styles from "../styles";
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';

import Button from '../Button';
import ImageViewer from '../ImageViewer';

const PlaceholderImage = require("../pcg.png");

export default function Pelletier() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pelletier Construction Group</Text>
      <Text style={styles.buttonText}>
        https://pelletierconstructiongroup.com/
      </Text>
      <Text style={styles.buttonText}>Product Owner</Text>
        <View style={styles.imageContainer}>
            <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage}/>
        </View>
        <View style={styles.footerContainer}>
            <Button theme='primary' label='Choose a photo' onPress={pickImageAsync}/>
            <Button label='Use this photo'/>
        </View>
        <StatusBar style='auto'/>
        <View>
        <Link push href="/Projects" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Back to Projects</Text>
        </Pressable>
      </Link>
      </View>
    </View>
  )
};

