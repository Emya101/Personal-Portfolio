import {Outlet} from "react-router-dom";
import { Navigation } from "./Navigation";
import {Footer} from "./Footer";
import styles from "./Layout.module.css";

export function Layout(){
    return (
        <div className={styles.layout}>
            <Navigation/>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}