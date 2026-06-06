import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import eventos from "../data/eventos";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import { parseEventDate, isBeforeTodayInBogota } from "../utils/dateParser";

export default function FranjaPage() {
  const { slug } = useParams();
  const [search, setSearch] = useState("");

  const franja = Object.keys(eventos).find((f) => {
    const franjaSlug = f
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replaceAll(" ", "-");

    return franjaSlug === slug;
  });

  const eventosFiltrados = useMemo(() => {
    let eventosFranja = eventos[franja] || [];

    // Filter out events from previous days (GMT-5 Bogotá)
    const now = new Date();
    eventosFranja = eventosFranja.filter((evento) => {
      const eventDate = parseEventDate(evento.fecha_hora_evento);
      return !isBeforeTodayInBogota(eventDate, now);
    });

    if (!search.trim()) return eventosFranja;

    return eventosFranja.filter((evento) =>
      (evento.nombre_evento || "").toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, franja]);

  return (
    <>
      <Navbar />

      <div id="wrapper-frame">
        <div className="container">
          <nav className="position-relative mb-5">
            {/* Desktop */}
            <div className="d-none d-md-flex align-items-center justify-content-between">
              {/* Izquierda */}
              <div style={{ width: "220px" }}>
                <a
                  href="/"
                  className="btn btn-light gap-2 d-inline-flex align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                    />
                  </svg>

                  <span>Franjas</span>
                </a>
              </div>

              {/* Título centrado REAL */}
              <h1
                className="m-0 position-absolute start-50 translate-middle-x text-center"
                style={{
                  maxWidth: "50%",
                  fontSize: "2rem",
                }}
              >
                {franja}
              </h1>

              {/* Derecha */}
              <div style={{ width: "220px" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar evento..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Mobile */}
            <div className="d-flex d-md-none flex-column gap-3">
              {/* Top row */}
              <div className="d-flex align-items-center justify-content-between">
                <a
                  href="/"
                  className="btn btn-light gap-2 d-inline-flex align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                    />
                  </svg>
                </a>

                <h1
                  className="m-0 text-center flex-grow-1"
                  style={{
                    fontSize: "1.4rem",
                  }}
                >
                  {franja}
                </h1>

                {/* Espaciador */}
                <div style={{ width: "38px" }}></div>
              </div>

              {/* Buscador mobile */}
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Buscar evento..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </nav>

          <div className="row justify-content-center">
            {eventosFiltrados.map((evento, index) => (
              <EventCard key={index} evento={evento} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
