import { createStackNavigator } from '@react-navigation/stack';

import UserType from '../screens/Login/UserType';
import Login from '../screens/Login/Login';
import DadosEmpresaRoutes from './dadosEmpresa.routes';
import DadosDevRoutes from './dadosDev.routes';

const { Navigator, Screen } = createStackNavigator();

export function LoginRoutes() {
    return (
        <Navigator
            initialRouteName="UserType"
            screenOptions={{
                presentation: 'transparentModal',
                gestureEnabled: false,
                headerShown: false,
            }}>
            <Screen
                name="UserType"
                component={UserType}
                />

            <Screen
                name="Login"
                component={Login}
                />

            <Screen
                name="DadosEmpresaRoutes"
                component={DadosEmpresaRoutes}
                />

            <Screen
                name="DadosDevRoutes"
                component={DadosDevRoutes}
                />

        </Navigator>
    );
}

export default LoginRoutes;
