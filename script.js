function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const time = now.toLocaleTimeString('es-ES');
    
    document.getElementById('date').textContent = `Fecha: ${date}`;
    document.getElementById('time').textContent = `Hora: ${time}`;
}

function updateLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            document.getElementById('location').textContent = `Ubicación: Lat ${latitude.toFixed(2)}, Lon ${longitude.toFixed(2)}`;
        }, () => {
            document.getElementById('location').textContent = 'Ubicación: No disponible';
        });
    } else {
        document.getElementById('location').textContent = 'Geolocalización no soportada';
    }
}

setInterval(updateDateTime, 1000);
updateDateTime();
updateLocation();