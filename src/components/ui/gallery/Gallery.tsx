"use client";
import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import styles from "./gallery.module.scss";

export type ImageType = {
  src: string;
  alt: string;
  aspect_ratio?: number;
};

type ImageGalleryProps = {
  images: ImageType[];
  isThumbnail?: boolean;
};

export default function ImageGallery({
  images,
  isThumbnail = false,
}: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (images.length === 0) return <p>No images available</p>;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.gallery}>
      {/* Основное изображение */}
      <div
        className={styles.mainImageWrapper}
        style={{
          backgroundImage: `url(${images[currentIndex].src})`,
        }}
      >
        {images.length > 1 && (
          <>
            <button className={styles.arrowLeft} onClick={handlePrev}>
              <FaChevronLeft />
            </button>
            <button className={styles.arrowRight} onClick={handleNext}>
              <FaChevronRight />
            </button>
          </>
        )}
        <Image
          src={images[currentIndex].src}
          alt={`Image ${currentIndex + 1}`}
          fill
          className={styles.mainImage}
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      {/* Миниатюры */}
      {isThumbnail && (
        <div className={styles.thumbnails}>
          {images.map((img, index) => (
            <div
              key={index}
              className={`${styles.thumbnail} ${index === currentIndex ? styles.active : ""}`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={img.src}
                alt={`Thumbnail ${index + 1}`}
                width={80}
                height={80}
              />
            </div>
          ))}
        </div>
      )}

      {/* Модальное окно */}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes />
            </button>

            <Image
              src={images[currentIndex].src}
              alt={`Fullscreen ${currentIndex + 1}`}
              fill
              style={{ objectFit: "contain" }}
            />

            {images.length > 1 && (
              <>
                <button className={styles.modalArrowLeft} onClick={handlePrev}>
                  <FaChevronLeft />
                </button>
                <button className={styles.modalArrowRight} onClick={handleNext}>
                  <FaChevronRight />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
