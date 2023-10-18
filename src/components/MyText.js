import { StyleSheet, Text } from "react-native"
import { Colors } from "../../constants/colors"

export default function MyText({ children, type = "body" }) {
  return <Text style={styles[type]}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.primary,
  },
  body: {
    fontSize: 18,
    colors: Colors.dark,
  },
  caption: {
    fontSize: 14,
    colors: Colors.dark,
  },
})
