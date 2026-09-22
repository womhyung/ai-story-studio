import { useState } from "react";

import {
  Plus,
  Search,
  UserRound
} from "lucide-react";

import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const characters = [
  {
    id: 1,
    name: "Xiao Gun",
    role: "Protagonista",
    story: "A vida que eu deveria ter",
  },
  {
    id: 2,
    name: "Li Jian",
    role: "Personagem principal",
    story: "A vida que eu deveria ter",
  },
  {
    id: 3,
    name: "Professor Zhang",
    role: "Personagem secundário",
    story: "A vida que eu deveria ter",
  },
  {
    id: 4,
    name: "Ana",
    role: "Protagonista",
    story: "Guardiões da Amazônia",
  },
];

export default function Characters() {

  const [search, setSearch] = useState("");
  const [storyFilter, setStoryFilter] = useState("Todas");

  const stories = [
    "Todas",
    ...new Set(characters.map((character) => character.story))
  ];

  const filteredCharacters = characters.filter((character) => {

    const searchText = search.toLowerCase();

    const matchesSearch =
      character.name.toLowerCase().includes(searchText) ||
      character.role.toLowerCase().includes(searchText) ||
      character.story.toLowerCase().includes(searchText);

    const matchesStory =
      storyFilter === "Todas" ||
      character.story === storyFilter;

    return matchesSearch && matchesStory;
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
                UNIVERSO
              </span>

              <h2>
                Personagens
              </h2>

              <p>
                Crie e organize os personagens das suas histórias.
              </p>

            </div>

            <Link
              to="/characters"
              className="primary-button"
            >
              <Plus size={18} />
              Novo personagem
            </Link>

          </div>


          {/* BUSCA E FILTRO */}

          <div className="toolbar">

            <div className="search-field">

              <Search size={18} />

              <input
                type="text"
                placeholder="Pesquisar personagens..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />

            </div>


            <select
              value={storyFilter}
              onChange={(event) =>
                setStoryFilter(event.target.value)
              }
            >

              {stories.map((story) => (
                <option
                  key={story}
                  value={story}
                >
                  {story}
                </option>
              ))}

            </select>

          </div>


          {/* CONTADOR */}

          <div className="results-info">

            <span>
              {filteredCharacters.length}{" "}
              {filteredCharacters.length === 1
                ? "personagem encontrado"
                : "personagens encontrados"}
            </span>

          </div>


          {/* PERSONAGENS */}

          {filteredCharacters.length > 0 ? (

            <div className="characters-grid">

              {filteredCharacters.map((character) => (

                <article
                  className="character-card"
                  key={character.id}
                >

                  <div className="character-avatar">
                    <UserRound size={36} />
                  </div>


                  <div className="character-info">

                    <h3>
                      {character.name}
                    </h3>

                    <span>
                      {character.role}
                    </span>

                    <p>
                      {character.story}
                    </p>

                  </div>


                  <Link
                    to="/characters"
                    className="secondary-button"
                  >
                    Ver personagem
                  </Link>

                </article>

              ))}

            </div>

          ) : (

            <div className="empty-state">

              <div className="empty-icon">
                <Search size={36} />
              </div>

              <h3>
                Nenhum personagem encontrado
              </h3>

              <p>
                Tente alterar a pesquisa ou selecionar
                outra história.
              </p>

            </div>

          )}

        </section>

      </main>

    </div>
  );
}