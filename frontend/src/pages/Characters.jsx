import { Plus, Search, UserRound } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const characters = [
  {
    name: "Xiao Gun",
    role: "Protagonista",
    story: "A vida que eu deveria ter",
  },
  {
    name: "Li Jian",
    role: "Personagem principal",
    story: "A vida que eu deveria ter",
  },
  {
    name: "Professor Zhang",
    role: "Personagem secundário",
    story: "A vida que eu deveria ter",
  },
  {
    name: "Ana",
    role: "Protagonista",
    story: "Guardiões da Amazônia",
  },
];

export default function Characters() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main">
        <Header />

        <section className="content">
          <div className="page-header">
            <div>
              <span className="eyebrow">UNIVERSO</span>

              <h2>Personagens</h2>

              <p>
                Crie e organize os personagens das suas histórias.
              </p>
            </div>

            <button className="primary-button">
              <Plus size={18} />
              Novo personagem
            </button>
          </div>

          <div className="toolbar">
            <div className="search-field">
              <Search size={18} />

              <input
                type="text"
                placeholder="Pesquisar personagens..."
              />
            </div>
          </div>

          <div className="characters-grid">
            {characters.map((character) => (
              <article
                className="character-card"
                key={character.name}
              >
                <div className="character-avatar">
                  <UserRound size={36} />
                </div>

                <div className="character-info">
                  <h3>{character.name}</h3>

                  <span>{character.role}</span>

                  <p>{character.story}</p>
                </div>

                <button className="secondary-button">
                  Ver personagem
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}