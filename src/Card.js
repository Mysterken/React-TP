import {Button} from "react-bootstrap";
import DeleteCard from "./DeleteCard";

export default function Card({titre, description}) {
  return (
    <div className={"card mb-5 mx-auto"} style={{maxWidth: "400px"}}>
      <div className={"card-body"}>
        <h4 className={"card-title"}>{titre}</h4>
        <p className={"card-text"}>{description}</p>
        <Button type={"submit"} className={"btn btn-danger"}>
          Supprimer
        </Button>
      </div>
    </div>
  )
}