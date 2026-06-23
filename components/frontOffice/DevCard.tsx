type DevCardProps = {
  id: string | number;
  photo: string;
  lastname: string;
  job: string;
  desc: string;
  portfolio: string;
};

export default function DevCard({
  photo,
  lastname,
  job,
  desc,
  portfolio,
}: DevCardProps) {
  return (
    <div className="card">
      <div className="img">
        <img src={photo} alt={lastname} />
        <div className="overlay"></div>
      </div>

      <div className="body">
        <h2 className="name">{lastname}</h2>
        <h4 className="title">{job}</h4>
        <p>{desc}</p>

        {/* ✅ Balise <a> correctement ouverte */}
        <a
          href={portfolio}
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          voir le profile <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
    </div> // ✅ fermeture du dernier div
  );
}
