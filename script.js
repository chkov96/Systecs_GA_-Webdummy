document.addEventListener("DOMContentLoaded", function () {
    const videoElement = document.getElementById("streaming-video");

    
    videoElement.src = "URL_DES_LIVESTREAMS";

    videoElement.addEventListener("play", function () {
        // Code für die Aktion, die beim Starten des Streams ausgeführt werden soll.
        console.log("Livestream wurde gestartet.");
        // Hier könntest du weitere Aktionen hinzufügen, wie das Aktualisieren von Benutzeroberflächenelementen oder das Senden von Nachrichten an den Server.
    });
    
    videoElement.addEventListener("pause", function () {
        // Code für die Aktion, die beim Stoppen des Streams ausgeführt werden soll.
        console.log("Livestream wurde gestoppt.");
        // Hier könntest du weitere Aktionen hinzufügen, wie das Speichern von Statistiken oder das Anhalten von anderen Prozessen in deiner Anwendung.
    });
    
});
