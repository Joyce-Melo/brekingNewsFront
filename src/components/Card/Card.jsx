import { CardBody, CardContainer, CardFooter } from "./CardStyled";

export function Card({ news }) {
  //Isso é um props que é a propriedade que irei receber, nesse nosso caso são os item, posso tanto passar como (props) como descontruir e passar a props descontruida, no nosso caso como nossa propriedade(props) são as news, fica dessa forma ({news}), posso fazer isso pq props é um objeto
  return (
    <CardContainer>
      <CardBody>
        <div>
          {/* Sempre que eu for trazer js dentro de html tenho que envolver tudo dentro de {}, o nome disso é interpolação de dados */}
          <h2>{news.title}</h2>
          <p>{news.text}</p>
        </div>
        <img src={news.image} alt="" />
      </CardBody>

      <CardFooter>
        <div>
        <i className="bi bi-hand-thumbs-up"></i>
        <span>{news.likes}</span>
        </div>
        <div>
        <i className="bi bi-chat"></i>
        <span>{news.comments}</span>
        </div>
      </CardFooter>
    </CardContainer>
  );
}
