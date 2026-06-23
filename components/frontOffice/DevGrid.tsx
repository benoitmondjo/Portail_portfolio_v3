import DevCard from "./DevCard";

// Type d'un profil développeur (un élément du tableau "profiles")
type Profile = {
  id: string | number;
  photo: string;
  lastname: string;
  job: string;
  desc: string;
  portfolio: string;
};

// Props attendues : un tableau de profils
type DevGridProps = {
  profiles: Profile[];
};

// Composant qui affiche LA GRILLE COMPLÈTE de développeurs
// Il reçoit un tableau "profiles" et génère une <DevCard /> pour chaque développeur
export default function DevGrid({ profiles }: DevGridProps) {
  return (
    <section className="grid_card">
      <div className="main-container">
        <div className="container">
          <div className="grid-container">
            {/* Boucle sur chaque profil pour créer une carte */}
            {profiles.map((dev) => (
              <DevCard key={dev.id} {...dev} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}