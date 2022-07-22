import React, {useState, useEffect} from 'react';
import { View, ScrollView }
from 'react-native';
import { css } from './Css.js';
import Vaga from '../../../components/Vagas/Vaga.jsx';

import JobService from '../../../service/JobService.js';

const jobService = JobService.getInstance();

export function Home() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        jobService.all().then( jobs => {
            console.log(jobs);
            setJobs(jobs);
        });
    }, []);
    

    return (
        <View style={css.container}>

            <ScrollView
                overScrollMode='never'
                showsVerticalScrollIndicator
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                style={{
                    width: "100%",
                    height: "100%",
                    paddingHorizontal: 5
                }}
            >
                {jobs.map((job, index) => {
                    return (
                        <Vaga
                            key={index}
                            id={index}
                            title={job.title}
                            areas={job.area?.split(',') || []}
                            salary={job.payment}
                            openOptions={() => {}}
                        />
                    )
                })}
            </ScrollView>
        </View>
    );
}

export default Home;
