import styles from "./page.module.scss";
import Header from "@/components/header/Header";
import ImageGallery from "@/components/ui/cards/gallery/Gallery";
import { ImageType } from "@/components/ui/cards/gallery/Gallery";
import SignButton from "@/components/ui/buttons/sign-button/SignButton";
import MassageBlock from "@/components/ui/cards/massageBlock/MassageBlock";
import Image from "next/image";
import YandexMap from "@/components/Map";
import {
  FadeInRight,
  FadeInLeft,
  FadeInBottom,
} from "@/components/ui/animations/AnimatedBlocks";
import SignModal from "@/components/ui/modals/signModal/SignModal";

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
        <h1 className={styles.visually__hidden}>
          Студия аппаратного массажа СФЕРА в Строгино
        </h1>
        <section id="about" className={styles.topic__section}>
          <div className={styles.image__wrapper}>
            <ImageGallery images={images} isThumbnail={false} />
          </div>
          <div className={styles.topic__container}>
            <FadeInRight>
              <p className={styles.topic_container__item1}>
                Меня зовут Наталья, и я профессионально занимаюсь аппаратным
                массажем в{" "}
                <span className={styles.topic_container__span}>Строгино</span>.
              </p>
              <h3 className={styles.topic_container__item2}>
                Помогаю людям выглядеть лучше, чувствовать себя легче и
                избавляться от напряжения.
              </h3>
              <h3 className={styles.topic_container__item3}>Если вы хотите:</h3>
              <ul className={styles.topic_container__list}>
                <li>
                  <p>Улучшить тонус и упругость кожи</p>
                </li>
                <li>
                  <p>Избавиться от целлюлита и отеков</p>
                </li>
                <li>
                  <p>Снять усталость и расслабиться</p>
                </li>
                <li>
                  <p>Проработать мышцы после тренировок</p>
                </li>
              </ul>
              <h3 className={styles.topic_container__item4}>
                Тогда вам точно стоит попробовать аппаратный массаж!
              </h3>
              <h3 className={styles.topic_container__item5}>
                Записывайтесь на сеанс – результат вас приятно удивит!
              </h3>
            </FadeInRight>
            <FadeInRight delay={0.2}>
              <div className={styles.sign_btn__container}>
                <SignButton modal={SignModal} />
              </div>
            </FadeInRight>
          </div>
        </section>
        <section id="services" className={styles.services__section}>
          <h2 className={styles.services__title}>УСЛУГИ И ЦЕНЫ</h2>
          <h2 className={styles.services__subtitle}>
            Выберите свой путь к здоровью, красоте и расслаблению
          </h2>
          <MassageBlock
            imageSrc={"/sphere_massage.png"}
            imageAlt={"Массаж СФЕРА"}
            title={"СФЕРА"}
            content={
              "Глубокая проработка и расслабление\n" +
              "Массаж с использованием специальных сфер стимулирует кровообращение, ускоряет метаболизм\n" +
              "и помогает в борьбе с целлюлитом. Идеально подходит для тех, кто хочет:"
            }
            list={[
              "Улучшить тонус кожи",
              "Разогреть мышцы и снять напряжение",
              "Улучшить лимфоток и избавиться от отеков",
              "Здоровое и стройное тело без диет и физических нагрузок",
            ]}
            price={[
              { time: "30 мин", price: 1600 },
              { time: "45 мин", price: 2200 },
              { time: "60 мин", price: 2700 },
              { time: "75 мин", price: 3000 },
            ]}
            abonement={[
              { time: "30 мин", price: 1600 },
              { time: "45 мин", price: 2200 },
              { time: "60 мин", price: 2700 },
              { time: "75 мин", price: 3000 },
            ]}
            isInverted={false}
          />

          <MassageBlock
            imageSrc={"/vacuum_massage.png"}
            imageAlt={"Массаж ВАКУУМ"}
            title={"ВАКУУМ"}
            content={
              "Антицеллюлитный массаж\n" +
              "Глубокая вакуумная стимуляция эффективно разбивает \n" +
              "жировые отложения, улучшает лимфодренаж и моделирует фигуру. Подходит для:"
            }
            list={[
              "Борьбы с целлюлитом и лишними сантиметрами",
              "Улучшения кровообращения и вывода токсинов",
              "Повышения эластичности кожи",
            ]}
            price={[
              { time: "45 мин", price: 1500 },
              { time: "60 мин", price: 2000 }
            ]}
            abonement={[
              { time: "45 мин", price: 1300 },
              { time: "60 мин", price: 1700 }
            ]}
            isInverted={true}
          />

          <MassageBlock
            imageSrc={"/vibration_massage.png"}
            imageAlt={"Массаж ВИБРАЦИОННЫЙ"}
            title={"ВИБРАЦИОННЫЙ"}
            content={
              "Расслабление и восстановление\n" +
              "Массаж с использованием вибрации глубоко\n" +
              "прорабатывает мышцы, снимает спазмы и улучшает общее самочувствие. Отличный вариант для:"
            }
            list={[
              "Восстановления после физических нагрузок",
              "Улучшения циркуляции крови",
              "Борьбы с отечностью и застоем жидкостей",
            ]}
            price={[
              { time: "45 мин", price: 1500 },
              { time: "60 мин", price: 2000 }
            ]}
            abonement={[
              { time: "45 мин", price: 1300 },
              { time: "60 мин", price: 1700 }
            ]}
            isInverted={false}
          />

          <MassageBlock
            imageSrc={"/ems_rf_massage.png"}
            imageAlt={"Массаж EMS + RF"}
            title={"EMS + RF"}
            content={
              "Комбинированный массаж\n" +
              "Сочетание электромиостимуляции и радиочастотного воздействия\n" +
              "для максимального эффекта. Подходит для:"
            }
            list={[
              "Улучшения тонуса мышц",
              "Сжигания жировых отложений",
              "Подтяжки кожи и омоложения",
              "Коррекции фигуры",
            ]}
            price={[
              { time: "1 манипула, 30 мин", price: 750 },
              { time: "2 манипулы, 30 мин", price: 1300 },
              { time: "3 манипулы, 30 мин", price: 1800 },
              { time: "4 манипулы, 30 мин", price: 2000 },
            ]}
            abonement={[
              { time: "1 манипула, 30 мин", price: 650 },
              { time: "2 манипулы, 30 мин", price: 1100 },
              { time: "3 манипулы, 30 мин", price: 1500 },
              { time: "4 манипулы, 30 мин", price: 1700 },
            ]}
            isInverted={true}
          />

          <MassageBlock
            imageSrc={"/rf_lifting.png"}
            imageAlt={"RF лифтинг"}
            title={"RF ЛИФТИНГ"}
            content={
              "Радиочастотный лифтинг\n" +
              "Современная технология омоложения кожи\n" +
              "с помощью радиочастотного воздействия. Идеально для:"
            }
            list={[
              "Подтяжки кожи лица и тела",
              "Уменьшения морщин",
              "Улучшения эластичности кожи",
              "Омоложения и восстановления",
            ]}
            price={[
              { time: "Тело, 1 зона, 45 мин", price: 1500 },
              { time: "Лицо, шея, декольте, 30 мин", price: 1200 },
            ]}
            abonement={[
              { time: "Тело, 1 зона, 45 мин", price: 1300 },
              { time: "Лицо, шея, декольте, 30 мин", price: 1200 },
            ]}
            isInverted={false}
          />

          <section className={styles.course__section}>
            <FadeInLeft>
              <h2 className={styles.course__title}>КУРС ПОХУДЕНИЯ</h2>
            </FadeInLeft>
            <FadeInLeft delay={0.2}>
              <h3 className={styles.course__subtitle}>
                8 сеансов от{" "}
                <span className={styles.course__price}>13 990</span> руб.
              </h3>
            </FadeInLeft>
            <FadeInRight>
              <h2 className={styles.course__includes}>Что входит в курс ?</h2>
            </FadeInRight>
            <FadeInRight delay={0.2}>
              <div className={styles.course_description__container}>
                <h3 className={styles.course__content}>
                  Комплексная программа аппаратного массажа, направленная на
                  уменьшение объемов, улучшение тонуса кожи и ускорение
                  метаболизма. Включает индивидуальный подбор техник.
                </h3>
                <ul className={styles.course_benefits__list}>
                  <li>
                    <p>
                      Вакуумный массаж всего тела – детокс и антицеллюлитный
                      эффект
                    </p>
                  </li>
                  <li>
                    <p>RF-лифтинг тела – подтяжка и омоложение кожи</p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Массаж сферами – улучшение микроциркуляции и лимфодренажа
                    </p>
                  </li>
                  <li>
                    <p>Контрастные обертывания – улучшение обмена веществ</p>
                  </li>
                  <li>
                    <p>Вибрационный массаж – релакс и восстановление</p>
                  </li>
                </ul>
              </div>
            </FadeInRight>
          </section>
          <section className={styles.sign__section}>
            <FadeInRight>
              <h2 className={styles.sign__title}>
                Запишитесь на сеанс и почувствуйте разницу!
              </h2>
            </FadeInRight>
            <FadeInRight delay={0.3}>
              <div className={styles.section_sign_btn__container}>
                <SignButton modal={SignModal} />
              </div>
            </FadeInRight>
          </section>
        </section>
        <section id="reviews" className={styles.reviews__section}>
          <FadeInBottom>
            <h2 className={styles.reviews__title}>ОТЗЫВЫ</h2>
            <ul className={styles.reviews__list}>
              <li>
                <Image
                  src={"/first_review.png"}
                  alt={"Первый отзыв"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </li>
              <li>
                <Image
                  src={"/second_review.png"}
                  alt={"Первый отзыв"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </li>
              <li>
                <Image
                  src={"/third_review.png"}
                  alt={"Первый отзыв"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </li>
            </ul>
          </FadeInBottom>
        </section>
        <section id="contacts" className={styles.contacts__section}>
          <FadeInBottom>
            <h2 className={styles.contacts__title}>КОНТАКТЫ</h2>
            <ul className={styles.social__list}>
              <li className={styles.social__item}>
                <a href="https://wa.me/+79145444097">
                  <Image
                    src="/whatsapp.svg"
                    alt="whatsapp logo"
                    width={30}
                    height={30}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </a>
              </li>
              <li className={styles.social__item}>
                <a href="https://www.instagram.com/massage_strogino_natalya">
                  <Image
                    src="/instagram.svg"
                    alt="instagram logo"
                    width={45}
                    height={45}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </a>
              </li>
              <li className={styles.social__item}>
                <a href="https://t.me/+79145444097">
                  <Image
                    src="/telegram.svg"
                    alt="telegram logo"
                    width={35}
                    height={35}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </a>
              </li>
            </ul>
            <div className={styles.contacts__address}>
              <h3>
                Адрес: <strong>Москва, Неманский пр., д.7к1</strong>
              </h3>
              <h3>
                {" "}
                Метро <strong>Строгино</strong>
              </h3>
            </div>
          </FadeInBottom>
          <FadeInBottom delay={0.3}>
            <div className={styles.map__container}>
              <YandexMap />
            </div>
          </FadeInBottom>
        </section>
      </main>
    </div>
  );
}
