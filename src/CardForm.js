import {Component} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {Button, Form} from "react-bootstrap";

export default class CardForm extends Component {
  setCards = this.props.setCards;

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {

    event.preventDefault();
    const newItem = {
      id: generateUniqueID(),
      titre: this.state.title,
      description: this.state.description,
    }

    this.setCards(prev => [...prev, newItem])
  }

  getTitle = (e) => {
    this.setState({title: e.target.value})
  }

  getDescription = (e) => {
    this.setState({description: e.target.value})
  }

  render() {
    return (
      <header className="App-header mb-3">
        <h1>Ajouter des tâches</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formTitre">
            <Form.Control type={"text"} placeholder={"Titre"} onChange={this.getTitle}/>
          </Form.Group>
          <Form.Group className={"mb-3"} controlId="formDescription">
            <Form.Control as={"textarea"} placeholder={"Description"} onChange={this.getDescription}/>
          </Form.Group>
          <Button type={"submit"} className={"btn btn-primary"}>
            Ajouter
          </Button>
        </Form>
      </header>
    )
  }
}