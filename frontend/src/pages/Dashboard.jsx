import {
  BookOpen,
  Users,
  Clapperboard,
  Image
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";

export default function Dashboard() {

  return (
    <div className="app">

      <Sidebar />

      <main className="main">

        <Header />

        <section className="content">

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

            <button className="primary-button">
              + Nova história
            </button>

          </div>


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


          <section className="stories-section">

            <div className="section-header">

              <div>
                <h3>Minhas histórias</h3>

                <p>
                  Continue trabalhando nos seus projetos.
                </p>
              </div>

              <a href="/stories">
                Ver todas →
              </a>

            </div>


            <div className="story-card">

              <div className="story-cover">
                AS
              </div>

              <div className="story-info">

                <span className="story-status">
                  Em desenvolvimento
                </span>

                <h4>
                  A vida que eu deveria ter
                </h4>

                <p>
                  Uma história sobre escolhas,
                  consequências, recomeços e relações humanas.
                </p>

                <div className="story-meta">
                  <span>15 capítulos</span>
                  <span>32 cenas</span>
                  <span>12 personagens</span>
                </div>

              </div>

              <button className="secondary-button">
                Abrir história
              </button>

            </div>

          </section>

        </section>

      </main>

    </div>
  );
}