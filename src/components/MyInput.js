import { StyleSheet, Text, TextInput, View } from "react-native"
import { Colors } from "../../constants/colors"
import React from "react"

export default function MyInput({
  label,
  value,
  onChangeText,
  secureTextEntry,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={label}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 45,
    justifyContent: "center",
    margin: 10,
    padding: 10,
    backgroundColor: Colors.light,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
})
