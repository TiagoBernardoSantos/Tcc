import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, StyleSheet, Button, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'; // Importando o módulo de localização correto
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Inicial({ navigation }) {
  const [region, setRegion] = useState({
    longitude: -44.0,
    latitude: -22.0,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });
  const [markers, setMarkers] = useState([
    {
      coordinate: {
        latitude: -23.219621120946094,
        longitude: -45.90674904487926,
      },
      title: 'ETEC - Sede',
      description:
        'Av. Salmão, 570 - Parque Res. Aquarius, São José dos Campos - SP, 12246-260',
    },
  ]);
  const getCurrentLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        alert(
          'latitude: ' +
          position.coords.latitude +
          ', \nLongitude: ' +
          position.coords.longitude
        );
  
        setMarkers((prevMarkers) => [
          ...prevMarkers,
          {
            coordinate: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
            title: 'localização 4',
            description: 'localização 3',
          },
        ]);
      });
    } else {
      alert('Geolocalização não suportada neste dispositivo.');
    }
  };
  

  useEffect(() => {
    // Verifique se a permissão de localização foi concedida
    Location.requestPermissionsAsync().then((status) => {
      if (status.status !== 'granted') {
        alert('Permissão de localização negada');
        return;
      }

      // Obtenha a localização atual
      Location.getCurrentPositionAsync({}).then((location) => {
        const { latitude, longitude } = location.coords;

        // Atualize a região e adicione um novo marcador
        setRegion({
          ...region,
          latitude: latitude,
          longitude: longitude,
        });

        setMarkers((prevMarkers) => [
          ...prevMarkers,
          {
            coordinate: {
              latitude: latitude,
              longitude: longitude,
            },
            title: 'Sua localização',
            description: 'Sua localização atual',
          },
        ]);
      });
    });
  }, []); // Este efeito será executado uma vez ao carregar o componente

  const onClickMap = (coordenadas) => {
    alert('Coordenadas:' + JSON.stringify(coordenadas.nativeEvent.coordinate));
    const { latitude, longitude } = coordenadas.nativeEvent.coordinate;
    setRegion({
      ...region,
      latitude: latitude,
      longitude: longitude,
    });

    setMarkers((prevMarkers) => [
      ...prevMarkers,
      {
        coordinate: {
          latitude,
          longitude,
        },
        title: 'Localização',
        description: 'Localização',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <MapView
          onPress={onClickMap}
          style={styles.map}
          initialRegion={region}
          ref={(map) => (this.map = map)}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>

      <TouchableHighlight
        style={{
          height: 40,
          width: '100%',
          borderRadius: 10,
          backgroundColor: 'yellow',
          marginLeft: 0,
          marginRight: 50,
          marginTop: 5,
        }}
      >
        <View style={styles.subContainerbutton1}>
          <View style={styles.button1}>
            <Button
              title="OBTER LOCALIZAÇÃO DO USUÁRIO"
              onPress={getCurrentLocation}
            />
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
  },
  subContainerbutton: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    margin: 390,
    marginTop: 460,
  },
  button: {
    backgroundColor: '#114D9D',
    width: 55,
    height: 55,
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button1: {
    backgroundColor: '#114D9D',
    width: 55,
    height: 55,
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  subContainerbutton1: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    margin: 350,
    marginTop: 430,
  },
});
