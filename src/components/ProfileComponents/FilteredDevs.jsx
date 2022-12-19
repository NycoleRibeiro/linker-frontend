import React, {useState, useEffect} from 'react';
import { View,
    Text}
from 'react-native';

import AppHeader from '../AppHeader'
import HomeButtons from '../Button/HomeButtons'
import DevViewByExplore from './DevViewByExplore'

// Dados teste... remover após implementar banco de dados
import { empresas } from '../../../assets/dadosTeste.js'
import { desenvolvedores } from '../../../assets/dadosTeste.js'

export function FilteredDevs(props) {

    const filtro = props.filtro

    const filteredDevs = []

    // Coloca na lista os devs no qual o filtro está dentro da lista de interesses do dev
    // Da pra melhorar qnd tiver o banco de dados
    for (let i = 0; i < desenvolvedores.length; i++) {
        if (desenvolvedores[i].interesses.includes(filtro)) {
            filteredDevs.push(desenvolvedores[i])
        }
    }

    const [devsRow, setDevsRow] = useState(filteredDevs);
    const [currentDev, setCurrentDev] = useState(filteredDevs[0])


    const returnDev = () => {
        // ao clicar no botão (return), retorna para a dev anterior
        let index = devsRow.indexOf(currentDev);
        if (index > 0) {
            setCurrentDev(devsRow[index - 1]);
        }
    }

    const passDev = () => {
        // ao clicar no botão (x) passa para a próximo dev
        let index = devsRow.indexOf(currentDev);
        if (index < devsRow.length - 1) {
            setCurrentDev(devsRow[index + 1]);
        }
    }

    const okDev = () => {
        // o dev vai ser enviado pra página de **LIKES**
        // Página de likes funciona como um "banco de talentos"
        // é um like "diferente", o dev não é aprovado em nenhuma vaga se for curtido através desta tela

        // tela inicial passa para o proximo dev
        passDev()
    }


    // Se não houver devs, retorna uma tela dizendo que não há devs nessa categoria
    if (filteredDevs.length == 0) {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "#18181b"
            }}>
                <AppHeader
                headerType='image'/>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>Não há desenvolvedores nessa categoria</Text>
                </View>
            </View>
        )
    } else {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "#18181b",
            }}>
                <AppHeader
                headerType='image'/>

                <DevViewByExplore
                dev={currentDev}
                />

                <HomeButtons
                onPressReturn={returnDev}
                onPressOk={okDev}
                onPressPass={passDev}/>
            </View>
        );
    }
}

export default FilteredDevs;
