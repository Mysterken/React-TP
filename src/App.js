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
      description: "description",
      done: true
    }
  ])

  const deleteCard = (id) => {
    setCards(cards.filter(card => {
      return card.id !== id;
    }));
  }

  const toggleDone = (id) => {
    setCards(cards.map(card => {
      if (card.id === id) card.done = !card.done;
      return card;
    }));
  }

  const checkDone = () => {
    if (cards.filter(card => !card.done).length >= 3) {
      alert("Finissez déjà ce que vous avez à faire!")
      return false;
    }
    return true;
  }

  return (
    <div className={"container my-5"}>
      <CardForm setCards={setCards} checkDone={checkDone}/>
      {cards.map((card) => (
        <Card titre={card.titre} description={card.description} done={card.done} deleteCard={deleteCard} toggleDone={toggleDone} id={card.id} key={card.id}/>
      ))}
    </div>
  );
}

export default App;
