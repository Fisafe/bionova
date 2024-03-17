import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, ScrollView } from 'react-native';
import { Divider, IconButton, Stack } from '@react-native-material/core';
import Back from "../assets/images/back.png"
import ResultImage from "../assets/images/result.jpeg"
import Pulverizar from "../assets/images/pulverizar.png"
import Localizacao from "../assets/images/tempo/location.png"
import PlantaVerde from "../assets/images/tempo/plantaverde.png"

import AddButton from "../assets/images/addbutton.png"
import RightChevron from "../assets/images/right.png"
import { images, COLORS, SIZES, FONTS } from '../constants'
import Button from '../components/Button'


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
  image: {
    width: "100%",
    height: 900,
  },
});




const Result = () => {


  const handleSelect = (type) => {
    setSelected(type)
  }
  return (
    <ScrollView style={{
      flex: 1,
      backgroundColor: "#fff",
    }}>
      <Stack style={{
        borderRadius: 10,
        height: 450,
      }}>
        <Image source={ResultImage} style={{
          width: "100%",
          height: 500,
          //add zoom in and out
           


        }} />

      </Stack>
      <View style={{
        padding: 30,
        paddingTop: 70,
      }}>

        <Stack style={{
          alignItems: "center",
          marginTop: 10,
          justifyContent: "space-between",
        }} direction='row'>
          <Stack direction='row' style={{
            alignItems: "center",
          }} spacing={15}>
            <Image source={PlantaVerde} style={{ width: 40, height: 40 }} />
            <Stack>
              <Text style={{
                fontSize: 23,
                fontWeight: "bold",
                color: "#000",
              }}>Plantio 01</Text>
              <Text style={{
                fontSize: 13,
                color: "gray",
              }}>17 de Março de 2024</Text>
            </Stack>
          </Stack>
          <Image source={Localizacao} style={{ width: 50, height: 50 }} />

        </Stack>
        <Divider style={{
          marginTop: 15
        }} />

        <Stack style={{
          marginTop: 20,
          justifyContent: "space-between",
        }} direction='row'>
          <Stack >
            <Text style={{
              fontSize: 18,

              color: "gray",
            }}>Ação</Text>
            <Text style={{
              fontSize: 23,
              color: "#000",
              fontWeight: "bold",
            }}>Pulverização</Text>
          </Stack>
          <Stack >
            <Text style={{
              fontSize: 18,
              color: "gray",
            }}>Maquinário</Text>
            <Text style={{
              fontSize: 23,
              color: "#000",
              fontWeight: "bold",
            }}>SP.365F Sprayer</Text>
          </Stack>
        
          </Stack>
          <Stack style={{
          marginTop: 20,
          justifyContent: "space-between",
        }} direction='row'>
          <Stack >
            <Text style={{
              fontSize: 18,

              color: "gray",
            }}>Tempo</Text>
            <Text style={{
              fontSize: 23,
              color: "#000",
              fontWeight: "bold",
            }}>03h26m</Text>
          </Stack>
         
          <Stack  >
            <Stack style={{
              marginLeft: -90,
            }}>

        
            <Text style={{
              fontSize: 18,
              marginLeft: -85,
              color: "gray",
            }}>Paradas</Text>
            <Text style={{
              fontSize: 23,
              color: "#000",
              marginLeft: -85,
              fontWeight: "bold",
            }}>4</Text>
                </Stack>
          </Stack>
          </Stack>


          <Button
          title="INICIAR PULVERIZAÇÃO"
          style={{
            fontWeight: 'bold',
            width: SIZES.width * 0.9,
            height: 60,
            backgroundColor: "#4CAF50",

            marginTop: 30,
          }}
        />

      </View>
    </ScrollView>
  )
}

export default Result
