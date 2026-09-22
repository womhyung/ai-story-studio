export default function StatCard({
  icon,
  title,
  value,
  description
}) {
  return (
    <div className="stat-card">

      <div className="stat-icon">
        {icon}
      </div>

      <div className="stat-content">

        <span>{title}</span>

        <strong>{value}</strong>

        <small>{description}</small>

      </div>

    </div>
  );
}