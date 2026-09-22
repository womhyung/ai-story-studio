import { Image as ImageIcon, Plus, Sparkles } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Images() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main">
        <Header />

        <section className="content">
          <div className="page-header">
            <div>
              <span className="eyebrow">GALERIA</span>

              <h2>Imagens</h2>

              <p>
                Organize as imagens geradas para suas histórias.
              </p>
            </div>

            <button className="primary-button">
              <Sparkles size={18} />
              Gerar imagem
            </button>
          </div>

          <div className="image-toolbar">
            <button className="filter-button active">
              Todas
            </button>

            <button className="filter-button">
              Personagens
            </button>

            <button className="filter-button">
              Cenários
            </button>

            <button className="filter-button">
              Cenas
            </button>
          </div>

          <div className="empty-state">
            <div className="empty-icon">
              <ImageIcon size={40} />
            </div>

            <h3>Nenhuma imagem gerada ainda</h3>

            <p>
              Quando você gerar imagens para suas cenas,
              elas aparecerão nesta biblioteca.
            </p>

            <button className="primary-button">
              <Plus size={18} />
              Criar primeira imagem
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}