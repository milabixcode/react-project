import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';

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













