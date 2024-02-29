import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)]
  // Deve-se retornar um valor dentro dessa função
  //O valor retornado deve ser o conteúdo que deve ser exibido na tela por esse componentes
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {/* "{}" = Quero gerar um valor dinâmico */}
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}
/* {} é usado para desestruturar objeto
Ex: {image, title, description} dai nao precisa usar porps.title etc */
function CoreConcept(props) {
  return <li>
    <img src={props.image} alt={props.title}></img>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
}

function App() {
  //Posso usar as funções do componente como elementos HTML normais dentro do código JSX
  /*Se quero gerar o conteúdo desse componente como parte do meu aplicativo, posso acessar esse componente
  de aplicativo e usar essa função de componente que foi definido anteriormente, como um elemento HTML
  dentro do código JSX do componente de aplicativos */
  return (
    <div>
      <Header /> { /* OU <Header></Header> */ }
      <main>
        <section id="core-concepts">

        <h2>Core Concepts</h2>
        <ul>
        { /* uso várias vezes mas toda vez que eu o usar, quero passar dados diferentes */ }
          <CoreConcept 
          title={CORE_CONCEPTS[0].title} 
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          />
          {/* OU posso usar essa sintaxe mais curta */}
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;













