import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import PageContainer from '../components/PageContainer'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images, COLORS, SIZES, FONTS } from '../constants'
import Button from '../components/Button'

import { Divider, IconButton, Stack } from '@react-native-material/core'
import returnIcon from "../assets/images/login/return.png"

import Facebook from "../assets/images/login/Facebook.png"
import Google from "../assets/images/login/Google.png"
import Apple from "../assets/images/login/Apple.png"

export default function Login({ navigation }) {
    const [values, setValues] = React.useState({
        username: '',
        password: '',
    })
    const handleChange = (e) => {
        values[e.target.name] = e.target.value
        setValues({ ...values })
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", }}>
            <PageContainer>

                <Stack spacing={4} style={{
                    padding: 20,
                    marginTop: 40,
                    height: '100%',
                }}>
                    <Stack direction="row" spacing={3} style={{
                        alignItems: 'center',
                    }}>
                    <IconButton icon={(
                            <Image source={returnIcon} style={{
                                width: 40,
                                height: 40
                            }} />
                    )} onPress={() => navigation.goBack()}  >
                
                    </IconButton>
                    <Text style={{ ...FONTS.h1 }}>
                            Seja bem-vindo
                        </Text>
                    </Stack>
        
           
                    <Stack style={{
                        marginTop: 50
                    }}>
                   
                        <Stack style={{ marginTop: 20 }}>
                            <TextInput
                                style={{
                                    height: 60,
                                    borderColor: '#F7F8F9',
                                    backgroundColor: "#E8ECF4",
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    padding: 10,
                                    marginTop: 20,
                                }}
                                placeholder="Insira seu e-mail"
                                name="username"
                                value={values.username}
                                onChange={(e) => handleChange({
                                    target: {
                                        name: 'username',
                                        value: e.nativeEvent.text,
                                    },

                                })}
                            />
                            <TextInput
                                style={{
                                    height: 60,
                                    borderColor: '#F7F8F9',
                                    backgroundColor: "#E8ECF4",
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    padding: 10,
                                    marginTop: 20,
                                }}
                                placeholder="Insira sua senha"
                                name="password"
                                secureTextEntry
                                value={values.password}
                                onChange={(e) => handleChange({
                                    target: {
                                        name: 'password',
                                        value: e.nativeEvent.text,
                                    },

                                })}
                            />
                            <Text style={{
                                color: COLORS.black,
                                textAlign: 'right',
                                marginTop: 10
                            }}>
                                Esqueceu a senha?
                            </Text>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    marginTop: 20,
                                    alignItems: 'center',
                                }}
                            >
                                <Button
                                    title="Login"
                                    onPress={() => navigation.navigate('BottomTabNavigation')}
                                    style={{
                                        fontWeight: 'bold',
                                        width: SIZES.width * 0.9,
                                        height: 60,
                                        backgroundColor: "#1E232C",

                                        marginTop: 15,
                                    }}
                                />
                            </View>

                        </Stack>

                    </Stack>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginTop: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                          
                        }}
                    >
                        <Divider style={{
                            width: '30%',
                            height: 1,
                            backgroundColor: COLORS.gray,
                            marginTop: 1
                        }} />
                        <Text style={{
                            color: COLORS.black,
                            marginHorizontal: 10
                        }}>
                            Ou entrar com
                        </Text>
                        <Divider style={{
                            width: '30%',
                            height: 1,
                            backgroundColor: COLORS.gray,
                            marginTop: 1
                        }} />


                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginTop: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: -100,
                       
                        }}
                    >
                        <Image source={Facebook} style={{
                          
                            marginRight: 10
                        }} />
                        <Image source={Google} style={{
                           marginRight: 10
                        }} />
                        <Image source={Apple} style={{
                             marginRight: 10
                        }} />
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginTop: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
             
                        }}
                    >
                        <Text style={{
                            color: COLORS.black,
                            marginHorizontal: 2
                        }}>
                            Não tem uma conta?
                        </Text>
                        <Text style={{
                            color: "#1FB570",
                            marginHorizontal: 5,
                            fontWeight: 'bold'
                        }}>
                            Cadastrar
                        </Text>
                        </View>
                </Stack>
                

            </PageContainer>
        </SafeAreaView>
    )
}
