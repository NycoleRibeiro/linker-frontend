import { createStackNavigator } from '@react-navigation/stack';

import Nome from '../screens/Login/dadosDev/Nome';
import Numero from '../screens/Login/dadosDev/Numero';
import Fotos from '../screens/Login/dadosDev/Fotos';
import Sobre from '../screens/Login/dadosDev/Sobre';
import Local from '../screens/Login/dadosDev/Local';
import Interesses from '../screens/Login/dadosDev/Interesses';
import AppDesenvolvedorRoutes from './appDesenvolvedor.routes';

const { Navigator, Screen } = createStackNavigator();

export function DadosDevRoutes() {
    return (
        <Navigator
            initialRouteName="Nome"
            screenOptions={{
                presentation: 'transparentModal',
                gestureEnabled: false,
                headerShown: false,
            }}>
            <Screen
                name="Nome"
                component={Nome}
                />

            <Screen
                name="Numero"
                component={Numero}
                />

            <Screen
                name="Fotos"
                component={Fotos}
                />

            <Screen
                name="Sobre"
                component={Sobre}
                />

            <Screen
                name="Local"
                component={Local}
                />

            <Screen
                name="Interesses"
                component={Interesses}
                />

            <Screen
                name="AppDesenvolvedor"
                component={AppDesenvolvedorRoutes}
                />
        </Navigator>
    );
}

export default DadosDevRoutes;
