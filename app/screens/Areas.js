import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'
import { Stack } from '@react-native-material/core';
import Sol from "../assets/images/tempo/sol.png"
import PlantaVerde from "../assets/images/tempo/plantaverde.png"
import PlantaAzul from "../assets/images/tempo/plantaamarela.png"
import Map1 from "../assets/images/tempo/map1.png"
import Map2 from "../assets/images/tempo/map2.png"
import Chevron from "../assets/images/tempo/chevronright.png"



import { Divider } from 'react-native-flex-layout';
const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9E9E9",
    padding: 30,
    marginBottom: 100,
  },
  card: {
    height: 250,
    padding: 25,
    marginTop: 50,
    borderRadius: 15,
    backgroundColor: "#fff",
  },
  cardPrev: {
    height: 380,
    padding: 25,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: "#fff",
  },
  cardArea: {
    height: 200,
    padding: 25,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: "#fff",
  },
  cardMap: {
    height: 200,
    padding: 10,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: "#fff",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
const Home = ({ navigation }) => {

  return (
    <ScrollView style={{
      flex: 1,
      backgroundColor: "#E9E9E9",
      marginBottom: 100,

    }}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Stack >
            <Stack direction="row" style={{
              alignItems: "center",
            }}>
              <EvilIcons
                name="location"
                size={25}
                style={{ fontWeight: "bold" }}
                color="black"
              />
              <Text style={{ fontWeight: "400", fontSize: 18 }}>
                Uberlândia - MG
              </Text>
              <Image source={Sol} style={{
                position: "absolute",
                right: -40,
                top: -50,
              }} />
            </Stack>

            <Text style={{ fontWeight: "400", fontSize: 14, color: "gray", marginTop: 7, marginLeft: 7 }}>

              {new Date().getDate()} de {months[new Date().getMonth()]}, {new Date().getFullYear()}
            </Text>

            <Text style={{ fontWeight: "400", fontSize: 60, color: "black", marginTop: 7, marginLeft: 7 }}>

              25°C
            </Text>
            <Divider style={{ marginTop: 10 }} />
            <Stack direction="row" style={{
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}>
              <Stack>
                <Text style={{ fontWeight: "400", fontSize: 15, color: "gray", marginTop: 7, marginLeft: 7 }}>
                  Chuva
                </Text>
                <Text style={{ fontWeight: "400", fontSize: 15, color: "black", marginTop: 2, marginLeft: 7 }}>
                  24%
                </Text>
              </Stack>
              <Stack>
                <Text style={{ fontWeight: "400", fontSize: 15, color: "gray", marginTop: 7, marginLeft: 7 }}>
                  Umidade
                </Text>
                <Text style={{ fontWeight: "400", fontSize: 15, color: "black", marginTop: 2, marginLeft: 7 }}>
                  52%
                </Text>
              </Stack>
              <Stack>
                <Text style={{ fontWeight: "400", fontSize: 15, color: "gray", marginTop: 7, marginLeft: 7 }}>
                  Vento
                </Text>
                <Text style={{ fontWeight: "400", fontSize: 15, color: "black", marginTop: 2, marginLeft: 7 }}>
                  24%
                </Text>
              </Stack>
              <Stack>
                <Text style={{ fontWeight: "400", fontSize: 15, color: "gray", marginTop: 7, marginLeft: 7 }}>
                  Pressão
                </Text>
                <Text style={{ fontWeight: "400", fontSize: 15, color: "black", marginTop: 2, marginLeft: 7 }}>
                  1013hPA
                </Text>
              </Stack>
            </Stack>
          </Stack>


        </View>


        <View style={styles.cardMap}>
          <Image source={Map1} style={{
            width: "103%",
            marginLeft: -5,
            marginTop: -5,
            height: 130,
            borderRadius: 15,
          }} />
          <Stack direction="row" style={{
            justifyContent: "space-between",
            alignItems: "center",
          }}>


            <Stack direction='row' spacing={2} style={{
              alignItems: "center",
            }}>

              <Image source={PlantaVerde} style={{
                width: 40,
                height: 40,
                marginTop: 16,
              }} />

              <Stack>
                <Text style={{ fontWeight: "600", fontSize: 15, color: "black", marginTop: 9, marginLeft: 7 }}>
                  Plantação 01
                </Text>
                <Text style={{ fontWeight: "400", fontSize: 15, color: "gray", marginTop: 2, marginLeft: 7 }}>
                  14 ha - Milho
                </Text>
              </Stack>
            </Stack>
            <Stack>
              <Image source={Chevron} style={{
                width: 32,
                height: 32,
                marginTop: 16,
              }} />
            </Stack>
          </Stack>
        </View>

        <View style={styles.cardMap}>
          <Image source={Map2} style={{
            width: "103%",
            marginLeft: -5,
            marginTop: -5,
            height: 130,
            borderRadius: 15,
          }} />
          <Stack direction="row" style={{
            justifyContent: "space-between",
            alignItems: "center",
          }}>
             <Stack direction='row' spacing={2} style={{
              alignItems: "center",
            }}>

              <Image source={PlantaAzul} style={{
                width: 40,
                height: 40,
                marginTop: 16,
              }} />

              <Stack>

              <Text style={{ fontWeight: "600", fontSize: 15, color: "black", marginTop: 9, marginLeft: 7 }}>
                Plantação 02
              </Text>
              <Text style={{ fontWeight: "400", fontSize: 15, color: "gray", marginTop: 2, marginLeft: 7 }}>
                14 ha - Soja
              </Text>
              </Stack>
            </Stack>
            <Stack>
              <Image source={Chevron} style={{
                width: 32,
                height: 32,
                marginTop: 16,
              }} />
            </Stack>
          </Stack>
        </View>
      </View>
    </ScrollView>
  )
}

export default Home
