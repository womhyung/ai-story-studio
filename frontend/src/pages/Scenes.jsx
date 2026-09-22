import { Plus, Search, Clapperboard } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const scenes = [
  {
    title: "A chegada",
    chapter: "Capítulo 1",
    location: "Universidade Nacional de Haicheng",
    characters: "Xiao Gun",
    status: "Planejada",
  },
  {
    title: "O reencontro",
    chapter: "Capítulo 2",
    location: "Biblioteca",
    characters: "Xiao Gun, Li Jian",
    status: "Pronta",
  },
  {
    title: "Uma nova oportunidade",
    chapter: "Capítulo 3",
    location: "Campus",
    characters: "Li Jian",
    status: "Rascunho",
  },
];

export default function Scenes() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main">
        <Header />

        <section className="content">
          <div className="page-header">
            <div>
              <span className="eyebrow">PRODUÇÃO</span>

              <h2>Cenas</h2>

              <p>
                Transforme seus capítulos em cenas visuais.
              </p>
            </div>

            <button className="primary-button">
              <Plus size={18} />
              Nova cena
            </button>
          </div>

          <div className="toolbar">
            <div className="search-field">
              <Search size={18} />

              <input
                type="text"
                placeholder="Pesquisar cenas..."
              />
            </div>
          </div>

          <div className="scene-list">
            {scenes.map((scene) => (
              <article
                className="scene-card"
                key={scene.title}
              >
                <div className="scene-icon">
                  <Clapperboard size={26} />
                </div>

                <div className="scene-info">
                  <span>{scene.chapter}</span>

                  <h3>{scene.title}</h3>

                  <p>📍 {scene.location}</p>

                  <p>👤 {scene.characters}</p>
                </div>

                <div className="scene-status">
                  {scene.status}
                </div>

                <button className="secondary-button">
                  Abrir
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}