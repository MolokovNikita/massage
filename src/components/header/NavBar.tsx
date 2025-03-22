"use client";

import {useEffect, useState} from 'react';
import styles from "./header.module.scss";
import SocialList from "@/components/header/SocialList";

export default function NavBar() {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            let current: string | null = null;

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    current = section.id;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const checkbox = document.getElementById('hamburger') as HTMLInputElement;
        if (checkbox) {
            checkbox.checked = isMenuOpen;
        }
    }, [isMenuOpen]);

    useEffect(() => {
//Блокировака скролла при открытом меню
        const handleScroll = (e: Event) => {
            if (isMenuOpen) {
                e.preventDefault();
                e.stopPropagation();
            }
        };

        const handleWheel = (e: WheelEvent) => {
            if (isMenuOpen) {
                e.preventDefault();
                e.stopPropagation();
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (isMenuOpen) {
                e.preventDefault();
                e.stopPropagation();
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (isMenuOpen && (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === ' ')) {
                e.preventDefault();
                e.stopPropagation();
            }
        };

        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';

            window.addEventListener('scroll', handleScroll, {passive: false});
            window.addEventListener('wheel', handleWheel, {passive: false});
            window.addEventListener('touchmove', handleTouchMove, {passive: false});
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';

            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMenuOpen]);

    const handleLinkClick = (sectionId: string) => {
        if (activeSection !== sectionId) {
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className={styles.nav__bar}>
            <input
                className={styles.checkbox}
                type="checkbox"
                id="hamburger"
                onChange={(e) => setIsMenuOpen(e.target.checked)}
            />
            <div className={styles.hamburger__lines}>
                <span className={`${styles.line} ${styles.line1}`}></span>
                <span className={`${styles.line} ${styles.line2}`}></span>
                <span className={`${styles.line} ${styles.line3}`}></span>
            </div>
            <ul className={styles.menu__items}>
                <li className={styles.nav__item}>
                    <a
                        href="#about"
                        className={activeSection === 'about' ? styles.active : ''}
                        onClick={() => handleLinkClick('about')}
                    >
                        Обо мне
                    </a>
                </li>
                <li className={styles.nav__item}>
                    <a
                        href="#services"
                        className={activeSection === 'services' ? styles.active : ''}
                        onClick={() => handleLinkClick('services')}
                    >
                        Услуги и цены
                    </a>
                </li>
                <li className={styles.nav__item}>
                    <a
                        href="#reviews"
                        className={activeSection === 'reviews' ? styles.active : ''}
                        onClick={() => handleLinkClick('reviews')}
                    >
                        Отзывы
                    </a>
                </li>
                <li className={styles.nav__item}>
                    <a
                        href="#contacts"
                        className={activeSection === 'contacts' ? styles.active : ''}
                        onClick={() => handleLinkClick('contacts')}
                    >
                        Контакты
                    </a>
                </li>
                <li className={styles.nav__item}>
                    <div className={styles.nav_social__wrapper}><SocialList/></div>
                </li>
            </ul>
        </nav>
    );
}