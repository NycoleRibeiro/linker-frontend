import React, {useState, useEffect} from 'react';
import { View,
    Text}
from 'react-native';
import { css } from './Css.js';

import AppHeader from '../../../components/AppHeader'
import VagaView from '../../../components/Vagas/VagaView'
import HomeButtons from '../../../components/Button/HomeButtons'

// Dados teste... remover após implementar banco de dados
import { empresas } from '../../../../assets/dadosTeste.js'

export function Home() {
    //dados para teste, será substituido por dados do banco
    const empresa = empresas[0];
    const vagas = empresa.vagas
    const [vagasRow, setVagasRow] = useState([vagas[0], vagas[1], vagas[2], vagas[3]]);
    const [currentVaga, setCurrentVaga] = useState(vagas[1])

    const returnVaga = () => {
        let index = vagasRow.indexOf(currentVaga);
        if (index > 0) {
            setCurrentVaga(vagasRow[index - 1]);
        }
    }

    const passVaga = () => {
        let index = vagasRow.indexOf(currentVaga);
        if (index < vagasRow.length - 1) {
            setCurrentVaga(vagasRow[index + 1]);
        }
    }

    const okVaga = () => {
        // o teste da vaga vai ser enviado pra página de likes
        // tela inicial passa para a proxima vaga
        passVaga()
    }

    return (
        <View style={css.container}>
            <AppHeader
            headerType='image'/>

            <VagaView
            vaga={currentVaga}
            empresa={empresa}
            state={1}/>

            <HomeButtons
            onPressReturn={returnVaga}
            onPressOk={okVaga}
            onPressPass={passVaga}/>
        </View>
    );
}

export default Home;
