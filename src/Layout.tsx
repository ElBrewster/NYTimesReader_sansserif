import * as React from "react";
import "./index.css"
import { NavLink, Outlet } from "react-router-dom";
import Header from "./header/Header";

export default function Layout() {
    return (
        <div className="layoutContainer">
            <nav className="newsPaperSections">
                <NavLink to="/arts" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Arts</NavLink>
                <NavLink to="/automobiles" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Automobiles</NavLink>
                <NavLink to="/books" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Books</NavLink>
                <NavLink to="/fashion" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Fashion</NavLink>        
                <NavLink to="/food" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Food</NavLink>
                <NavLink to="/health" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Health</NavLink>
                {/* <NavLink to="/home" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink> */}
                <NavLink to="/magazine" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Magazine</NavLink>
                <NavLink to="/movies" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Movies</NavLink>
                <NavLink to="/nyregion" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>NYRegion</NavLink>
                <NavLink to="/obituaries" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Obituaries</NavLink>
                <NavLink to="/opinion" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Opinion</NavLink>
                <NavLink to="/politics" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Politics</NavLink>
                <NavLink to="/realestate" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>RealEstate</NavLink>
                <NavLink to="/science" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Science</NavLink>
                <NavLink to="/sundayreview" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>SundayReview</NavLink>
                <NavLink to="/technology" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Technology</NavLink>
                <NavLink to="/topstories" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>TopStories</NavLink>
                <NavLink to="/travel" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Travel</NavLink>
                <NavLink to="/upshot" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Upshot</NavLink>
                <NavLink to="/business" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Business</NavLink>   
                <NavLink to="/sports" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Sports</NavLink>
                <NavLink to="/us" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>US</NavLink>
                <NavLink to="/world" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>World</NavLink>
            </nav>
            <Header />
            <Outlet />
        </div>
    );
}