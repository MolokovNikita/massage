"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import ImageGallery, {
  ReactImageGalleryItem,
  ReactImageGalleryProps,
} from "react-image-gallery";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./gallery.module.scss";
import "react-image-gallery/styles/css/image-gallery.css";

export type ImageType = {
  src: string;
  alt: string;
  aspect_ratio?: number;
};

type GalleryProps = {
  images: ImageType[];
  isThumbnail?: boolean;
};

interface CustomImageGalleryItem extends ReactImageGalleryItem {
  originalClass?: string;
  thumbnailClass?: string;
}

export default function Gallery({ images, isThumbnail = false }: GalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Enter") {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  if (images.length === 0) return <p>Нет доступных фотографий</p>;

  const formattedImages: CustomImageGalleryItem[] = images.map((img) => ({
    original: img.src,
    thumbnail: isThumbnail ? img.src : undefined,
    originalAlt: img.alt,
    thumbnailAlt: img.alt,
    originalClass: styles.main__image,
    thumbnailClass: styles.thumbnail,
  }));

  const renderItem = (item: CustomImageGalleryItem, index: number) => (
    <div className={styles.main_image__wrapper}>
      <div
        className={styles.image_blur__background}
        style={{ backgroundImage: `url(${item.original})` }}
      />
      <Image
        src={item.original}
        alt={item.originalAlt || ""}
        fill
        priority={item.original === "/first_photo.png"}
        className={item.originalClass || ""}
        onClick={() => {
          setCurrentIndex(index);
          setIsModalOpen(true);
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        draggable={false}
        tabIndex={-1}
      />
    </div>
  );

  const renderLeftNav: ReactImageGalleryProps["renderLeftNav"] = (
    onClick,
    disabled
  ) => (
    <button
      className={styles.arrow__left}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
    >
      <FaChevronLeft />
    </button>
  );

  const renderRightNav: ReactImageGalleryProps["renderRightNav"] = (
    onClick,
    disabled
  ) => (
    <button
      className={styles.arrow__right}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
    >
      <FaChevronRight />
    </button>
  );

  // Анимация для модального окна
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  // Анимация для фона
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className={styles.gallery}>
      <ImageGallery
        items={formattedImages}
        infinite={true}
        showPlayButton={false}
        showIndex={true}
        showFullscreenButton={false}
        showNav={images.length > 1}
        renderItem={(item) => renderItem(item, formattedImages.indexOf(item))}
        renderLeftNav={renderLeftNav}
        renderRightNav={renderRightNav}
        // additionalClass={styles.customGallery}
        slideDuration={250}
      />

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className={styles.modal}
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              if (e.target === e.currentTarget) {
                setIsModalOpen(false);
              }
            }}
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className={styles.modal__content}
              ref={modalRef}
              onClick={(e: React.MouseEvent<HTMLElement>) =>
                e.stopPropagation()
              }
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                className={styles.close__button}
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  e.stopPropagation();
                  setIsModalOpen(false);
                }}
              >
                <FaTimes />
              </button>

              <ImageGallery
                items={formattedImages}
                infinite={true}
                showPlayButton={false}
                showFullscreenButton={false}
                showNav={images.length > 1}
                renderLeftNav={renderLeftNav}
                renderRightNav={renderRightNav}
                additionalClass={styles.modal__gallery}
                slideDuration={250}
                startIndex={currentIndex}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
