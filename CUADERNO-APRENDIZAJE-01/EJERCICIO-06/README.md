# Ejercicio 06 - Dashboard de métricas

## Qué he aprendido
He aprendido a manejar las funciones de typescript, crear objetos y reutilizarlos, también su sintaxis y estructura.

Aprendi para que funciona el flexWrap: 'wrap' y es para que los elementos que no logren entrar dentro de la misma linea hará que los elementos pasen a una segunda linea manteniendo la misma estructura.

## Respuesta a la pregunta de comprensión
¿Por qué un ancho del 48% puede ser más práctico que 50% cuando además existe separación entre tarjetas?

Para dejar una pequeña separación entre cada una de las etiquetas y que visualmente se vean mucho mejor, entre los elementos hay una separación con el gap, sin embargo lo que hace es que al ocupar un 96% del espacio, el 4 porciento sirve para que exista un poco de espacio y evitar que en una linea ecista un solo elemento y puedan haber 2.

## Qué he modificado
Cambie varios valores, sin embargo cree tambien un nuevo elemento y para practicar, cree mi propia función para que en caso de que el valor de porcentaje sea positivo, el fondo del elemento y el color del porcentaje sea de color verde y en caso de que no, que sea de color rojo.

## Resultado
La interfaz ha quedado como un dashboard con el título "Dashboard" y el subtítulo "Resumen del negocio" 
en la parte superior. Debajo he organizado las métricas en una cuadrícula de dos columnas, donde cada 
una es una tarjeta con esquinas redondeadas que muestra el nombre de la métrica, su valor en negrita 
y el porcentaje de cambio. Las tarjetas con cambio positivo (Ventas, Clientes, Pedidos y Conversión) 
tienen fondo verde claro y el porcentaje en verde, mientras que la de Contactos, al tener un cambio 
negativo (-10%), tiene fondo rojo claro y el porcentaje en rojo. Como son cinco tarjetas, la última 
queda sola en la tercera fila.