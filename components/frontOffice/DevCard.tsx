// Type des props attendues par une carte développeur
type DevCardProps = {
  id: string | number;
  photo: string;
  lastname: string;
  job: string;
  desc: string;
  portfolio: string;
};

// Composant qui affiche UNE SEULE carte développeur (photo, nom, poste, description, lien portfolio)
export default function DevCard({
  photo,
  lastname,
  job,
  desc,
  portfolio,
}: DevCardProps) {
  return (
    <div className="card">
      {/* Image de profil avec overlay au survol */}
      <div className="img">
        <img src={photo} alt={lastname} />
        <div className="overlay"></div>
      </div>

      {/* Informations textuelles du développeur */}
      <div className="body">
        <h2 className="name">{lastname}</h2>
        <h4 className="title">{job}</h4>
        <p>{desc}</p>

        {/* Lien vers le portfolio du développeur, ouvert dans un nouvel onglet */}
        <a
          href={portfolio}
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          voir le profil <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
    </div>
  );
}
