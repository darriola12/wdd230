const link = "data/events.json";

async function getData() {
    try {
        const response = await fetch(link);
        const data = await response.json();
        displayInfo(data);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

const section = document.querySelector(".events_about");

function displayInfo(data) {
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay(); 
    const currentDay = Object.keys(data)[currentDayIndex]; 

    if (currentDay) {
        const event = data[currentDay];
        const eventTime = event.Hora;
        const eventName = event.Nombre_del_Evento; 
        const eventPlace = event.Lugar; 
        const eventDescripcion = event.Descripcion; 

       
        const time = document.createElement("p");
        time.textContent = `The event will be on ${currentDay} at ${eventTime}.`;
        time.classList = "event_part"

        const name = document.createElement("p");
        name.textContent = eventName;
        name.classList = "event_part"

        const place = document.createElement("p");
        place.textContent =`Location: ${ eventPlace}`;
        place.classList = "event_part"

        const description = document.createElement("p");
        description.textContent = `Description: ${eventDescripcion}`;
        description.classList = "event_part"

        section.appendChild(name);
        section.appendChild(place);
        section.appendChild(time);
        section.appendChild(description);

        // document.body.appendChild(section); // Agregar la sección al cuerpo del documento HTML
    } else {
        console.error("No se encontró información para el día actual.");
    }
}

getData();










