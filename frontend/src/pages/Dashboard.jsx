import {
  BookOpen,
  Users,
  Clapperboard,
  Image
} from "lucide-react";

import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import StoryCard from "../components/StoryCard";

export default function Dashboard() {
  return (
    <div className="app">

      <Sidebar />

      <main className="main">

        <Header />

        <section className="content">

          {/* BOAS-VINDAS */}

          <div className="welcome">

            <div>

              <span className="eyebrow">
                AI STORY STUDIO
              </span>

              <h2>
                Olá, Williams 👋
              </h2>

              <p>
                Continue construindo seus mundos,
                personagens e histórias.
              </p>

            </div>

            <Link
              to="/stories"
              className="primary-button"
            >
              + Nova história
            </Link>

          </div>


          {/* ESTATÍSTICAS */}

          <div className="stats-grid">

            <StatCard
              icon={<BookOpen />}
              title="Histórias"
              value="3"
              description="Projetos criados"
            />

            <StatCard
              icon={<Users />}
              title="Personagens"
              value="12"
              description="Personagens cadastrados"
            />

            <StatCard
              icon={<Clapperboard />}
              title="Cenas"
              value="47"
              description="Cenas criadas"
            />

            <StatCard
              icon={<Image />}
              title="Imagens"
              value="86"
              description="Imagens geradas"
            />

          </div>


          {/* HISTÓRIAS RECENTES */}

          <section className="stories-section">

            <div className="section-header">

              <div>

                <h3>
                  Minhas histórias
                </h3>

                <p>
                  Continue trabalhando nos seus projetos.
                </p>

              </div>

              <Link to="/stories">
                Ver todas →
              </Link>

            </div>


            <StoryCard
              title="A vida que eu deveria ter"
              description="Uma história sobre escolhas, consequências, recomeços e relações humanas."
              status="Em desenvolvimento"
              chapters={15}
              scenes={32}
              characters={12}
            />

          </section>

        </section>

      </main>

    </div>
  );
}