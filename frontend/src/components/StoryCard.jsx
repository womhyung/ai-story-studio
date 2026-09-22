import { BookOpen } from "lucide-react";

export default function StoryCard({
  title,
  description,
  status,
  chapters,
  scenes,
  characters
}) {
  return (
    <article className="story-card">

      <div className="story-cover">
        <BookOpen size={32} />
      </div>

      <div className="story-info">

        <span className="story-status">
          {status}
        </span>

        <h4>{title}</h4>

        <p>{description}</p>

        <div className="story-meta">
          <span>{chapters} capítulos</span>
          <span>{scenes} cenas</span>
          <span>{characters} personagens</span>
        </div>

      </div>

      <button className="secondary-button">
        Abrir história
      </button>

    </article>
  );
}