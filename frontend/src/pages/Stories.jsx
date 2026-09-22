import { useState } from "react";
import {
  BookOpen,
  Plus,
  Search,
  MoreVertical
} from "lucide-react";

import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const stories = [
  {
    id: 1,
    title: "A vida que eu deveria ter",
    description:
      "Uma história sobre escolhas, consequências, recomeços e relações humanas.",
    genre: "Drama",
    chapters: 15,
    scenes: 32,
    status: "Em desenvolvimento",
  },
  {
    id: 2,
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

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todas");

  const filteredStories = stories.filter((story) => {

    const matchesSearch =
      story.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      story.description
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "Todas" ||
      story.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="app">

      <Sidebar />

      <main className="main">

        <Header />

        <section className="content">

          {/* CABEÇALHO */}

          <div className="page-header">

            <div>

              <span className="eyebrow">
                BIBLIOTECA
              </span>

              <h2>
                Minhas histórias
              </h2>

              <p>
                Organize seus projetos narrativos em um só lugar.
              </p>

            </div>

            <Link
              to="/stories"
              className="primary-button"
            >
              <Plus size={18} />
              Nova história
            </Link>

          </div>


          {/* BUSCA E FILTRO */}

          <div className="toolbar">

            <div className="search-field">

              <Search size={18} />

              <input
                type="text"
                placeholder="Pesquisar histórias..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />

            </div>


            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value)
              }
            >
              <option value="Todas">
                Todas
              </option>

              <option value="Rascunho">
                Rascunho
              </option>

              <option value="Em desenvolvimento">
                Em desenvolvimento
              </option>

              <option value="Concluída">
                Concluída
              </option>

            </select>

          </div>


          {/* LISTA DE HISTÓRIAS */}

          <div className="stories-grid">

            {filteredStories.map((story) => (

              <article
                className="story-list-card"
                key={story.id}
              >

                <div className="story-list-cover">

                  <BookOpen size={34} />

                </div>


                <div className="story-list-content">

                  <div className="card-top">

                    <span className="story-status">
                      {story.status}
                    </span>

                    <button
                      className="more-button"
                      type="button"
                      aria-label={`Mais opções para ${story.title}`}
                    >
                      <MoreVertical size={18} />
                    </button>

                  </div>


                  <h3>
                    {story.title}
                  </h3>


                  <p>
                    {story.description}
                  </p>


                  <div className="story-details">

                    <span>
                      {story.genre}
                    </span>

                    <span>
                      {story.chapters} capítulos
                    </span>

                    <span>
                      {story.scenes} cenas
                    </span>

                  </div>


                  <Link
                    to="/stories"
                    className="secondary-button"
                  >
                    Abrir história
                  </Link>

                </div>

              </article>

            ))}

          </div>


          {/* NENHUM RESULTADO */}

          {filteredStories.length === 0 && (

            <div className="empty-state">

              <div className="empty-icon">
                <Search size={36} />
              </div>

              <h3>
                Nenhuma história encontrada
              </h3>

              <p>
                Tente alterar a pesquisa ou o filtro
                selecionado.
              </p>

            </div>

          )}

        </section>

      </main>

    </div>
  );
}