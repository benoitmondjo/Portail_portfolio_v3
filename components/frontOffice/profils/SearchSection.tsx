import "@/style/frontOfficeStyle/pages/profile/_hero.scss";

export default function SearchSection(){
    return(
     
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
    
    )
}