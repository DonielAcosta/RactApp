import React from "react";
import { TextInput,Button ,Text, View} from "react-native";
export default function LoginForm(){
    return(
        <view>
            <TextInput placeholder="Email"/>
            <TextInput placeholder="Password"/>
            <Button>Enviar</Button>
        </view>
    ); 
}