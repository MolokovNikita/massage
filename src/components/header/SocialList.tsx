import styles from "@/components/header/header.module.scss";
import Image from "next/image";

export default function SocialList() {
    return (
        <ul className={styles.social__list}>
            <li className={styles.social__item}>
                <a href="https://wa.me/+79145444097" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/whatsapp.svg"
                        alt="whatsapp logo"
                        width={23}
                        height={23}
                    />
                </a>
            </li>
            <li className={styles.social__item}>
                <a href="https://www.instagram.com/massage_strogino_natalya" target="_blank"
                   rel="noopener noreferrer">
                    <Image
                        src="/instagram.svg"
                        alt="instagram logo"
                        width={35}
                        height={35}
                    />
                </a>
            </li>
            <li className={styles.social__item}>
                <a href="https://t.me/+79145444097" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/telegram.svg"
                        alt="telegram logo"
                        width={25}
                        height={25}
                    />
                </a>
            </li>
        </ul>

    )
}