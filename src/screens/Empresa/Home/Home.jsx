import React, {useState, useEffect} from 'react';
import { View,
    Text}
from 'react-native';
import { css } from './Css.js';

import AppHeader from '../../../components/AppHeader'
import HomeButtons from '../../../components/Button/HomeButtons'
import DevView from '../../../components/ProfileComponents/DevView'
import DevService from '../../../service/DevService.js';

// Dados teste... remover após implementar banco de dados
import { empresas } from '../../../../assets/dadosTeste.js'
import { desenvolvedores as desenvolvedoresTeste } from '../../../../assets/dadosTeste.js'

import LikeService from '../../../service/LikeService.js';

const likeService = LikeService.getInstance();
const devService = DevService.getInstance();
export function Home() {

    //dados para teste, será substituido por dados do banco
    const empresa = empresas[0];
    const [devsRow, setDevsRow] = useState([desenvolvedoresTeste[0], desenvolvedoresTeste[1], desenvolvedoresTeste[2]]);
    const [currentDev, setCurrentDev] = useState(desenvolvedoresTeste[0]);
    const [currentPerguntas, setCurrentPerguntas] = useState([]);



    useEffect(() => {
        devService.explore().then(matches => {
            let devs = matches.map((match)=>{
                const {desenvolvedor} = match;
                desenvolvedor.certificacoes = desenvolvedoresTeste[0].certificacoes;
                desenvolvedor.photos = desenvolvedor.imagens;
                desenvolvedor.nascimento = {dia: '19', mes: 'Julho', ano: '1999'};


                return desenvolvedor;
            });
            setCurrentDev(devs[0]);
            setCurrentPerguntas(matches[0]["perguntas"]);
            setDevsRow(devs);
        });
    }, []);

    
    const returnDev = () => {
        // ao clicar no botão (return), retorna para a vaga anterior
        let index = devsRow.indexOf(currentDev);
        if (index > 0) {
            setCurrentDev(devsRow[index - 1]);
        }
    }

    const passDev = () => {
        // ao clicar no botão (x) passa para a próxima vaga
        let index = devsRow.indexOf(currentDev);
        if (index < devsRow.length - 1) {
            setCurrentDev(devsRow[index + 1]);
        }
    }

    const okDev = () => {
        // o teste da vaga vai ser enviado pra página de likes
        // tela inicial passa para a proxima vaga
        likeService.like('dev', currentDev)
            .then(() => passVaga());
    }

    return (
        <View style={css.container}>
            <AppHeader
            headerType='image'/>

            <DevView
            dev={currentDev}
            perguntas={currentPerguntas}
            />

            <HomeButtons
            onPressReturn={returnDev}
            onPressOk={okDev}
            onPressPass={passDev}/>
        </View>
    );
}

export default Home;
