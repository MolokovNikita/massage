"use client";
import { useState } from "react";
import axios from "axios";
import { IMaskInput } from "react-imask";
import styles from "./sign-modal.module.scss";

interface FormData {
  name: string;
  phone: string;
  service: string;
}

interface ModalProps {
  onClose: () => void;
}

export default function SignModal({ onClose }: ModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    service: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const rawPhone = formData.phone.replace(/\D/g, "");
      await axios.post("/api/send-to-telegram", {
        ...formData,
        phone: rawPhone,
      });
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setFormData({ name: "", phone: "", service: "" });
      }, 2000);
    } catch (err) {
      console.error(err);
      setError("Ошибка при отправке. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.modal__overlay} onClick={onClose}>
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close__button} onClick={onClose}>
          &times;
        </button>

        <h2 className={styles.modal__title}>Запись на сеанс</h2>

        {!success ? (
          <form onSubmit={handleSubmit} className={styles.modal__form}>
            <div className={styles.input__group}>
              <input
                type="text"
                required
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <span className={styles.input__border} />
            </div>

            <div className={styles.input__group}>
              <div className={styles.phone__wrapper}>
                <span className={styles.flag}>🇷🇺</span>
                <IMaskInput
                  mask="+7 (000) 000-00-00"
                  placeholder="+7 (999) 123-45-67"
                  unmask={true}
                  inputMode="tel"
                  value={formData.phone}
                  onAccept={(value) =>
                    setFormData({ ...formData, phone: value })
                  }
                />
              </div>
              <span className={styles.input__border} />
            </div>

            <div className={styles.select__wrapper}>
              <select
                required
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
              >
                <option value="">Выберите услугу</option>
                <option value="СФЕРА">СФЕРА</option>
                <option value="ВАКУУМ">ВАКУУМ</option>
                <option value="ВИБРАЦИОННЫЙ">ВИБРАЦИОННЫЙ</option>
              </select>
            </div>

            {error && <div className={styles.error__message}>{error}</div>}

            <button
              type="submit"
              className={styles.submit__button}
              disabled={loading}
            >
              {loading ? (
                <span className={styles.loader} />
              ) : (
                "Отправить заявку"
              )}
            </button>
          </form>
        ) : (
          <div className={styles.success__message}>
            <svg viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            Заявка успешно отправлена!
          </div>
        )}
      </div>
    </div>
  );
}
