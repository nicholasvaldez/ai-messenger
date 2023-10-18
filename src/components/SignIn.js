import MyInput from "./MyInput"
import MyButton from "./MyButton"
import MyText from "./MyText"
import { Button } from "react-native"
import React from "react"

export default function SignIn() {
  return (
    <React.Fragment>
      <MyText type="title">Sign In</MyText>
      <MyInput label={"Email"} />
      <MyInput label={"Password"} secureTextEntry />
      <MyButton title={"Sign In"} />
      <Button title="Sign Up" />
    </React.Fragment>
  )
}
