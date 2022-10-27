import React, { useState, useEffect } from 'react';
import { View, ScrollView }
    from 'react-native';
import { css } from './Css.js';
import Vaga from '../../../components/Vagas/Vaga.jsx';

import JobService from '../../../service/JobService.js';
import LikeService from '../../../service/LikeService.js';

import AppHeader from '../../../components/AppHeader'
import VagaView from '../../../components/Vagas/VagaView'
import HomeButtons from '../../../components/Button/HomeButtons'

// Dados teste... remover após implementar banco de dados
import { empresas } from '../../../../assets/dadosTeste.js'
import { desenvolvedores } from '../../../../assets/dadosTeste.js'

import AsyncStorage from '@react-native-async-storage/async-storage';

const jobService = JobService.getInstance();
const likeService = LikeService.getInstance()

export function Home() {

    //dados para teste, será substituido por dados do banco
    const [empresas, setEmpresas] = useState([]);
    const [empresa, setEmpresa] = useState(null);
    const [vagas, setVagas] = useState([]);
    const [vagasRow, setVagasRow] = useState([]);
    const [currentVaga, setCurrentVaga] = useState(null)
    // Requisitos do desenvolvedor (requisitos em comum com os pedidos na vaga ficarão de outra cor)
    const [devSkills, setSkills] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem("user")
            .then(JSON.parse)
            .then((user) => {
                if (user.hardSkills) setSkills(user.hardSkills);
            });
    }, []);


    useEffect(() => {
        jobService.explore().then(companies => {
            console.log()
            setEmpresa(companies[0]);
            setVagas(companies[0].vagas);
            setCurrentVaga(companies[0].vagas[0]);
            setVagasRow(companies[0].vagas);
            setEmpresas(companies.map(({ vagas, ...rest }) => rest));
            console.log('vagas row has ', companies[0].vagas.length, ' jobs');
        });
    }, []);


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
            setEmpresa(empresas[index + 1]);
            setCurrentVaga(vagasRow[index + 1]);
        }
    }

    const okVaga = () => {
        // o teste da vaga vai ser enviado pra página de likes
        // tela inicial passa para a proxima vaga
        likeService.like('job', currentVaga)
            .then(() => passVaga());
    }

    return (
        <View style={css.container}>
            <AppHeader
                headerType='image' />

            <VagaView
                vaga={currentVaga}
                empresa={empresa}
                state={1}
                requisitos={devSkills}
            />

            <HomeButtons
                onPressReturn={returnVaga}
                onPressOk={okVaga}
                onPressPass={passVaga} />
        </View>
    );
}

export default Home;
