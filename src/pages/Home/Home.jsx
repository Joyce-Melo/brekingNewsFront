import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import {news} from '../../Datas.js'
import { HomeBody } from "./HomeStyled";



export default function Home() {
  return (
    <>
      <Navbar />
      <HomeBody>
      {news.map((item, index) =>{
          return(
            <Card key={index} news={item} />
            // Enviando item por item para o meu componente cards, precisamos tbm passar uma chave, para que o react saiba qual card é qual, então no nosso caso, passaremos o index como chave
          )
        })}

      </HomeBody>
      
    </>
  );
}
