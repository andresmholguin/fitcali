import { Link } from "react-router-dom";

export default function FranjaCard({ nombre }) {
  const slug = nombre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll(" ", "-");

  return (
    <div className="col-md-4 mb-4">
      <Link to={`/franja/${slug}`} className="text-decoration-none">
        <div className="card shadow-sm h-100">
          <div className="card-body d-flex align-items-center justify-content-center">
            <h3 className="text-dark text-center">{nombre}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}
