import { useState } from "react";



function Mouse_detect()  {

    const [estilo, setEstilo] = useState({ width: "400px", height: "400px", border: "1px solid black" });
    
    const handleMouseOver = () => {
      setEstilo({ ...estilo, backgroundColor: "lightblue" });
    };

    const handleMouseOut = () => {
      setEstilo({ ...estilo, backgroundColor: "transparent" });
    };

    return (
      <div
        style={estilo}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Pasa el mouse por aquí
      </div>
    );
  }
