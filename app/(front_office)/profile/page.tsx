import type { Metadata } from "next";

import Header from "@/components/frontOffice/Header";
import Footer from "@/components/frontOffice/Footer";
import DevGrid from "@/components/frontOffice/DevGrid";

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

            <DevGrid profiles={profiles} />

            <Footer />
        </div>
    );
}
