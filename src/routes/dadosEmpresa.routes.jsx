import { createStackNavigator } from '@react-navigation/stack';

import Nome from '../screens/Login/dadosEmpresa/Nome';
import Numero from '../screens/Login/dadosEmpresa/Numero';
import Fotos from '../screens/Login/dadosEmpresa/Fotos';
import Sobre from '../screens/Login/dadosEmpresa/Sobre';
import Local from '../screens/Login/dadosEmpresa/Local';
import AppEmpresaRoutes from './appEmpresa.routes';

const { Navigator, Screen } = createStackNavigator();

export function DadosEmpresaRoutes() {
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
                name="AppEmpresa"
                component={AppEmpresaRoutes}
                />

        </Navigator>
    );
}

export default DadosEmpresaRoutes;
