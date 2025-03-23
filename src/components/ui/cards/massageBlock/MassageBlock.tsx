"use client";
import styles from "./massage-block.module.scss";
import Image from "next/image";
import { JSX } from "react";
import { useEffect, useState } from "react";
import { FadeInBottom } from "@/components/ui/animations/AnimatedBlocks";

export type PriceType = {
  time: string;
  price: number;
};

type MassageBlockProps = {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  list: string[];
  price: PriceType[];
  abonement: PriceType[];
  isInverted?: boolean;
};

const formatNumber = (value: number | null): string => {
  if (value === null) return "";
  return new Intl.NumberFormat("ru-RU").format(value);
};

function ImageBlock({
  imageSrc,
  imageAlt,
  isInverted = false,
}: Pick<
  MassageBlockProps,
  "imageSrc" | "imageAlt" | "isInverted"
>): JSX.Element {
  return (
    <div
      className={[
        styles.massage__block_image_wrapper,
        isInverted ? styles.inverted : "",
      ]
        .join(" ")
        .trim()}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 1200px) 100vw, (max-width: 1400px) 50vw, 33vw"
      />
    </div>
  );
}

function TextBlock(
  props: Omit<MassageBlockProps, "imageSrc" | "imageAlt" | "isInverted">
): JSX.Element {
  return (
    <div className={styles.massage__block_text__container}>
      <h2 className={styles.massage__name}>{props.title}</h2>
      <h3 className={styles.massage__description}>{props.content}</h3>
      <ul className={styles.massage__benefits}>
        {props.list.map((item, i) => (
          <li key={i}>
            <p>{item}</p>{" "}
          </li>
        ))}
      </ul>
      <div className={styles.massage_price__container}>
        <div className={styles.price__container}>
          <h3>Стоимость:</h3>
          <ul className={styles.prices__list}>
            {props.price.map((item, i) => (
              <li key={i}>
                <p>
                  {item.time} – <strong>{formatNumber(item.price)} ₽</strong>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.abonement__container}>
          <h3>
            Абонемент <strong>(10 сеансов):</strong>
          </h3>
          <ul className={styles.abonemets__list}>
            {props.abonement.map((item, i) => (
              <li key={i}>
                <p>
                  {" "}
                  {item.time} – <strong>{formatNumber(item.price)} ₽</strong>
                </p>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function MassageBlock(props: MassageBlockProps): JSX.Element {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className={styles.massage__block}>
      {props.isInverted && isLargeScreen ? (
        <>
          <FadeInBottom>
            <TextBlock {...props} />
          </FadeInBottom>
          <FadeInBottom>
            <ImageBlock
              imageSrc={props.imageSrc}
              imageAlt={props.imageAlt}
              isInverted={props.isInverted}
            />
          </FadeInBottom>
        </>
      ) : (
        <>
          <FadeInBottom>
            <ImageBlock imageSrc={props.imageSrc} imageAlt={props.imageAlt} />
          </FadeInBottom>
          <FadeInBottom>
            <TextBlock {...props} />
          </FadeInBottom>
        </>
      )}
    </div>
  );
}
