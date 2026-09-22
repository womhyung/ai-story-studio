import {
  LayoutDashboard,
  BookOpen,
  Users,
  Clapperboard,
  Image,
  Video,
  Settings
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard
  },
  {
    label: "Histórias",
    path: "/stories",
    icon: BookOpen
  },
  {
    label: "Personagens",
    path: "/characters",
    icon: Users
  },
  {
    label: "Cenas",
    path: "/scenes",
    icon: Clapperboard
  },
  {
    label: "Imagens",
    path: "/images",
    icon: Image
  },
  {
    label: "Vídeos",
    path: "/videos",
    icon: Video
  }
];

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo-area">
        <div className="logo-icon">✦</div>

        <div>
          <h1>AI Story</h1>
          <span>Studio</span>
        </div>
      </div>

      <nav>

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}

      </nav>

      <div className="sidebar-bottom">

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <Settings size={20} />
          <span>Configurações</span>
        </NavLink>

      </div>

    </aside>
  );
}