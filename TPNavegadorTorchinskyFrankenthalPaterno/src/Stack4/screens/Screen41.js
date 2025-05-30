import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../styles';

function Screen41() {
  return (
    <View style={[styles.container, { backgroundColor: 'green' }]}>
      <Text style={styles.text}>Imagen random:</Text>
      <Image
        source={{ uri: 'https://placekitten.com/300/300' }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}
export default Screen41();