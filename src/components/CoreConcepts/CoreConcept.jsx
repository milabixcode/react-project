import './CoreConcepts.css'

/* {} é usado para desestruturar objeto
Ex: {image, title, description} dai nao precisa usar porps.title etc */
export default function CoreConcept(props) {
    return <li>
      <img src={props.image} alt={props.title}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  }