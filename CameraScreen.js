import React, { useEffect, useState, useRef } from 'react';
import { Text, SafeAreaView, ScrollView, View, Button, Image, Dimensions } from 'react-native';
import styles from './Styles';
import { Camera } from 'expo-camera';

const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);
  const cameraElement = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })(); 
  }), [];

  if (hasPermission == null) {
    return <View />
  } else if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  const takePhoto = async () => {
    if (cameraElement.current) {
      const newPhoto = await cameraElement.current.takePictureAsync();
      setPhoto(newPhoto);
    }
  };

  const { width, height } = Dimensions.get('window')

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ width, height: height * 1.2, }}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Camera
          ref={cameraElement}
          type={Camera.Constants.Type.back}
          style={{ width, height: height / 2 }}
          onCameraReady={() => setCameraReady(true)}
        />
        <Button title="Take picture" disabled={!cameraReady} onPress={takePhoto} />
        {photo && (
          <Image style={{ resizeMode: 'cover', width, height: height / 2 }} source={{ uri: photo.uri }} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CameraScreen;
