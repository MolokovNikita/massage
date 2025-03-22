"use client";

import {useEffect, useState} from 'react';
import styles from './sign-button.module.scss';

interface SignButtonProps {
    modal: React.ComponentType<{ onClose: () => void }>;
}

export default function SignButton({modal: Modal}: SignButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        }

        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };
    }, [isModalOpen]);

    return (
        <>
            <button
                className={styles.sign__btn}
                onClick={() => setIsModalOpen(true)}
            >
                Записаться
            </button>

            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}/>}
        </>
    );
}