export default function EventCard({ evento }) {
  return (
    <div className="col-10 col-md-6 col-lg-4 mb-4 ">
      <div className="card custom-event-card h-100 rounded-0">
        <div className="card-header">
          <h2 className="text-center">{evento.nombre_evento}</h2>
        </div>

        <a href={evento.urlEvent}>
          <img
            className="card-img"
            src={evento.imgUrl}
            alt={evento.nombre_evento}
            width="2953"
            height="1975"
            loading="lazy"
            decoding="async"
          />
        </a>

        <table className="table custom-event-table mb-0">
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

        <div className="card-footer bg-white">
          <a className="btn btn-warning w-100 btn-block" href={evento.urlEvent}>
            Comprar boletos
          </a>
        </div>
      </div>
    </div>
  );
}
