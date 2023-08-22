import React from "react";
import styles from './page.module.css'
import { dataPortfolio } from "@/data";

export const metadata = {
    title: "MO LIN | Portfolio",
    description: "Portfolio page"
}

const Layout = ({children}) => {
    return (
        <div>
            <h1 className={styles.mainTitle}>
                {dataPortfolio.bigText}
            </h1>
            {children}
        </div>
    )
}

export default Layout