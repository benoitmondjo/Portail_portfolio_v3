import type { Metadata } from "next";

import Header from "@/components/frontOffice/Header";
import Footer from "@/components/frontOffice/Footer";
import DevGrid from "@/components/frontOffice/DevGrid";

import "@/style/frontOfficeStyle/pages/profile/_hero.scss";
import "@/style/frontOfficeStyle/pages/profile/_grid_card.scss";

import {profiles} from "@/lib/mock/data"

export const metadata: Metadata = {
  title: "Portail Portfolios | Profiles",
};

export default function ProfilePage() {
    return (
        <div className="profile-page">
            <Header />

            <section className="hero">
                <div className="main-container">
                    <div className="container">
                        <div className="flex">
                            <div className="content">
                                <h1>Découvrez nos développeurs</h1>
                                <div className="form">
                                    <select defaultValue="">
                                        <option value="">Tous les profiles</option>
                                        <option value="">Frontend</option>
                                        <option value="">Backend</option>
                                        <option value="">FullStack</option>
                                    </select>
                                    <div className="search-input">
                                        <input type="text" />
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <DevGrid profiles={profiles} />

            <Footer />
        </div>
    );
}
