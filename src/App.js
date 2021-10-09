/* eslint-disable jsx-a11y/no-distracting-elements */
import { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

const themes = {
  light: {
    background: "#f0e6f7",
    color: "#2d3436",
    backgroundSize: "100%",
  },
  dark: {
    background: "#2d3436",
    color: "#fff",
    backgroundSize: "100%",
  },
};
const ThemeContext = createContext();

export default function Header() {
  const image = "https://asset.kompas.com/crop/156x0:1000x563/750x500/data/photo/2018/02/13/4061074992.jpg";
  const [valueTheme, setValueTheme] = useState(themes.light);
  const [valueInput, setValueInput] = useState({name: ""});

  const handleIdPembelian = (event, type) => {
    if (type === "name") {
      setValueInput((prevState) => {
        return { ...prevState, name: event.target.value };
      });
    }
  };
  
  useEffect(() => {
    document.title = `Tugas Kelompok 11`;
  });

  return (
    <body>
    <ThemeContext.Provider value={valueTheme}>
      <div style={{ backgroundColor: valueTheme.background, backgroundSize: "100%"  }}>
        <marquee style={{ fontWeight: "bold" }} bgcolor="#F5FFFA" align ="center" direction ="left" scrollamount="10">  HALLO {valueInput.name} SELAMAT DATANG DI AKAMSI CAR, PUSAT JUAL BELI MOBIL BEKAS TERMURAH SE INDONESIA </marquee>
      
      <button className="button" style={{marginLeft:"10px"}} 
        onClick={() => setValueTheme( valueTheme === themes.light ? themes.dark : themes.light)}>
        <FontAwesomeIcon icon={faHome} />
      </button>
            
      <center>
        <div className="judul">
          <h3 style={{color: valueTheme.color}}>AKAMSI CAR</h3>
          <div className="gambar">
            <center>
              <Link to="/mokas" className="imageWrapper">
                <div>
                  <img alt="foto utama" src={image} className="image" />
                </div>
              </Link>
              <input
                onChange={(event) => handleIdPembelian(event, "name")}
                name="idPembelian"
                value={valueInput.name}
                placeholder="Masukkan Nama Anda"
                className="masukan"
              />
            </center>
          </div>
        </div>
      </center>
        <marquee className="marquee" bgcolor="F5FFFA" align ="center" direction ="left" scrollamount="10"> Credits by Kelompok 11 </marquee>
      </div>
    </ThemeContext.Provider>
    </body>
  );
}
