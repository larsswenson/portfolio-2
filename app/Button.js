import { StyleSheet, View, Text, Pressable } from 'react-native';
import styles from './styles';

export default function Button ({ label, theme, onPress }) {
    if (theme === "primary") {
        return ( 
            <View
                style={[
                    styles.buttonContainer,
                    { borderwidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
                ]}>
                <Pressable style={[styles.button, {backgroundColor: '#fff'} ]} onPress={onPress}>
                    <Text style={[styles.buttonLabel, {color: '#25292e'} ]} >{label}</Text>
                </Pressable>
            </View>
        )
    }
}
