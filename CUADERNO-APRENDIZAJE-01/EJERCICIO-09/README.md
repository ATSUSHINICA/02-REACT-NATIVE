# Ejercicio 09 - Interfaz bancaria

## Qué he aprendido
He aprendido a crear un componente reutilizable (Movement) que recibe datos mediante props y a 
cambiar su aspecto según esos datos. También he aprendido a añadir una prop opcional de tipo 
boolean (positive?: boolean) y a usarla para elegir un estilo distinto. Vi que dentro del JSX no 
se puede escribir un if, así que la condición se coloca antes del return y su resultado se guarda 
en una variable. Además, he practicado con ScrollView para que la pantalla se pueda desplazar y 
con flex: 1 en movementInfo para que el importe quede alineado a la derecha de cada movimiento.

## Respuesta a la pregunta de comprensión
¿Qué partes de esta pantalla convertirías en componentes y cuáles dejarías directamente en App? Justifica.

Convertiría en componente la fila de movimiento (Movement), porque se repite varias veces con la 
misma estructura y solo cambian los datos (título, fecha e importe). Así escribo el diseño una sola 
vez y, si lo modifico, cambian todos los movimientos a la vez. 

Dejaría directamente en App el saludo, la tarjeta de saldo y el título de la sección, porque 
aparecen una sola vez y no se reutilizan. Aun así, la tarjeta de saldo podría ser un componente 
si la pantalla creciera o si necesitara mostrar varias cuentas, pero en este caso separarla no 
aporta ninguna ventaja.

## Qué he modificado
He añadido un movimiento positivo (un Bizum de +25,00 €) y he hecho que los importes positivos se 
muestren en verde. Para ello, añadí la prop opcional positive de tipo boolean a Movement, creé un 
estilo nuevo (amountTrue) con un verde oscuro que se lee bien sobre el fondo blanco, y escogí el 
estilo con un if antes del return. El JSX de Movement mantiene la misma estructura: no he añadido 
ni quitado elementos, solo he cambiado el style del Text del importe.

## Resultado
La interfaz ha quedado como una pantalla de banca móvil con fondo gris claro. Arriba aparece el 
saludo "Buenos días 👋" y el nombre "Laura" en negrita. Debajo hay una tarjeta oscura con esquinas 
redondeadas que muestra el saldo disponible en grande y el número de cuenta parcialmente oculto. 
Después viene el título "Últimos movimientos" y una lista de tarjetas blancas, cada una con el 
concepto y la fecha a la izquierda y el importe a la derecha. Los importes negativos salen en 
negro y los positivos, como la nómina, en verde.