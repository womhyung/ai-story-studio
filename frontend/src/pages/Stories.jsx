import { BookOpen, Plus, Search, MoreVertical } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const stories = [
  {
    title: "A vida que eu deveria ter",
    description:
      "Uma história sobre escolhas, consequências, recomeços e relações humanas.",
    genre: "Drama",
    chapters: 15,
    scenes: 32,
    status: "Em desenvolvimento",
  },
  {
    title: "Guardiões da Amazônia",
    description:
      "Uma aventura ambientada na floresta amazônica e na preservação ambiental.",
    genre: "Aventura",
    chapters: 8,
    scenes: 21,
    status: "Rascunho",
  },
];

export default function Stories() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main">
        <Header />

        <section className="content">
          <div className="page-header">
            <div>
              <span className="eyebrow">BIBLIOTECA</span>

              <h2>Minhas histórias</h2>

              <p>
                Organize seus projetos narrativos em um só lugar.
              </p>
            </div>

            <button className="primary-button">
              <Plus size={18} />
              Nova história
            </button>
          </div>

          <div className="toolbar">
            <div className="search-field">
              <Search size={18} />

              <input
                type="text"
                placeholder="Pesquisar histórias..."
              />
            </div>

            <select>
              <option>Todas</option>
              <option>Rascunho</option>
              <option>Em desenvolvimento</option>
              <option>Concluída</option>
            </select>
          </div>

          <div className="stories-grid">
            {stories.map((story) => (
              <article
                className="story-list-card"
                key={story.title}
              >
                <div className="story-list-cover">
                  <BookOpen size={34} />
                </div>

                <div className="story-list-content">
                  <div className="card-top">
                    <span className="story-status">
                      {story.status}
                    </span>

                    <button className="more-button">
                      <MoreVertical size={18} />
                    </button>
                  </div>

                  <h3>{story.title}</h3>

                  <p>{story.description}</p>

                  <div className="story-details">
                    <span>{story.genre}</span>
                    <span>{story.chapters} capítulos</span>
                    <span>{story.scenes} cenas</span>
                  </div>

                  <button className="secondary-button">
                    Abrir história
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}