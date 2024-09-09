import React from 'react';
import { Text } from 'react-native';

export default function Saludar(props){
    const {firstname,lastname } = props;
    return <Text>React native New! {firstname} {lastname}</Text>
}

Saludar.defaultProps = {
    firstname: 'Doniel',
    lastname: 'Acosta'
}