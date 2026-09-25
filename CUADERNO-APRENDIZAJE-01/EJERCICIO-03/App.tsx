import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://imgs.search.brave.com/G93cGwx1mTPuGGhw9tI6O03D-ROopqJNO69CYy0tqAc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ4L2Q0/LzVhLzQ4ZDQ1YTM2/NDM3MGE0MmNjYWIx/N2RhN2U0YjQxMGQy/LmpwZw' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Laura Martínez</Text>
        <Text style={styles.job}>Diseñadora UX/UI</Text>
        <View style={styles.stats}>

          //Este es el apartados de los proyectos 
          <View style={styles.stat}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLetter}>Proyectos</Text>
          </View>

          //Este es el apartados de los seguidores 
          <View style={styles.stat}>
            <Text style={styles.statNumber}>1280</Text>
            <Text style={styles.statLetter}>Seguidores</Text>
          </View>

          //Este es el apartados de los Contactos 
          <View style={styles.stat}>
            <Text style={styles.statNumber}>86</Text>
            <Text style={styles.statLetter}>Contactos</Text>
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
    backgroundColor: '#262e3f',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 30,
    alignItems:'center',
    borderRadius: 20,
    margin:30,
    gap: 15
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#000000'
  },

  job: {
    marginTop: 10,
    fontSize: 16,
    color: '#64748b',
    
  },
  avatar: {

    width: 90,
    height: 90,
    borderRadius: 40, 
  },

  stats:{
    flexDirection: 'row',
    gap: 20,
    marginTop:10
  },
  
  stat:{
    alignItems: 'center'
  },

  statNumber:{
    fontWeight: 'bold',
    fontSize: 17
  },
   
  statLetter:{
    fontWeight: 'bold',
    fontSize: 14
  }


});