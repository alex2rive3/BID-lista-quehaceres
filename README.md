Lista de quehaceres
Ah, la lista de tareas! Un proyecto muy dinámico para cualquier framework respetable de JavaScript. Tu trabajo es crear una pequeña aplicación React para almacenar y modificar una lista de tareas. Cada tarea tendrá una cadena de texto, así como una propiedad completada, que se establecerá en falso inicialmente. A medida que marques los elementos, éstos deberían aparecer tachados en la página. Usando lo que sabes sobre el estado e iterando a través de listas, renderiza una lista de elementos y brinda al usuario la opción de eliminar cada elemento y agregar otros nuevos. Hay diferentes formas de implementar la función de eliminación. Una forma de hacerlo es utilizando el método incorporado de filtro

Filter devuelve una nueva matriz cuando se invoca y es una excelente manera de mantenerse fiel a la naturaleza funcional de React.

Sugerencia: cuando actualices el estado, asegúrate de enviar un objeto o array completamente nuevo; de lo contrario React no actualizará la vista.


![image](https://user-images.githubusercontent.com/61993784/213881102-4378f799-589d-41b1-ae67-7d4c2ab214e3.png)


Iterar a través de las tareas existentes utilizando el método de mapa.

Permitir al usuario agregar una nueva tarea, inicialmente configurada como no completada.

Permite al usuario eliminar una tarea haciendo clic en el botón Eliminar.

Permite al usuario alternar la propiedad de finalización de una tarea haciendo clic en la casilla de verificación

Bonificación Ninja: al actualizar el estado de las tareas, no mutes los objetos de la tarea actual ni la lista de tareas actual.
