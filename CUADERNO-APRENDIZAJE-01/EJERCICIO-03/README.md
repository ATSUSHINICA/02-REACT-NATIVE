# NOTA
Hay un pequeño error en el enunciado del ejercicio, nos pone que habra que modificar la tercera estadistica llamada Seguidores 1280,
cuando en el ejemplo a representar es contactos 86

# Ejercicio 03 - Ficha de perfil

## Qué he aprendido
- En esta practica aprendi varias cosas, lo que más problemas me costo fue al inicio, ya que siempre intento hacer el ejercicio con la imagen que aparece que ver el código y no me di cuenta que habia que importar Image.

Dejando eso de un lado, el apreder a usar bordeRadius en la imagen oara que sea redonda, width y height para modificar las dimensiones de esta misma.

Aprender a utilizar flexDirection para darle la distribución de los elementos que esten dentro en horizontal, también a utilizar gap para la separación entre los elementos.

Utilizar alignItems, en este caso center, para alinear los elementos al centro 


## Respuesta a la pregunta de comprensión
Si quieres que dos estadísticas aparezcan una al lado de otra, ¿en qué View aplicarías `flexDirection: 'row'` y por qué?

Utilizando el ejercicio de ejemplo lo haria en el bloque que posee todas las estadisticas, que en este caso en el Viem que le llamamos stats, ya que va a alinear a todos los elementos que se encuentren dentro en dirección horizontal 

## Qué he modificado
- Simplemente se ha añadido una sección mas de estadisticas, en este caso Contactos que tiene una cantidad de 86

## Resultado
Explica brevemente cómo ha quedado la interfaz.

La interfaz ha quedado como una tarjeta de perfil centrada sobre un fondo azul oscuro. Dentro de 
la tarjeta blanca, con esquinas redondeadas, se muestra un avatar circular con un icono de persona, 
seguido del nombre "Laura Martínez" en negrita y su cargo "Diseñadora UX/UI" debajo, en un tono 
más suave. En la parte inferior he añadido tres columnas con estadísticas (Proyectos, Seguidores 
y Contactos), cada una con su número en negrita y su etiqueta debajo, organizadas en fila y 
repartidas con espacio uniforme entre ellas.