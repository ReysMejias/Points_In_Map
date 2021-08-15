import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components';

export default function App() {
  const [puntos, setPuntos] = useState([])
  const [puntoTemp, setPuntoTemp] = useState({})
  const [nombre, setNombre ] = useState('')
  const [visibilityFilter, setvisibilityFilter ] = useState('new_punto')//New_punto, All_Puntos
  const [visibility, setVisibility] = useState(false)
  const [pointsFilter, setPointsFilter] = useState(true)

  const togglePointsFilter = () => setPointsFilter(!pointsFilter)

  const handleLongPress = ({nativeEvent}) => {
    setvisibilityFilter('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }
 
  const handleChangeText = text => {
    setNombre(text)
  }   

  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre}
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre('')
  }

  const handleLista = () => {
    setvisibilityFilter('all_puntos')
    setVisibility(true)
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter} /> 
      <Panel onPressLeft={handleLista} textLeft='Lista' togglePointsFilter={togglePointsFilter} />
      <Modal visibility={visibility}>
        {visibilityFilter === 'new_punto' 
          ? 
          <>
          <Input title="Nombre" placeholder="Nombre del Punto" onChangeText={handleChangeText} />
          <Button title="Aceptar" onPress={handleSubmit} />  
          </>
          : <List puntos={puntos} closeModal={()=> setVisibility(false)} />
        }
      </Modal> 
    </View>
  );
} 

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
