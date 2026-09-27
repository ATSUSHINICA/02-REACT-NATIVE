# NOTA
El código entregado en un principio estaba incompleto, le hacía falta una card de fondo, a comparación del ejemplo que se utilizo desde un 
inicio.
# Ejercicio 04 - Pantalla de acceso

## Qué he aprendido

He aprendido a utilizar el elemento TextInput, que siver para escribir texto dentro del mismo, ya sea nombres, correo electronico, contraseñas, etc. 
También he aprendido a utilizar la propiedad secureTextEntry que sirve para convertir el texto normal en formato contraseña, con . o *. Otra propiedad que aprendi a usar el placeholder que sirve para 
colocar un texto dentro de un elemento con intencion de sugerencia.

La etiqueta Pressable la utilizamos en esta practica y sirve para convertir cualquier elemento en una especie de botón interactivo 

## Respuesta a la pregunta de comprensión
¿Por qué en este ejercicio no necesitamos todavía `useState`?

Porque la interfaz aún es estática, sin dinamismo, el useState sirve para guardar algúnos datos durante un tiempo 


## Qué he modificado
- A comparación del código entregado al inicio, lo que hice fue para empezar, es cambiar el tamaño del titulo, tambien añadi un marginBottom, ya que estaba un poco más pegada al 
subtitulo que el que se mostraba en el ejemplo.

Luego, el container tenia fondo blanco, en el ejemplo es de color gris. También hacia falta un View que hiciera la función de card, por lo que tuve que añadirla y ponerla con fondo blanco, las puntas redondeadas con un borderRadius 
y ajustar los elementos con paddin y gap.

Cambie el fontWeight de el texto del botón de '700' a '900' que era lo más parecido a la imagen de ejemplo 

y por último añadi un campo nuevo en donde aparece el texto '¿No tienes cuenta? Registrate' que aparecia en el ejemplo 

## Resultado
La interfaz consiste en una tarjeta blanca centrada sobre un fondo gris azulado que actúa como formulario de inicio de sesión, la cual incluye un título en negrita ("Bienvenido") junto a un subtítulo ("Introduce tus datos"), dos campos de texto con fondo gris claro para el correo electrónico y la contraseña, un botón principal redondeado de color azul con el texto "INICIAR SESIÓN", y un enlace secundario en la parte inferior con la leyenda "¿No tienes cuenta? Regístrate".