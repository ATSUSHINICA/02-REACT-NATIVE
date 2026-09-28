# Ejercicio 08 - Catálogo con FlatList

## Qué he aprendido
He aprendido a como representar los Arrays, con el elemento FlatList, en el tendra nuevas propiedades que nos piden la información del array con el que se va a trabajar, como puede ser:

data: Sirve para colocar con que array vamos a trabajar 
numColumns: Para señalar en cuantas columnas queremos que se vean nuestros objetos almacenados 

columnWrapperStyle: Para definir el estilo que tendrá cada columna

KeyExtractor: Para saber cual será el id o aquello que represente a cada uno de los objetos que hay en el array para odenarlo 

renderReview: QUe sirve para establecer la estructura que se verá representado cada uno de los elementos de la card 

## Respuesta a la pregunta de comprensión
¿Qué ventaja tiene cambiar un producto en el array en lugar de buscar su tarjeta manualmente dentro del JSX?

La principal ventaja es que evito tener que buscar la tarjeta dentro del JSX y repetir su estructura 
tantas veces como productos tenga. Con el array, la estructura de la tarjeta se escribe una sola vez 
en el renderItem, y los datos (nombre, precio, icono) quedan separados del diseño. Así, si quiero 
cambiar o añadir un producto, solo modifico el array, y si quiero cambiar el diseño, lo cambio en un 
único sitio y se aplica a todas las tarjetas. Esto hace el código más corto, más fácil de mantener 
y con menos posibilidades de error.

## Qué he modificado
Añadí dos columnas más (8) ya que en la primera imagen muestra 4 pero el código te da las 6 que ya se tenia prevista, así que decidi que para que hubiera un pequeño se volvieran 8, con nueva información en el renderItem, también he modificado el fondo del container y el titulo para que se parezca más al del ejemplo 
## Resultado
Explica brevemente cómo ha quedado la interfaz.

La interfaz ha quedado como un catálogo de productos con fondo negro y el título "Productos" en blanco y en negrita en la parte superior. Debajo he organizado ocho tarjetas blancas con esquinas redondeadas en una cuadrícula de dos columnas y cuatro filas. Cada tarjeta muestra tres elementos: un icono en forma de emoji (teclado, ratón, monitor, auriculares, portátil, móvil, cámara y mando), el nombre del producto en negrita y su precio en azul. Todos los elementos están alineados a la izquierda dentro de la tarjeta. La cuadrícula se ha creado con un FlatList usando numColumns={2}, y al pintarse las tarjetas a partir de un array, todas comparten el mismo diseño.