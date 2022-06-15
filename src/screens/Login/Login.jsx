import React, {useState, useEffect} from 'react';
import { View,
  ImageBackground, }
from 'react-native';
import { css } from './Css.js';
import LoginButton from '../../components/Button/LoginButton';

function Login(props) {
  const [contaType, setContaType] = useState('');

  useEffect(() => {
      if (contaType === 'google') {
        // teste do botão
        console.log(props.route.params.id, 'logou com google');

        if (props.route.params.id === 'empresa') {
            // Se for empresa redireciona para os dados iniciais da empresa
            props.navigation.reset({
                index: 0,
                routes: [{
                    name: 'DadosEmpresaRoutes'
                }]
            });
        } else if (props.route.params.id === 'desenvolvedor') {
            // Se for desenvolvedor redireciona para os dados iniciais do desenvolvedor
            props.navigation.reset({
                index: 0,
                routes: [{
                    name: 'DadosDevRoutes'
                }]
            });
        }
      } else if (contaType === 'linkedin') {
            // teste do botão
            console.log(props.route.params.id, 'logou com linkedin');

            if (props.route.params.id === 'empresa') {
                // Se for empresa redireciona para os dados iniciais da empresa
                props.navigation.reset({
                    index: 0,
                    routes: [{
                        name: 'DadosEmpresaRoutes'
                    }]
                });
            } else if (props.route.params.id === 'desenvolvedor') {
                // Se for desenvolvedor redireciona para os dados iniciais do desenvolvedor
                props.navigation.reset({
                    index: 0,
                    routes: [{
                        name: 'DadosDevRoutes'
                    }]
                });
            }
      }
    }, [contaType]);

  return (
    <View style={css.container}>
      <ImageBackground
        source={require('../../../assets/img/loginscreen.png')}
        resizeMode="cover"
        style={css.background} />
      <View style={css.content}>
        <LoginButton
          icon="google"
          title="ENTRAR COM O GOOGLE"
          onPress={() => setContaType('google')}
        />
        <LoginButton
          icon="linkedin"
          title="ENTRAR COM LINKEDIN"
          onPress={() => setContaType('linkedin')}
        />
      </View>
    </View>
  );
}

export default Login;
