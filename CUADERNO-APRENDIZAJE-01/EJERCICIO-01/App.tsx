import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.subtitle}>Mi primera pantalla</Text>
      <Text style={styles.curso}>Curso 2026/27</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#020405',
  },

  title: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  
  subtitle: {
    marginTop: 20,
    fontSize: 16,
    color: '#64748b',
  },

  curso:{ 
    color: '#379eff', 
    fontWeight: 'bold',
    marginTop: 20,
  },
});