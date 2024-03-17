import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, FONTS } from '../constants'
import { Areas, Chats, Contacts, Home, Maquinario, More, ProfileAccount } from '../screens'
import { FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons , AntDesign} from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: COLORS.white,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    elevation: 0,
                    height: 100,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {focused ? (
                                    <>
                                        <FontAwesome
                                            name="home"
                                            size={24}
                                            color={COLORS.green}
                                        />
                                        <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: COLORS.green,
                                            }}
                                        >
                                            Home
                                        </Text>

                                    </>
                                ) : (
                                    <>
                                        <FontAwesome
                                            name="home"
                                            size={24}
                                            color={COLORS.black}
                                        />
                                        <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: COLORS.secondaryBlack,
                                            }}
                                        >
                                            Home
                                        </Text>

                                    </>

                                )}
                            </View>
                        )
                    },
                }}
            />

            <Tab.Screen
                name="Maquinario"
                component={Maquinario}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {focused ? (
                                    <>
                                        <FontAwesome5
                                            name="tractor"
                                            size={24}
                                            color={COLORS.green}
                                        />
                                        <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: COLORS.green,
                                            }}
                                        >
                                            Maquinário
                                        </Text>

                                    </>
                                ) : (
                                    <>
                                        <FontAwesome5
                                            name="tractor"
                                            size={24}
                                            color={COLORS.black}
                                        />
                                        <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: COLORS.secondaryBlack,
                                            }}
                                        >
                                            Maquinário
                                        </Text>

                                    </>

                                )}
                            </View>
                        )
                    },
                }}
            />



        <Tab.Screen
                name="Camera"
                component={Contacts}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: COLORS.green,
                                    height: 80,
                                    width: 80,
                                    borderRadius: 50,
                                    marginTop: -20,
                                    marginRight: 20,
                                    marginLeft: 20,
                                }}
                            >
                                {focused ? (
                                    <>
                                        <FontAwesome5
                                            name="leaf"
                                            size={35}
                                            color={COLORS.white}
                                        />
                          

                                    </>
                                ) : (
                                    <>
                                        <FontAwesome5
                                             name="leaf"
                                            size={35}
                                            color={COLORS.white}
                                        />
                                       

                                    </>

                                )}
                            </View>
                        )
                    },
                }}
            />
                 <Tab.Screen
                name="Areas"
                component={Areas}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {focused ? (
                                    <>
                                        <Ionicons
                                            name="layers"
                                            size={24}
                                            color={COLORS.green}
                                        />
                                         <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: COLORS.green,
                                            }}
                                        >
                                            Áreas
                                        </Text>

                                    </>
                                ) : (
                                    <>
                                        <Ionicons
                                             name="layers"
                                            size={24}
                                            color={COLORS.black}
                                        />
                                       
                                       <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: COLORS.black,
                                            }}
                                        >
                                            Áreas
                                        </Text>
                                    </>

                                )}
                            </View>
                        )
                    },
                }}
            />
                        <Tab.Screen
                name="Profile"
                component={More}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {focused ? (
                                    <>
                                        <FontAwesome
                                            name="user"
                                            size={24}
                                            color={COLORS.green}
                                        />
                                      <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: COLORS.green,
                                            }}
                                        >
                                            Perfil
                                        </Text>

                                    </>
                                ) : (
                                    <>
                                        <FontAwesome
                                             name="user"
                                            size={24}
                                            color={COLORS.black}
                                        />
                                       
                                       <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: COLORS.black,
                                            }}
                                        >
                                            Perfil
                                        </Text>
                                    </>

                                )}
                            </View>
                        )
                    },
                }}
            />
            {/* <Tab.Screen
                name="Chats"
                component={Chats}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {focused ? (
                                    <>
                                        <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: COLORS.secondaryBlack,
                                            }}
                                        >
                                            Chats
                                        </Text>
                                        <FontAwesome
                                            name="circle"
                                            size={8}
                                            color={COLORS.black}
                                        />
                                    </>
                                ) : (
                                    <Ionicons
                                        name="chatbubble-outline"
                                        size={24}
                                        color={COLORS.black}
                                    />
                                )}
                            </View>
                        )
                    },
                }}
            /> */}

            {/* <Tab.Screen
                name="More"
                component={More}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {focused ? (
                                    <>
                                        <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: COLORS.secondaryBlack,
                                            }}
                                        >
                                            More
                                        </Text>
                                        <FontAwesome
                                            name="circle"
                                            size={8}
                                            color={COLORS.black}
                                        />
                                    </>
                                ) : (
                                    <Feather
                                        name="more-horizontal"
                                        size={24}
                                        color={COLORS.black}
                                    />
                                )}
                            </View>
                        )
                    },
                }}
            /> */}
        </Tab.Navigator>
    )
}

export default BottomTabNavigation
