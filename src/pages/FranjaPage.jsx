import { useParams } from "react-router-dom";

import eventos from "../data/eventos";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";

export default function FranjaPage() {
  const { slug } = useParams();

  const franja = Object.keys(eventos).find((f) => {
    const franjaSlug = f
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replaceAll(" ", "-");

    return franjaSlug === slug;
  });

  const eventosFranja = eventos[franja] || [];

  return (
    <>
      <Navbar />

      <div id="wrapper-frame">
        <div className="container ">
          <nav className="d-flex flex-row justify-content-center align-items-center position-relative  mb-5">
            <a
              href="/"
              className="btn btn-light position-absolute start-0 gap-2 d-flex flex-row align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                />
              </svg>
              Franjas
            </a>
            <h1 className="text-center">{franja}</h1>
          </nav>

          <div className="row justify-content-center">
            {eventosFranja.map((evento, index) => (
              <EventCard key={index} evento={evento} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
