// components/header/Header.tsx
import styles from "./header.module.scss";
import NavBar from "./NavBar";
import SocialList from "./SocialList";

export default function Header() {
    return (
        <header className={styles.header}>
            <p className={styles.location__name}>г. Москва, Неманский пр., д.7</p>
            <NavBar/>
            <div className={styles.header_social__wrapper}><SocialList/></div>
        </header>
    );
}