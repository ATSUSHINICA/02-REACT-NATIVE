import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Diseño de interfaces con React Native</Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>COMENZAR</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#0F172A',
  },
  card: {
    backgroundColor: '#fcf7ec',
    padding: 30,
    borderRadius: 20,
    margin:30,
    gap: 10
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color:'#b65200'
  },
  subtitle: {
    marginTop: 10,
    fontSize: 20,
    color: '#64748b',
    
  },
  button: {
    marginTop: 24,
    backgroundColor: '#ff7402'
,
    padding: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});