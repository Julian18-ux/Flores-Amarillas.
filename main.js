        // Función para reproducir el audio
        function playAudio() {
            var audio = document.getElementById("audio");
            audio.play().catch(function(error) {
                console.log("Error al reproducir el audio: ", error);
            });
        }

        // Esperar a que el usuario haga clic en cualquier parte de la página
        document.body.onclick = function() {
            setTimeout(playAudio, 1000); // Reproducir audio 1 segundo después de hacer clic
            
        };




onload = () =>{
        document.body.classList.remove("container");
};


