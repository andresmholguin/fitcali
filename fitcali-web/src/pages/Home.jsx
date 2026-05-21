import eventos from "../data/eventos";
import Navbar from "../components/Navbar";
import FranjaCard from "../components/FranjaCard";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1 className="text-center mb-5">
          Festival Internacional de Teatro de Cali 2026
        </h1>

        <div className="row">
          {Object.keys(eventos).map((franja) => (
            <FranjaCard key={franja} nombre={franja} />
          ))}
        </div>
      </div>
    </>
  );
}
