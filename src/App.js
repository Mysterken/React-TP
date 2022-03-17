import './App.css';
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardForm from "./CardForm"
import {useState} from "react";

function App() {

  const [cards, setCards] = useState([
    {
      id: 1,
      titre: "woi",
      description: "description"
    }
  ])

  return (
    <div className={"container my-5"}>
      <CardForm setCards={setCards}/>
      {cards.map((card) => (
        <Card titre={card.titre} description={card.description} key={card.id}/>
      ))}
    </div>
  );
}

export default App;
