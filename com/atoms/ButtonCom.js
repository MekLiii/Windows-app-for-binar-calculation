/* eslint-disable prettier/prettier */
import React from 'react';
import {Button} from 'react-native';

const ButtonCom = ({title, color, onPress, style}) => {
  return (
    <Button
      title={title}
      color={color}
      onPress={onPress}
      styles={style}
    />
  );
};
export default ButtonCom;


