import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'
import { Stack } from '@react-native-material/core';
import Sol from "../assets/images/tempo/sol.png"
import PlantaVerde from "../assets/images/tempo/plantaverde.png"
import PlantaAmarela from "../assets/images/tempo/plantaamarela.png"

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
    height: 270,
    padding: 25,
    marginTop: 50,
    borderRadius: 15,
    backgroundColor: "#fff",
  },
  cardD: {
    height: 270,
    padding: 25,
    marginTop: 20,
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
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>Fazenda 1</Text>
          <Text style={{ fontSize: 16, color: "gray" }}>20,92ha</Text>
          <Divider style={{
            marginTop: 15
          }} />
          <Stack direction='row' style={{ marginTop: 30, alignItems: "center", justifyContent: "space-between" }} spacing={5}>
            <Stack>
              <Stack direction='row' style={{ marginTop: -20, alignItems: "center" }} spacing={5}>
                <Image source={PlantaVerde} style={{ width: 30, height: 30 }} />
                <Text style={{ fontSize: 20, color: "black" }}>Soja</Text>
              </Stack>
              <Stack direction='row' style={{ marginTop: 10, alignItems: "center" }} spacing={5}>
                <Text style={{ fontSize: 14, color: "gray" }}>Fertilizantes</Text>
                <Stack style={{ height: 20, width: 55, backgroundColor: "green", alignItems: "center", borderRadius: 10 }}>
                  <Text style={{ fontSize: 12, marginTop: 2, color: "white", textAlign: "center", fontWeight: "bold" }}>100%</Text>
                </Stack>
              </Stack>
              <Stack direction='row' style={{ marginTop: 10, alignItems: "center" }} spacing={5}>
                <Text style={{ fontSize: 14, color: "gray" }}>Herbicida</Text>
                <Stack style={{ height: 20, width: 55, backgroundColor: "orange", alignItems: "center", borderRadius: 10 ,marginLeft: 18}}>
                  <Text style={{ fontSize: 12, marginTop: 2, color: "white", textAlign: "center", fontWeight: "bold" }}>50%</Text>
                </Stack>
              </Stack>
              <Stack direction='row' style={{ marginTop: 10, alignItems: "center" }} spacing={5}>
                <Text style={{ fontSize: 14, color: "gray" }}>Inseticida</Text>
                <Stack style={{ height: 20, width: 55, backgroundColor: "red", alignItems: "center", borderRadius: 10, marginLeft: 19 }}>
                  <Text style={{ fontSize: 12, marginTop: 2, color: "white", textAlign: "center", fontWeight: "bold" }}>13%</Text>
                </Stack>
              </Stack>
              <Stack direction='row' style={{ marginTop: 10, alignItems: "center" }} spacing={5}>
                <Text style={{ fontSize: 14, color: "gray" }}>Outros</Text>
                <Stack style={{ height: 20, width: 55, backgroundColor: "blue", alignItems: "center", borderRadius: 10 , marginLeft: 36}}>
                  <Text style={{ fontSize: 12, marginTop: 2, color: "white", textAlign: "center", fontWeight: "bold" }}>73%</Text>
                </Stack>
              </Stack>

            </Stack>


            <Stack style={{ marginTop: -30, }} spacing={5}>

              <Text style={{ fontSize: 12, color: "gray", marginTop: -20 }}>Aplicações</Text>
              <Stack direction='row' style={{ marginTop: 10 }} spacing={5}>
                <Text style={{ fontSize: 8, color: "gray", marginTop: -10 }}>R$</Text>
                <Text style={{ fontSize: 20, color: "gray", marginTop: -10, fontWeight: "bold" }}>112,90</Text>
                <Text style={{ fontSize: 8, color: "gray", marginTop: 3 }}>/ Ha</Text>

              </Stack>
              <Divider style={{ marginTop: 5 }} />
              <Text style={{ fontSize: 12, color: "gray", marginTop: 5 }}>Total</Text>
              <Stack direction='row' style={{ marginTop: 10 }} spacing={5}>
                <Text style={{ fontSize: 12, color: "gray", marginTop: -10 }}>R$</Text>
                <Text style={{ fontSize: 20, color: "gray", marginTop: -10, fontWeight: "bold" }}>113.321,32</Text>
                <Text style={{ fontSize: 8, color: "gray", marginTop: 3 }}>/ Ha</Text>

              </Stack>
            </Stack>
          </Stack>


        </View>
        <View style={styles.cardD}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>Fazenda 2</Text>
          <Text style={{ fontSize: 16, color: "gray" }}>20,92ha</Text>
          <Divider style={{
            marginTop: 15
          }} />
          <Stack direction='row' style={{ marginTop: 30, alignItems: "center", justifyContent: "space-between" }} spacing={5}>
            <Stack>
              <Stack direction='row' style={{ marginTop: -20, alignItems: "center" }} spacing={5}>
                <Image source={PlantaAmarela} style={{ width: 30, height: 30 }} />
                <Text style={{ fontSize: 20, color: "black" }}>Milho</Text>
              </Stack>
              <Stack direction='row' style={{ marginTop: 10, alignItems: "center" }} spacing={5}>
                <Text style={{ fontSize: 14, color: "gray" }}>Fertilizantes</Text>
                <Stack style={{ height: 20, width: 55, backgroundColor: "green", alignItems: "center", borderRadius: 10 }}>
                  <Text style={{ fontSize: 12, marginTop: 2, color: "white", textAlign: "center", fontWeight: "bold" }}>98%</Text>
                </Stack>
              </Stack>
              <Stack direction='row' style={{ marginTop: 10, alignItems: "center" }} spacing={5}>
                <Text style={{ fontSize: 14, color: "gray" }}>Herbicida</Text>
                <Stack style={{ height: 20, width: 55, backgroundColor: "orange", alignItems: "center", borderRadius: 10 ,marginLeft: 18}}>
                  <Text style={{ fontSize: 12, marginTop: 2, color: "white", textAlign: "center", fontWeight: "bold" }}>49%</Text>
                </Stack>
              </Stack>
              <Stack direction='row' style={{ marginTop: 10, alignItems: "center" }} spacing={5}>
                <Text style={{ fontSize: 14, color: "gray" }}>Inseticida</Text>
                <Stack style={{ height: 20, width: 55, backgroundColor: "red", alignItems: "center", borderRadius: 10, marginLeft: 19 }}>
                  <Text style={{ fontSize: 12, marginTop: 2, color: "white", textAlign: "center", fontWeight: "bold" }}>12%</Text>
                </Stack>
              </Stack>
              <Stack direction='row' style={{ marginTop: 10, alignItems: "center" }} spacing={5}>
                <Text style={{ fontSize: 14, color: "gray" }}>Outros</Text>
                <Stack style={{ height: 20, width: 55, backgroundColor: "blue", alignItems: "center", borderRadius: 10 , marginLeft: 36}}>
                  <Text style={{ fontSize: 12, marginTop: 2, color: "white", textAlign: "center", fontWeight: "bold" }}>83%</Text>
                </Stack>
              </Stack>

            </Stack>


            <Stack style={{ marginTop: -30, }} spacing={5}>

              <Text style={{ fontSize: 12, color: "gray", marginTop: -20 }}>Aplicações</Text>
              <Stack direction='row' style={{ marginTop: 10 }} spacing={5}>
                <Text style={{ fontSize: 8, color: "gray", marginTop: -10 }}>R$</Text>
                <Text style={{ fontSize: 20, color: "gray", marginTop: -10, fontWeight: "bold" }}>123,70</Text>
                <Text style={{ fontSize: 8, color: "gray", marginTop: 3 }}>/ Ha</Text>

              </Stack>
              <Divider style={{ marginTop: 5 }} />
              <Text style={{ fontSize: 12, color: "gray", marginTop: 5 }}>Total</Text>
              <Stack direction='row' style={{ marginTop: 10 }} spacing={5}>
                <Text style={{ fontSize: 12, color: "gray", marginTop: -10 }}>R$</Text>
                <Text style={{ fontSize: 20, color: "gray", marginTop: -10, fontWeight: "bold" }}>132.213,42</Text>
                <Text style={{ fontSize: 8, color: "gray", marginTop: 3 }}>/ Ha</Text>

              </Stack>
            </Stack>
          </Stack>


        </View>


      </View>
    </ScrollView>
  )
}

export default Home
