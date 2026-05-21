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
        <div className="container">
          <h1 className="text-center mb-5">{franja}</h1>

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
