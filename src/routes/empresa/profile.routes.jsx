import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../../screens/Empresa/Profile/Profile';
import EditProfile from '../../screens/Empresa/Profile/EditProfile';
import ProfileVagas from '../../screens/Empresa/Profile/ProfileVagas';

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

        </Navigator>
    );
}

export default EnterpriseProfile;
