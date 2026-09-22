import {
  User,
  Palette,
  Bell,
  Shield,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Settings() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main">
        <Header />

        <section className="content">
          <div className="page-header">
            <div>
              <span className="eyebrow">SISTEMA</span>

              <h2>Configurações</h2>

              <p>
                Personalize sua experiência no AI Story Studio.
              </p>
            </div>
          </div>

          <div className="settings-list">
            <div className="setting-card">
              <div className="setting-icon">
                <User />
              </div>

              <div>
                <h3>Perfil</h3>

                <p>
                  Gerencie seu nome e informações pessoais.
                </p>
              </div>

              <button className="secondary-button">
                Editar
              </button>
            </div>

            <div className="setting-card">
              <div className="setting-icon">
                <Palette />
              </div>

              <div>
                <h3>Aparência</h3>

                <p>
                  Personalize o visual da aplicação.
                </p>
              </div>

              <button className="secondary-button">
                Configurar
              </button>
            </div>

            <div className="setting-card">
              <div className="setting-icon">
                <Bell />
              </div>

              <div>
                <h3>Notificações</h3>

                <p>
                  Configure suas preferências de notificações.
                </p>
              </div>

              <button className="secondary-button">
                Configurar
              </button>
            </div>

            <div className="setting-card">
              <div className="setting-icon">
                <Shield />
              </div>

              <div>
                <h3>Privacidade</h3>

                <p>
                  Controle suas configurações de privacidade.
                </p>
              </div>

              <button className="secondary-button">
                Configurar
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}