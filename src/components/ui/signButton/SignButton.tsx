"use client";

import {useState, useEffect} from 'react';
import styles from "./signbutton.module.scss";
import axios from 'axios';

interface FormData {
    name: string;
    phone: string;
    service: string;
}

export default function SignButton() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        service: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (modalIsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [modalIsOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await axios.post('/api/send-to-telegram', formData);
            setSuccess(true);
            setTimeout(() => {
                setModalIsOpen(false);
                setSuccess(false);
                setFormData({name: '', phone: '', service: ''});
            }, 2000);
        } catch (err) {
            console.error(err);
            setError('Ошибка при отправке. Попробуйте ещё раз.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button
                className={styles.sign__btn}
                onClick={() => setModalIsOpen(true)}
            >
                Записаться
            </button>

            {modalIsOpen && (
                <div className={styles.modalOverlay} onClick={() => setModalIsOpen(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button
                            className={styles.closeButton}
                            onClick={() => setModalIsOpen(false)}
                        >
                            &times;
                        </button>

                        <h2 className={styles.modalTitle}>Запись на сеанс</h2>

                        {!success ? (
                            <form onSubmit={handleSubmit} className={styles.modalForm}>
                                <div className={styles.inputGroup}>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Ваше имя"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                    <span className={styles.inputBorder}/>
                                </div>

                                <div className={styles.inputGroup}>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="Телефон"
                                        pattern="\+?[0-9\s\-\(\)]+"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    />
                                    <span className={styles.inputBorder}/>
                                </div>

                                <div className={styles.selectWrapper}>
                                    <select
                                        required
                                        value={formData.service}
                                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                                    >
                                        <option value="">Выберите услугу</option>
                                        <option value="СФЕРА">СФЕРА</option>
                                        <option value="ВАКУУМ">ВАКУУМ</option>
                                        <option value="ВИБРАЦИОННЫЙ">ВИБРАЦИОННЫЙ</option>
                                    </select>
                                </div>


                                {error && <div className={styles.errorMessage}>{error}</div>}

                                <button
                                    type="submit"
                                    className={styles.submitButton}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <span className={styles.loader}/>
                                    ) : (
                                        'Отправить заявку'
                                    )}
                                </button>
                            </form>
                        ) : (
                            <div className={styles.successMessage}>
                                <svg viewBox="0 0 24 24">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                </svg>
                                Заявка успешно отправлена!
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}