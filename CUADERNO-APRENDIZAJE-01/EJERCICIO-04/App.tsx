import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}>Introduce tus datos</Text>

        <TextInput style={styles.input} placeholder="Correo electrónico" />
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
        </Pressable>

        <Text style={styles.register}>¿No tienes cuenta? Regístrate</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  card:{
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 20,
    margin:30,
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 28,
    backgroundColor: '#64748b',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 17,
    marginTop: 8,
    marginBottom: 28,
    color: '#64748b',
  },
  input: {
    backgroundColor: '#f1f5f9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 14,
  },
  button: {
    marginTop: 8,
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 900,
    fontSize:20
  },
  register: {
    textAlign: 'center',
    marginTop: 22,
    color: '#64748b',
  },
});