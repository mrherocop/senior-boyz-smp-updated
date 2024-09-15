function copyIp() {
    navigator.clipboard
        .writeText("mc.hypixel.net")
        .then(() => {
            alert("IP address and Port copied to clipboard!");
        })
        .catch((error) => {
            console.error(`Failed to copy "mc.hypixel.net" to clipboard: ${error}`);
        });
}