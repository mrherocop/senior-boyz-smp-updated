const apiUrl = 'https://api.mcsrvstat.us/2/mc.hypixel.net'; // Replace with your API URL
const serverStatusElement = document.getElementById('server-status');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const serverStatus = `
            <p>Server Status: ${data.online ? 'Online' : 'Offline'}</p>
            <p>Players: ${data.players.online}/${data.players.max}</p>
        `;
        serverStatusElement.innerHTML = serverStatus;
    })
    .catch(error => {
        serverStatusElement.innerHTML = `<p>Error: ${error.message}</p>`;
    });