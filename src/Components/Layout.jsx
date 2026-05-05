import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import styles from "./Layout.module.css";

export function Layout() {
    return (
        <div className={styles.layout}>
            <ScrollToTop />
            <Navigation />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}