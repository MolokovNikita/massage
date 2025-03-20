import styles from "./header.module.scss";
import Image from "next/image";
export default function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.location__name}>г. Москва, Неманский пр., д.7</p>
      <nav className={styles.nav__bar}>
        {/*Hamburger menu*/}
        <input className={styles.checkbox} type="checkbox" name="" id="" />
        <div className={styles.hamburger__lines}>
          <span className={`${styles.line} ${styles.line1}`}></span>
          <span className={`${styles.line} ${styles.line2}`}></span>
          <span className={`${styles.line} ${styles.line3}`}></span>
        </div>
        <ul className={styles.menu__items}>
          <li className={styles.nav__item}>
            <a href="#">Обо мне</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">Услуги и цены</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">Отзывы</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </nav>
      <ul className={styles.social__list}>
        <li className={styles.social__item}>
          <a href="#">
            <Image
              src="/whatsapp.svg"
              alt="whatsapp logo"
              width={23}
              height={23}
            />
          </a>
        </li>
        <li className={styles.social__item}>
          <a href="#">
            <Image
              src="/instagram.svg"
              alt="instagram logo"
              width={35}
              height={35}
            />
          </a>
        </li>
        <li className={styles.social__item}>
          <a href="#">
            <Image
              src="/telegram.svg"
              alt="telegram logo"
              width={25}
              height={25}
            />
          </a>
        </li>
      </ul>
    </header>
  );
}
