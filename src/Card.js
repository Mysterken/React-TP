import {Button} from "react-bootstrap";

export default function Card({titre, description, done, deleteCard, toggleDone, id}) {
  return (
    <div className={"card mb-5 mx-auto " + (done ? 'bg-success' : 'bg-error')} style={{maxWidth: "400px"}}>
      <div className={"card-body"}>
        <h4 className={"card-title"}>{titre}</h4>
        <p className={"card-text"}>{description}</p>
        <Button className={"btn btn-danger"} onClick={deleteCard.bind(this, id)}>
          Supprimer
        </Button>
        <Button className={"btn m-lg-2"} onClick={toggleDone.bind(this, id)}>
          Changer le status
        </Button>
      </div>
    </div>
  )
}