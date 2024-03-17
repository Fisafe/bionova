import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, ScrollView } from 'react-native';
import { IconButton, Stack } from '@react-native-material/core';
import Back from "../assets/images/back.png"
import Result from "../assets/images/result.jpeg"
import Pulverizar from "../assets/images/pulverizar.png"
import Plantio from "../assets/images/plantio.png"
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




const Details = ({ route ,navigation}) => {
  const [selected, setSelected] = useState("")
  const { area, image } = route.params;

  const handleSelect = (type) => {
    setSelected(type)
  }
  return (
    <ScrollView style={{
      flex: 1,
      backgroundColor: "#fff",
    }}>
      <View style={{
        padding: 30,
        paddingTop: 80,
      }}>
        <Stack direction="row" spacing={10} style={{
          alignItems: "center",
        }}>
          <Image source={Back} style={{ width: 30, height: 30 }} />
          <Text style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#000",
          }}>Cadastrar área</Text>
        </Stack>


        <TextInput
          style={{
            height: 50,
            borderColor: '#F7F8F9',
            backgroundColor: "#EBEBEB",
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            color: "gray",
            marginTop: 20,
          }}
          placeholder="Nome da área"
          name="search"

        />

        <Stack style={{
          borderRadius: 10,
          height: 290,
        }}>
          <Image source={{
            uri: `data:image/png;base64,${image}`

          }} style={{
            width: "100%",
            height: 280,
            borderRadius: 10,
            marginTop: 20,

          }} />

        </Stack>

        <Stack style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}>
          <Text style={{
            fontSize: 23,

            color: "#000",
          }}>Qual seu objetivo na área?</Text>
        </Stack>


        <Stack direction='row' style={{
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 20,
        }}>

          <Stack onTouchStart={() => handleSelect("plantio")} style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            borderColor: selected === "plantio" ? "#4CAF50" : "#D4D4D4",
            borderWidth: 2,
            borderRadius: 15,
            padding: 20,
            width: "45%",
            height: 100,
          }}>
            <Image source={Plantio} style={{ width: 30, height: 30 }} />
            <Text style={{
              fontSize: 16,
              color: "#000",
              marginTop: 10,
            }}>Novo plantio</Text>
          </Stack>

          <Stack onTouchStart={() => handleSelect("pulverizar")} style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            borderRadius: 15,
            borderColor: selected === "pulverizar" ? "#4CAF50" : "#D4D4D4",
            borderWidth: 2,
            padding: 20,
            width: "45%",
            height: 100,
          }}>
            <Image source={Pulverizar} style={{ width: 30, height: 30 }} />
            <Text style={{
              fontSize: 16,
              color: "#000",
              marginTop: 10,
            }}>Pulverizar</Text>
          </Stack>
        </Stack>



        <Stack onTouchStart={() => handleSelect("selecionar")} direction='row' style={{
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          borderRadius: 15,
          borderColor: selected === "selecionar" ? "#4CAF50" : "#D4D4D4",
          borderWidth: 2,
          padding: 20,
          width: "100%",
          height: 70,
          marginTop: 40,
        }}>
          <Image source={AddButton} style={{ width: 30, height: 30 }} />
          <Text style={{
            fontSize: 16,
            color: "#000",

          }}>Selecionar maquinário</Text>
          <Image source={RightChevron} style={{ width: 20, height: 20 }} />

        </Stack>

        <Button
          title="Cadastrar"
          onPress={() => navigation.navigate('Result')}
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

export default Details
