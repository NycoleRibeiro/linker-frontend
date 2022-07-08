import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../../screens/Empresa/Profile/Profile';
import EditProfile from '../../screens/Empresa/Profile/EditProfile';
import ProfileVagas from '../../screens/Empresa/Profile/ProfileVagas';
import CreateVaga from '../../screens/Empresa/Profile/CreateVaga';
import CreateTeste from '../../screens/Empresa/Profile/CreateTeste';

const { Navigator, Screen } = createStackNavigator();

export function EnterpriseProfile() {
    return (
        <Navigator
            initialRouteName="ProfileVagas"
            screenOptions={{
                presentation: 'transparentModal',
                gestureEnabled: false,
                headerShown: false,
            }}>

            <Screen
            name="ProfileVagas"
            component={ProfileVagas}
            />

            <Screen
            name="Profile"
            component={Profile}
            />

            <Screen
            name="EditProfile"
            component={EditProfile}
            />

            <Screen
            name="CreateVaga"
            component={CreateVaga}
            />

            <Screen
            name="CreateTeste"
            component={CreateTeste}
            />


        </Navigator>
    );
}

export default EnterpriseProfile;
