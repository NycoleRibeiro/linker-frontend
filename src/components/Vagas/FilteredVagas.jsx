import React, {useState, useEffect} from 'react';
import { View,
    Text}
from 'react-native';

import AppHeader from '../AppHeader'
import VagaView from '../Vagas/VagaView'
import HomeButtons from '../Button/HomeButtons'

// Dados teste... remover após implementar banco de dados
import { empresas } from '../../../assets/dadosTeste.js'
import { desenvolvedores } from '../../../assets/dadosTeste.js'


export function FilteredVagas(props) {

    const filtro = props.filtro

    //dados para teste, será substituido por dados do banco
    const empresa = empresas[0];
    const vagas = empresa.vagas

    const filteredVagas = []
    // Checa se o filtro está dentro da lista de areas da vaga
    for (let i = 0; i < vagas.length; i++) {
        if (vagas[i].areas.includes(filtro)) {
            filteredVagas.push(vagas[i])
        }
    }


    const [vagasRow, setVagasRow] = useState(filteredVagas);
    const [currentVaga, setCurrentVaga] = useState(filteredVagas[0])

    // Requisitos do desenvolvedor (requisitos em comum com os pedidos na vaga ficarão de outra cor)
    const req2Match = desenvolvedores[0].hardSkills

    const returnVaga = () => {
        // ao clicar no botão (return), retorna para a vaga anterior
        let index = vagasRow.indexOf(currentVaga);
        if (index > 0) {
            setCurrentVaga(vagasRow[index - 1]);
        }
    }

    const passVaga = () => {
        // ao clicar no botão (x) passa para a próxima vaga
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

    // Se não houver vagas, retorna uma tela dizendo que não há vagas nessa categoria
    if (vagasRow.length === 0) {
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
                    }}>Não há vagas nessa categoria</Text>
                </View>
            </View>
        )
    } else {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "#18181b"
            }}>
                <AppHeader
                headerType='image'/>

                <VagaView
                vaga={currentVaga}
                empresa={empresa}
                state={1}
                requisitos={req2Match}
                />

                <HomeButtons
                onPressReturn={returnVaga}
                onPressOk={okVaga}
                onPressPass={passVaga}/>
            </View>
        );
    }

}

export default FilteredVagas;
