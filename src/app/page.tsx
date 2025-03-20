import styles from "./page.module.scss";
import Header from "@/components/header/Header";
import ImageGallery from "@/components/ui/gallery/Gallery";
import { ImageType } from "@/components/ui/gallery/Gallery";
import SignButton from "@/components/ui/signButton/SignButton";
import Image from "next/image";

export default function Page() {
  const images: ImageType[] = [
    { src: "/first_photo.png", alt: "first_photo" },
    { src: "/second_photo.png", alt: "second_photo" },
    { src: "/third_photo.png", alt: "third_photo" },
    { src: "/fourth_photo.png", alt: "fourth_photo" },
  ];

  return (
    <div className={styles.page}>
      <main>
        <Header />
        <section className={styles.topic__section}>
          <div className={styles.image__wraper}>
            <ImageGallery images={images} isThumbnail={false} />
          </div>
          <div className={styles.topic__container}>
            <h3 className={styles.topic_container__item1}>
              Меня зовут Наталья, и я профессионально занимаюсь аппаратным
              массажем в{" "}
              <span className={styles.topic_container__span}>Строгино</span>.
            </h3>
            <h3 className={styles.topic_container__item2}>
              Помогаю людям выглядеть лучше, чувствовать себя легче и
              избавляться от напряжения.
            </h3>
            <h3 className={styles.topic_container__item3}>Если вы хотите:</h3>
            <ul className={styles.topic_container__list}>
              <li>Улучшить тонус и упругость кожи</li>
              <li>Избавиться от целлюлита и отеков</li>
              <li>Снять усталость и расслабиться</li>
              <li>Проработать мышцы после тренировок</li>
            </ul>
            <h3 className={styles.topic_container__item4}>
              Тогда вам точно стоит попробовать аппаратный массаж!
            </h3>
            <h3 className={styles.topic_container__item5}>
              Записывайтесь на сеанс – результат вас приятно удивит!
            </h3>
            <div className={styles.sign_btn__container}>
              <SignButton />
            </div>
          </div>
        </section>
        <section className={styles.services__section}>
          <h1 className={styles.services__title}>Услуги и цены</h1>
          <h2 className={styles.services__subtitle}>
            Выберите свой путь к здоровью, красоте и расслаблению
          </h2>
          <div className={styles.massage__block}>
            <div className={styles.massage__block_image_wrapper}>
              <Image src={"/sphere_massage.png"} alt="Массаж СФЕРА" fill />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
