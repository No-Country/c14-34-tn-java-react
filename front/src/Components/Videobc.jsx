import React from "react";

function Videobc() {
  return (
    <div className="video-background ">
      <video autoPlay muted loop>
        <source src="./src/img/video04.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
    </div>
  );
}

export default Videobc;
