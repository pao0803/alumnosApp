import React, { useContext } from 'react';
import { View, Text, Image } from "react-native";
import { AuthContext } from '../context/AlumnoContext';
import { colores, styles } from '../theme/theme';

const Home = () => {
  const context = useContext(AuthContext);
  return (
	<View style={styles.login_container}>
    <Text>Home</Text>
    <Image
        style={styles.home_foto}
        source={{
          uri: `http://10.0.2.2:5000/img/${context.authState.foto}`,
        }}
      />
    <Text>Matricula: { context.authState.matricula }</Text>
    <Text>nombre: { context.authState.nombre }</Text>
    <Text>foto: { context.authState.foto }</Text>
    <Text>token: { context.authState.token }</Text>
  </View>
  )
}

export default Home