import { WhatsappIcon } from "../components/whatsapp_icon";

export function Header() {
  return (
    <header className="header-container">
      <img src="../../../src/assets/img/logo.png" />
      <nav className="menu-options">
        <a> Lojas </a>
        <a> Catálogo </a>
        <a> Destaque </a>
      </nav>
      <button>
        <div className="btn-face-pink">
          Contatar-me
          <WhatsappIcon />
        </div>
        <div className="btn-face-purple">
          Contatar-me
          <WhatsappIcon />
        </div>
      </button>
    </header>
  );
}
