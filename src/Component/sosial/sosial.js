import React, { useState } from "react";
import Content from './Content';
import Footer from './Footer';

export const AppsContext = React.createContext({});
export default function Sosial() {
  const [apps] = useState({
    description: "AKAMSI CAR merupakan tempat dimana kamu bisa membeli mobil bekas dengan harga yang terjangkau dan AKAMSI CAR memberikan setiap asuransi bagi setiap pembelian mobil bekas",
    contact: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/dhimsrasyad/",
        logo: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
      },
      {
        label: "Website",
        url: "https://dhimasrasyadr.com/"
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/dhimasrahardianto/"
      },
      {
        label: "Dribble",
        url: "https://dribbble.com/DhimasRasyad"
      }
    ]
  });

  return (
    <AppsContext.Provider value={{ apps }}>
      <Content title={"AKAMSI CAR"} />
      <Footer title={"OWNER SOSIAL MEDIA"} />
    </AppsContext.Provider>
  );
}