import { StatusBar } from "expo-status-bar"
import { Button, StyleSheet, Text, View } from "react-native"
import { Amplify, Auth } from "aws-amplify"
import { withAuthenticator } from "aws-amplify-react-native"
import awsconfig from "./src/aws-exports"

Amplify.configure(awsconfig)

const App = () => {
  const signOut = async () => {
    try {
      await Auth.signOut()
    } catch (e) {
      console.log("Error logging out:", e)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>Home Screen</Text>
      <Button title="Sign out" onPress={signOut} />
      <StatusBar style="auto" />
    </View>
  )
}

export default withAuthenticator(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
