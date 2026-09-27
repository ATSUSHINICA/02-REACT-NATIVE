import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/01/AirPods.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original' }} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.category}>TECNOLOGÍA</Text>
          <Text style={styles.title}>AirPods</Text>
          <Text style={styles.rating}>⭐ 3.5</Text>

          <View style={styles.bottom}>
            <Text style={styles.price}>89,99 €</Text>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>AÑADIR</Text>
            </Pressable>
          </View>
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
    backgroundColor: '#616161',
    
  },

  card:{

    backgroundColor: '#ffffff',
    overflow: 'hidden',
    borderRadius: 15,
    margin: 50
  },

  content:{
    padding: 20,
    
  },

  category: {
    color: '#ff0000',
    fontWeight: 900,
  },

  image:{
    width: '100%',
    height: 200,
  },

  title:{
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 8

  },

  bottom:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  
  rating:{
    marginTop: 18,
    marginBottom: 18
  },

  price:{
    fontWeight: 700,
    fontSize: 15
  },

  button:{
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 8
  },

  buttonText:{
    color: 'white',
    fontSize: 18
  }

});