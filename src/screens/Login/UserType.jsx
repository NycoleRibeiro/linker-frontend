import React from 'react';
import { View,
  ImageBackground,}
from 'react-native';

import { css } from './Css.js';
import LoginButton from '../../components/Button/LoginButton';

function UserType({ navigation }) {

  return (
    <View style={css.container}>
      <ImageBackground
        source={require('../../../assets/img/loginscreen.png')}
        resizeMode="cover"
        style={css.background} />
      <View style={css.content}>
        <LoginButton
          icon="globe"
          title="SOU UMA EMPRESA"
          onPress={() => navigation.navigate('Login',{id: 'empresa'})}
        />
        <LoginButton
          icon="user"
          title="SOU DESENVOLVEDOR"
          onPress={() => navigation.navigate('Login',{id: 'desenvolvedor'})}
        />
      </View>
    </View>
  );
}

export default UserType;
