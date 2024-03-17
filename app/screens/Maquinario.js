import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, ScrollView } from 'react-native';
import Jhon from "../assets/images/others/1.png"
import Patriot from "../assets/images/others/2.png"

import Sprayer from "../assets/images/others/3.png"

import TerraGator from "../assets/images/others/4.png"

import Sprayer2 from "../assets/images/others/5.png"

import PLA from "../assets/images/others/6.png"

import Self from "../assets/images/others/7.png"



import { Stack } from '@react-native-material/core';



const dataMock = [{
  model: "R4030 Self-Propelled Sprayer",
  brand: "John Deere",
  image: Jhon,
},
{
  model: "Patriot 3340",
  brand: "IH",
  image: Patriot,
},
{
  model: "SP.365F Sprayer",
  brand: "New Holland",
  image: Sprayer,
},
{
  model: "TerraGator 9105",
  brand: "AGCO",
  image: TerraGator,
},
{
  model: "M-300 Sprayer",
  brand: "Air-O-Fan",
  image: Sprayer2,
},
{
  model: "PLA 120J",
  brand: "John Deere",
  image: PLA,
},
{
  model: "R4060 Self-Propelled Sprayer",
  brand: "John Deere",
  image: Self,
}
]


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9E9E9",
    padding: 20,
    paddingTop: 80,
    marginBottom: 100,
  },
  card: {
    height: 100,
    padding: 10,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: "#fff",
  },
});
const Maquinario = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
  })
  const [data, setData] = useState(dataMock)
  const handleChange = (e) => {
    if(e.target.value.length === 0){
      setData(dataMock)
    }
    const newData = dataMock.filter(item => item.model.toLowerCase().includes(e.target.value.toLowerCase()))
    setData(newData)
  }
  return (
    <ScrollView style={{
      flex: 1,
      backgroundColor: "#E9E9E9",
      marginBottom: 100,

    }}>
      <View style={styles.container}>

        <TextInput
          style={{
            height: 50,
            borderColor: '#F7F8F9',
            backgroundColor: "#FFFFFF",
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            marginTop: 20,
          }}
          placeholder="Pesquisar"
          name="search"
          value={values.search}
          onChange={(e) => handleChange({
            target: {
              name: 'search',
              value: e.nativeEvent.text,
            },

          })}
        />


        {data.map((item, index) => (
          <View key={`${index}view`} style={styles.card}>


            <Stack direction='row' key={`${index}stack`} spacing={8}>
              <Image key={`${index}image`} source={item.image} />
              <Stack key={`${index}stack2`} style={{

                marginTop: 9
              }}>
                <Text key={index + "model"} style={{ fontWeight: "600", fontSize: 17, color: "gray", marginTop: 7, marginLeft: 7 }}>
                  {item.model}
                </Text>
                <Text key={`${index}brand`} style={{ fontWeight: "300", fontSize: 18, color: "gray", marginTop: 2, marginLeft: 8 }}>
                  {item.brand}
                </Text>
              </Stack>
            </Stack>
          </View>
        ))}

      </View>
    </ScrollView>
  )
}

export default Maquinario
