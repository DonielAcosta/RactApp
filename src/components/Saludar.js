import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default function Saludar(props){
    const {firstname,lastname } = props;
    return <Text>React native New! {firstname} {lastname}</Text>
}

Saludar.defaultProps = {
    firstname: 'Doniel',
    lastname: 'Acosta'
}

Saludar.propTypes ={
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string
}