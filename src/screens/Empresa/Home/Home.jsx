import React, {useState, useEffect} from 'react';
import { View,
    Text}
from 'react-native';
import { css } from './Css.js';

import AppHeader from '../../../components/AppHeader'
import HomeButtons from '../../../components/Button/HomeButtons'
import DevView from '../../../components/ProfileComponents/DevView'

// Dados teste... remover após implementar banco de dados
import { empresas } from '../../../../assets/dadosTeste.js'
import { desenvolvedores } from '../../../../assets/dadosTeste.js'

export function Home() {
    //dados para teste, será substituido por dados do banco
    const empresa = empresas[0];
    const [devsRow, setDevsRow] = useState([desenvolvedores[0], desenvolvedores[1], desenvolvedores[2]]);
    const [currentDev, setCurrentDev] = useState(desenvolvedores[0])

    const returnDev = () => {
        // ao clicar no botão (return), retorna para o dev anterior
        let index = devsRow.indexOf(currentDev);
        if (index > 0) {
            setCurrentDev(devsRow[index - 1]);
        }
    }

    const passDev = () => {
        // ao clicar no botão (x) passa para o próximo dev
        let index = devsRow.indexOf(currentDev);
        if (index < devsRow.length - 1) {
            setCurrentDev(devsRow[index + 1]);
        }
    }

    const okDev = () => {
        // o dev vai ser enviado pra página de contatos/chat
        // tela inicial passa para o proximo dev
        passDev()
    }

    return (
        <View style={css.container}>
            <AppHeader
            headerType='image'/>

            <DevView
            dev={currentDev}
            />

            <HomeButtons
            onPressReturn={returnDev}
            onPressOk={okDev}
            onPressPass={passDev}/>
        </View>
    );
}

export default Home;
