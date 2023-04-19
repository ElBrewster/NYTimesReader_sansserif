import * as React from "react";
import styles from "./Layout.module.css";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className={styles.layoutContainer}>
            <nav className={styles.newsPaperSections}>
                <NavLink to="/topstories" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>
                Top Stories
                </NavLink>
                <NavLink to="/opinion" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>
                Opinion
                </NavLink>
                <NavLink to="/business" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>
                Business
                </NavLink>        
                <NavLink to="/food" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>
                Food
                </NavLink>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}