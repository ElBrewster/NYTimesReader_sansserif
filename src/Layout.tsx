import * as React from "react";
import "./index.css";
import { NavLink, Outlet } from "react-router-dom";
import Header from "./header/Header";

export default function Layout() {
    let sections = ["/arts", "/automobiles", "/books", "/fashion", "/food", "/health", "/magazine", "/movies", "/nyregion", "/obituaries", "/opinion", "/politics", "/realestate", "/science", "/sundayreview", "/technology", "/topstories", "/travel", "/upshot", "/business", "/sports", "/us", "/world"];

    const navLinks = sections.map((section) => {
        let removeSlash = section.split("").slice(1).join("");
        let sectionTitle = removeSlash.toUpperCase();
        // add a conditional for two-word links if we want to have normal casing as opposed to all caps (if it's realestate or topstories, etc., do particular cases)
        // let sectionTitle = removeSlash.charAt(0).toUpperCase() + removeSlash.slice(1);
        return <NavLink to={section} className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>{sectionTitle}</NavLink>

    })
    return (
        <div className="layoutContainer">
            <div className="topContainer">
                <nav className="newsPaperSections">
                    {navLinks}
                </nav>
                <Header />
            </div>
            <Outlet />
        </div>
    );
}