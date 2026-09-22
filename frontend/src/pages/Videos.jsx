import { Video, Plus, Sparkles } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Videos() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main">
        <Header />

        <section className="content">
          <div className="page-header">
            <div>
              <span className="eyebrow">
                PRODUÇÃO AUDIOVISUAL
              </span>

              <h2>Vídeos</h2>

              <p>
                Transforme suas cenas em experiências
                cinematográficas.
              </p>
            </div>

            <button className="primary-button">
              <Sparkles size={18} />
              Gerar vídeo
            </button>
          </div>

          <div className="video-placeholder">
            <div className="empty-icon">
              <Video size={40} />
            </div>

            <h3>Nenhum vídeo criado</h3>

            <p>
              Os vídeos gerados a partir das suas cenas
              aparecerão aqui.
            </p>

            <button className="primary-button">
              <Plus size={18} />
              Criar primeiro vídeo
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}