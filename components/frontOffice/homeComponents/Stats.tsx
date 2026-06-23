'use client'
import "@/style/frontOfficeStyle/pages/home/_hero.scss";
import "@/style/frontOfficeStyle/Home_style/style.css";


export default function Stats() {
    return (
        <section className="container">
            <div className="stats-item font-Poppins">
                <a href="#projets" className="stats-link">
                    <h2 className="stats-num">10+</h2>
                    <p className="stats-label">Projets réalisés</p>
                </a>
            </div>

            <div className="stats-item">
                <a href="#specialisations" className="stats-link">
                    <h2 className="stats-num">3</h2>
                    <p className="stats-label">Spécialisations</p>
                </a>
            </div>

            <div className="stats-item">
                <a href="#mois" className="stats-link">
                    <h2 className="stats-num">6</h2>
                    <p className="stats-label">Mois de formation</p>
                </a>
            </div>

            <div className="stats-item">
                <a href="#promotion" className="stats-link">
                    <h2 className="stats-num">14e</h2>
                    <p className="stats-label">Promotion</p>
                </a>
            </div>  
        </section>
    )
}