import {getSettings} from "../../../lib/wordpress";

import Logo from "./Logo";
import Menu from "./Menu";
import TopBar from "./TopBar";
import Button from "../../ui/Button";
import styles from "./Header.module.css";

export default async function Header() {

const data = await getSettings()

console.log(data);


    return (
        <header className={styles.header}>
            <TopBar data={data}/>

            <div className={styles.menuHeader}>
            <div className={styles.logo}>
                <Logo/>
            </div>
            
           <div className={styles.menu}>
            <Menu/>
            
            </div>

            <div className={styles.botaoZap}>
                <Button data={data}/>
            </div>
            </div>

        </header>
    );
}