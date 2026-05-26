export default function EventCard({ evento }) {
  return (
    <div className="col-10 col-md-6 col-lg-4 mb-4">
      <div className="card custom-event-card h-100 rounded-0 d-flex flex-column">
        {/* HEADER con altura fija */}
        <div
          className="card-header text-center d-flex align-items-center justify-content-center"
          style={{
            height: "60px",
            overflow: "hidden",
          }}
        >
          <h2
            className="m-0"
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.3",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {evento.nombre_evento}
          </h2>
        </div>

        {/* IMAGEN uniforme */}
        <a href={evento.urlEvent}>
          <img
            className="card-img-top"
            src={evento.imgUrl}
            alt={evento.nombre_evento}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            loading="lazy"
          />
        </a>

        {/* CONTENIDO */}
        <table className="table custom-event-table mb-0 flex-grow-1">
          <tbody>
            <tr>
              <td className="table-active text-center">
                <strong>FECHA Y HORA</strong>
              </td>
            </tr>
            <tr>
              <td className="text-center">{evento.fecha_hora_evento}</td>
            </tr>

            <tr>
              <td className="table-active text-center">
                <strong>LUGAR</strong>
              </td>
            </tr>
            <tr>
              <td className="text-center">{evento.lugar}</td>
            </tr>

            <tr>
              <td className="table-active text-center">
                <strong>GRUPO</strong>
              </td>
            </tr>
            <tr>
              <td className="text-center">{evento.grupo}</td>
            </tr>
          </tbody>
        </table>

        {/* FOOTER siempre abajo */}
        <div className="card-footer bg-white mt-auto">
          <a className="btn btn-warning w-100" href={evento.urlEvent}>
            Comprar boletos
          </a>
        </div>
      </div>
    </div>
  );
}
