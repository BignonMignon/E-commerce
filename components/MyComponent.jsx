import React from 'react';
import { View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MyComponent = () => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#FF5733', '#6E45E2']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{ flex: 1 }}
      >
        <Image
          source={require('../assets/public/sary(3).jpg')}
          style={{ width: 200, height: 200 }}
        />
      </LinearGradient>
    </View>
  );
}

export default MyComponent;
