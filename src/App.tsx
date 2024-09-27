import "./App.scss";
import { Footer } from "./components/footer";
import { Header } from "./components/header";


function App() {
  return (
    <main>
      <Header />
      <div className="content-container">
        <div className="heading-container">
          <h2>Seja bem vindo!</h2>
          <h2>Ao Atelie da Lari Macedo Personalizados.</h2>

          <div className="bubble caixa">📦</div>
          <div className="bubble tesoura">✂️</div>
          <div className="bubble presente">🎁</div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
