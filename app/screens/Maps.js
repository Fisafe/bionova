import { useState, useRef, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';
import MapView, { Marker, Polygon, Polyline } from 'react-native-maps';
import PlantaAmarela from "../assets/images/tempo/plantaamarela.png"
import MarkerPoint from "../assets/images/marker.png"
import { debounce } from 'lodash';
import MapaPin from "../assets/images/mapaPin.png"
import { IconButton, Stack } from '@react-native-material/core';
import { getAreaOfPolygon } from 'geolib';
import { FAB, Portal, PaperProvider } from 'react-native-paper';
import DisabledBtn from '../assets/images/disabledbtn.png';
import ConfirmBtn from '../assets/images/confirmbtn.png';
import { putObject } from '../utils/s3';
import axios from 'axios';
import { Buffer } from 'buffer'; // Importe o Buffer do pacote que você instalou

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapa: {
    width: '100%',
    height: '102%',
    marginTop: -50
  },
  markerImage: {
    width: 38,
    height: 50
  },
  markerPoly: {
    width: 3,
    height: 3
  },
  fab: {
    backgroundColor: "white",
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    marginBottom: 120
  },
});

const Contacts = ({ navigation }) => {
  const [drawingMode, setDrawingMode] = useState(false);
  const [markedPoints, setMarkedPoints] = useState([]);
  const [mapScrollEnabled, setMapScrollEnabled] = useState(true);
  const [drawingInProgress, setDrawingInProgress] = useState(false);
  const [validated, setValidated] = useState(false);
  const mapRef = useRef(null);



  const handleMapPress = (e) => {
    if (!drawingMode) return; // Se o modo de desenho estiver desativado, não faça nada
    
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setMarkedPoints([...markedPoints, { latitude, longitude }]);
  };
  
  const handlePanDrag = (e) => {
    if (!drawingMode) return; // Ignora se o modo de desenho estiver desativado
    
    const { latitude, longitude } = e.nativeEvent.coordinate;
    addPointDebounced(latitude, longitude);
  };
  
// Defina addPointDebounced fora do componente se não depende de estados ou props que mudam
// Ou garanta que seja recriada de maneira a preservar a mesma referência usando useCallback se depender de estados ou props

const addPointDebounced = debounce((latitude, longitude) => {
  // Só adicione pontos se o drawingMode estiver ativo
  if (!drawingMode) return;

  setMarkedPoints(currentPoints => [...currentPoints, { latitude, longitude }]);
}, 1); // Opções de configuração do debouncer podem ser ajustadas conforme necessário

// Lembre-se de ajustar o uso de useCallback se addPointDebounced depender de estados ou props



  const toggleDrawingMode = () => {
    setDrawingMode(!drawingMode);
    setDrawingInProgress(!drawingInProgress);
    setMapScrollEnabled(!mapScrollEnabled); // Ativa/Desativa a rolagem do mapa
  };

  const clearDrawing = () => {
    setMarkedPoints([]);
    setDrawingInProgress(false);
    setDrawingMode(false);
    setMapScrollEnabled(true);
    setValidated(false);
  };

  function calculateArea() {
    if (markedPoints.length < 3) return 0; // Um polígono requer pelo menos 3 pontos

    const earthRadiusM = 6371000; // Raio da Terra em metros
    let totalArea = 0;

    const degreesToRadians = (degree) => {
      return degree * (Math.PI / 180);
    };

    // Calcula a área de cada triângulo formado pelo primeiro ponto e cada par de pontos subsequentes
    for (let i = 1; i + 1 < markedPoints.length; i++) {
      const p1 = markedPoints[0];
      const p2 = markedPoints[i];
      const p3 = markedPoints[i + 1];

      const lat1 = degreesToRadians(p1.latitude);
      const lon1 = degreesToRadians(p1.longitude);
      const lat2 = degreesToRadians(p2.latitude);
      const lon2 = degreesToRadians(p2.longitude);
      const lat3 = degreesToRadians(p3.latitude);
      const lon3 = degreesToRadians(p3.longitude);

      // Usa a fórmula de área de um triângulo esférico
      const a = Math.acos(Math.sin(lat2) * Math.sin(lat3) + Math.cos(lat2) * Math.cos(lat3) * Math.cos(lon3 - lon2));
      const b = Math.acos(Math.sin(lat3) * Math.sin(lat1) + Math.cos(lat3) * Math.cos(lat1) * Math.cos(lon1 - lon3));
      const c = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1));
      const s = (a + b + c) / 2;

      totalArea += 4 * Math.atan(Math.sqrt(Math.max(0, Math.tan(s / 2) * Math.tan((s - a) / 2) * Math.tan((s - b) / 2) * Math.tan((s - c) / 2))));
    }

    const areaUtil = totalArea * Math.pow(earthRadiusM, 2);
    //convert in hectares
    const areaHectares = areaUtil / 10000;
    return areaHectares;
  }


  const closePolygon = async () => {

    if (drawingInProgress && markedPoints.length > 2) {
      setDrawingInProgress(false); // Finaliza o desenho
      setDrawingMode(false);
      // Opcional: Automaticamente adiciona o primeiro ponto no final para fechar o polígono
      setMarkedPoints(currentPoints => [...currentPoints, currentPoints[0]]);

      setValidated(true);

    }
  };

  


  const handleConfirm = async () => {
    if (mapRef.current) {
      try{
      const snapshot = await mapRef.current.takeSnapshot({
        format: 'png', // ou 'jpg'
        quality: 0.8, // 0 a 1 para 'jpg'
        width: 1080, // Largura do snapshot
        height: 1920, // Altura do snapshot (opcional, se não definido, calculado automaticamente mantendo a proporção)
        result: 'base64' // 'file' (padrão) retorna o caminho do arquivo, 'base64' retorna a imagem em base64
      });

        navigation.navigate('Details', { image: snapshot ,  navigation});


      }catch(error){
        console.log(error);
      }
    }
  }

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>

        <Portal >
          
          <FAB
            icon={drawingMode ? "close" : "pencil"}
            style={styles.fab}
            onPress={toggleDrawingMode}
          />
          {drawingInProgress && (
            <FAB
              style={[styles.fab, { bottom: 160 }]}
              icon="check-circle"
              onPress={closePolygon}
              color="green"
            />
          )}
          {drawingInProgress && (
            <FAB
              style={[styles.fab, { bottom: 80 }]}
              icon="delete"
              onPress={clearDrawing}
              color="red"
            />
          )}

        </Portal>

        <Stack direction="column" style={{
          backgroundColor: "#fff",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          width: "90%",
          height: 90,
          padding: 20,
          borderRadius: 15,
          position: "absolute",
          top: 80,
          left: 20,
          zIndex: 999,
        }}>
          <Text key="1" style={{ fontWeight: "400", fontSize: 16, color: "gray" }}>
            Seleção da área
          </Text>
          <Stack direction="row" style={{
            alignItems: "center",
            justifyContent: "space-between",
          }}>

            <Text key="2" style={{ fontWeight: "600", fontSize: 34 }}>
              {calculateArea().toFixed(2)} ha
            </Text>

            {validated ? (
              <Stack onTouchStart={handleConfirm}>

              <Image source={ConfirmBtn} style={{ width: 52, height: 52 ,marginTop: -22}} />
              </Stack>
            ) : (
              <Image source={DisabledBtn} style={{ width: 52, height: 52, marginTop: -22 }} />
            )}
   
          </Stack>
        </Stack>


        <MapView
          ref={mapRef}
          provider="google"
          onPress={handleMapPress}
          mapType="satellite"
          scrollEnabled={mapScrollEnabled}
          pitchEnabled={mapScrollEnabled}
          onPanDrag={handlePanDrag}
          initialCamera={{
            center: {
                               
              latitude:-18.958811670416246,
              longitude:  -48.20543312480923,
            },
            pitch: 0,
            heading: 0,
            altitude: 1000,
            zoom: 17.4,

          }}
          style={styles.mapa}
          initialRegion={{
                      
            latitude:-18.958811670416246,
            longitude:  -48.20543312480923,
                      
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <>
            {!drawingInProgress && markedPoints?.length > 2 ? (
              <Polygon coordinates={markedPoints?.length ? markedPoints : []} strokeColor="#000" fillColor={markedPoints?.length ? "rgba(255,0,0,0.5)" : "transparent"} />
            ) : (
              <Polyline coordinates={markedPoints?.length ? markedPoints : []} strokeColor={markedPoints?.length ? "#FF0000" : "transparent"} strokeWidth={5} />
            )}

            <Marker
              coordinate={{                  
                latitude:-18.958811670416246,
                longitude:  -48.20543312480923, }}
            >
              <Image source={MapaPin} style={styles.markerImage} />
            </Marker>
          </>

        </MapView>

      </SafeAreaView>
    </PaperProvider>
  )
}

export default Contacts
