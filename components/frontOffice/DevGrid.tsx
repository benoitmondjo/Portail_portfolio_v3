import DevCard from "./DevCard";

type Profile = {
  id: string | number;
  photo: string;
  lastname: string;
  job: string;
  desc: string;
  portfolio: string;
};

type DevGridProps = {
  profiles: Profile[];
};

export default function DevGrid({ profiles }: DevGridProps) {
  return (
    <section className="grid_card">
      <div className="main-container">
        <div className="container">
          <div className="grid-container">
            {profiles.map((dev) => (
              <DevCard key={dev.id} {...dev} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}