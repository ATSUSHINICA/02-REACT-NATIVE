# Ejercicio 10 - Proyecto final: Fitness

## Qué he aprendido
- He aprendido a personalizar una interfaz completa (paleta, textos, métricas y distribución) 
  sin usar librerías externas.
- He repasado la reutilización de componentes con props (StatCard y Activity).
- He calculado el porcentaje de la barra de progreso en vez de escribirlo a mano.

## Respuesta a la pregunta de comprensión
¿Qué decisiones visuales has tomado por tu cuenta y qué conceptos de ejercicios anteriores has recuperado?

Respuesta:
Por mi cuenta he convertido el panel de actividad física en un panel de estudio, con una paleta 
de morados y fucsia, métricas nuevas (lecciones, descansos, concentración y tareas) y las 
tarjetas con el icono a la izquierda y el valor a la derecha.

De ejercicios anteriores he recuperado flexDirection y alignItems para colocar elementos en 
fila, flex: 1 para empujar la hora a la derecha, flexWrap con un 48% para la cuadrícula, 
padding y borderRadius en las tarjetas, overflow: 'hidden' en la barra de progreso y los 
componentes con props, como Movement.

## Qué he modificado
- Paleta: de azul y verde a morados y fucsia.
- Textos y métricas: ahora son de estudio en lugar de fitness.
- Distribución: el icono va a la izquierda en StatCard y la hora a la derecha en Activity.
- Barra de progreso: el porcentaje se calcula automáticamente.

## Resultado
La interfaz ha quedado como un panel de estudio con fondo lila claro. Arriba hay una tarjeta 
morada con el objetivo del día y una barra de progreso fucsia, debajo cuatro tarjetas blancas 
en dos columnas con el resumen de hoy, y al final una lista de sesiones recientes con la 
hora a la derecha.