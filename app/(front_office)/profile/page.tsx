import type { Metadata } from "next";

import Header from "@/components/frontOffice/Header";
import Footer from "@/components/frontOffice/Footer";

import "@/style/frontOfficeStyle/pages/profile/_hero.scss";
import "@/style/frontOfficeStyle/pages/profile/_grid_card.scss";

import {profiles} from "@/lib/mock/data"
import SearchSection from "@/components/frontOffice/profils/SearchSection";
export const metadata: Metadata = {
  title: "Portail Portfolios | Profiles",
};

export default function ProfilePage() {
    return (
        <div className="profile-page">
            <Header />
            <SearchSection /> 

            <section className="grid_card">
                <div className="main-container">
                    <div className="container">
                        <div className="grid-container">
                            {profiles.map((dev) => (
                                <div className="card" key={dev.id}>
                                    <div className="img">
                                        <img src={dev.photo} alt={dev.lastname} />
                                        <div className="overlay"></div>
                                    </div>
                                    <div className="body">
                                        <h2 className="name">{dev.lastname}</h2>
                                        <h4 className="title">{dev.job}</h4>
                                        <p>{dev.desc}</p>
                                        <a href={dev.portfolio} className="btn" target="_blank" rel="noopener noreferrer">
                                            voir le profile <i className="fa-solid fa-arrow-right-long"></i>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
