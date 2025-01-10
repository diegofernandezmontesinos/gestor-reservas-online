
**dependencies to install:**
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest



**To see the watch test:**


npm test -- --watch



Subamos un poco la dificultad con un ejercicio que combine más lógica, estados y comportamiento asíncrono. Aquí tienes el planteamiento:
Ejercicio: Sistema de Reservas para un Restaurante
Requisitos:

    Formulario:
        Un campo de texto para el nombre del cliente (Client Name).
        Un campo de selección (Select) para elegir la cantidad de personas (Number of Guests), de 1 a 10.
        Un botón de envío (Reserve Table) deshabilitado hasta que ambos campos estén completos.

    Comportamiento:
        Al hacer clic en el botón, aparece un mensaje "Buscando disponibilidad...".
        Simular una búsqueda de disponibilidad que tarda 2 segundos. Si hay disponibilidad (número de personas menor o igual a 6), mostrar el mensaje "Reserva confirmada para {nombre}".
        Si el número de personas es mayor a 6, mostrar "No hay mesas disponibles para {nombre}".
        El botón debe volver a habilitarse después de la búsqueda.

    Test:
        Verificar que el botón se habilita solo cuando ambos campos están completos.
        Probar la búsqueda y los mensajes dependiendo de la cantidad de personas seleccionadas.
        Asegurarse de que el mensaje desaparece después de 3 segundos.

Pista para implementar el componente

Debes usar:

    Estados para manejar el formulario y los mensajes.
    Un setTimeout para simular el retraso de la búsqueda.
    Condicionales para determinar si la reserva es aceptada o no.