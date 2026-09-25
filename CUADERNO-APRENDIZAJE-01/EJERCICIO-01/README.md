# Ejercicio 01 - Mi primera pantalla

## Qué he aprendido

Para comenzar, he aprendido un poco cómo es la estructura interna de una app en React Native. 
Aprendí a utilizar Expo Go y a conectarlo con la CLI del mismo en mi Visual 

También he visto que el programa, o al menos este ejercicio, se divide en dos partes importantes. 
Por un lado está el View, donde se verá reflejado todo aquello que queramos mostrar en nuestra app 
móvil, y el cual está dentro de una función llamada App() por otro lado, también aprendí cómo 
agregarle estilo a cada uno de los elementos que se encuentran dentro del View, como por ejemplo 
el Text, usando el StyleSheet.create.

Este funciona como un objeto que se almacena dentro de una constante, en este caso llamada styles. 
Dentro de él se crean pequeños módulos o funcionalidades de estilo, y para llamarlas siempre irá 
primero el objeto, en este caso styles.funcionalidad, y así sucesivamente. Esto se coloca dentro 
de la etiqueta a la que le quiero aplicar ese estilo, algo muy parecido a como funcionan CSS y HTML. 

Esos pequeños módulos son los que modifican los aspectos visuales de cada elemento y su alineación 
dentro de la app.
## Respuesta a la pregunta de comprensión
Explica con tus palabras la diferencia entre el componente `View` y el componente `Text`.

La etiqueta View sirve para organizar un conjunto de elementos en pantalla que se encuentran dentro de la propia etiqueta.

La etiqueta Text se encuentra dentro de View y lo que hace es mostrar solo texto escrito dentro de ella. Posteriormente se verá organizado dentro de la pantalla con el orden que se vea dentro del view 

Ambas son necesarias, ya que colocar texto suelto sin un Text dentro del View puede generar errores 
## Qué he modificado
- En un principio tuve que añadir otro subtítulo llamado "Curso 2026/27". Cambié el color del fondo en negro y puse el título en blanco usando la propiedad color. También introduje un marginTop en cada uno de los elementos que se encontraban por debajo del título. 

## Resultado
La interfaz ha quedado con un fondo negro, un titulo con las palabras "React Native" y con apariencia de color blanco, marcada y con gran tamaño, debajo un subtitulo de un color blanco , un poco mas pequeña que el titulo y sin estar marcada con la frase "Mi primera pantalla" y por último una subfrase por debajo en color azul celeste, marcada, del mismo tamaño que la subfrase de arriba,  con la frase  "Curso 2026/27"