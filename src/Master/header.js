import { useContext, createContext, useState } from "react";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";


const themes = {
  light: {
    background: "brown",
    color: "#FFFAFA",
  },
  dark: {
    background: "#000080",
    color: "#FFFAFA",
  },
};

const ThemeContext = createContext();


export default function Footer(props) {
  const [valueTheme, setValueTheme] = useState(themes.dark);
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={valueTheme}>
      <div style={{ backgroundColor: valueTheme.background }}>
        <Toolbar position="sticky" style={{ marginTop: "0px" }}>
          <div >
            {props.data.map((data) => (
              <Button>
                <Link to={data.to} style={{ color: valueTheme.color, fontWeight: "bold", textDecoration: "none" }}>
                  {data.title}
                </Link>
              </Button>
            ))}

            <Button className="Button"
              style={{ color: valueTheme.color, fontWeight: "bold" }}
              onClick={() =>
                setValueTheme(
                  valueTheme === themes.light ? themes.dark : themes.light
                )}>
              Change Color
            </Button>
          </div>
        </Toolbar>
      </div>
    </ThemeContext.Provider>
  );
}