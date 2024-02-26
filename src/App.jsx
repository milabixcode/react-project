function Header() {
  // Deve-se retornar um valor dentro dessa função
  //O valor retornado deve ser o conteúdo que deve ser exibido na tela por esse componentes
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  //Posso usar as funções do componente como elementos HTML normais dentro do código JSX
  /*Se quero gerar o conteúdo desse componente como parte do meu aplicativo, posso acessar esse componente
  de aplicativo e usar essa função de componente que foi definido anteriormente, como um elemento HTML
  dentro do código JSX do componente de aplicativos */
  return (
    <div>
      <Header></Header> { /* OU o atalho: <Header /> */ }
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
