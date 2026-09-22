import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="header">

      <div className="search-box">
        <Search size={18} />

        <input
          type="text"
          placeholder="Pesquisar histórias, personagens..."
        />
      </div>

      <div className="header-right">

        <button className="icon-button">
          <Bell size={20} />
        </button>

        <div className="profile">

          <div className="avatar">
            W
          </div>

          <div>
            <strong>Williams</strong>
            <span>Escritor</span>
          </div>

        </div>

      </div>

    </header>
  );
}