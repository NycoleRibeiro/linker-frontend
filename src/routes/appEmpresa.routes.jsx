import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from '../screens/Empresa/Home/Home';
import Explore from '../screens/Empresa/Explore/Explore';
import Likes from '../screens/Empresa/Likes/Likes';
import Chat from '../screens/Empresa/Chat/Chat';
import EnterpriseProfile from './empresa/profile.routes';

const { Navigator, Screen } = createBottomTabNavigator();
const css = StyleSheet.create({
    icon: {
        width: 50,
        height: 60,
    },
})

export function AppEmpresaRoutes() {
    return (
        <Navigator
            initialRouteName="EnterpriseProfile"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#FD2A7B',
                tabBarInactiveTintColor: '#FFF',
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60,
                    paddingBottom: 5,
                    backgroundColor: '#18181b',
                    borderTopColor: '#18181b',
                }
            }}>
            <Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={ focused ? require('../../assets/img/menuIcons/homeActive.png') : require('../../assets/img/menuIcons/home.png')}
                            style={css.icon}
                        />
                    )
                }}/>

            <Screen
                name="Explore"
                component={Explore}
                options={{
                    tabBarLabel: 'Explorar',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source= {focused ? require('../../assets/img/menuIcons/exploreActive.png') : require('../../assets/img/menuIcons/explore.png')}
                            style={css.icon}
                        />
                    ),
                }}/>

            <Screen
                name="Likes"
                component={Likes}
                options={{
                    tabBarLabel: 'Curtidas',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require('../../assets/img/menuIcons/likesActive.png') : require('../../assets/img/menuIcons/likes.png')}
                            style={css.icon}
                        />
                    ),
                }}/>

            <Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require('../../assets/img/menuIcons/chatActive.png') : require('../../assets/img/menuIcons/chat.png')}
                            style={css.icon}
                        />
                    ),
                }}/>

            <Screen
                name="EnterpriseProfile"
                component={EnterpriseProfile}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require('../../assets/img/menuIcons/profileActive.png') : require('../../assets/img/menuIcons/profile.png')}
                            style={css.icon}
                        />
                    ),
                }}/>

        </Navigator>
    );
}

export default AppEmpresaRoutes;
