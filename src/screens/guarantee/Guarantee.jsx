"use client";

import BreadCrumbs from "@/components/share/BreadCrumbs/BreadCrumbs";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./garantee.module.scss";
import seoStyles from "@/app/seoStyles.module.css";
import HomeSlider from "@/components/HomeSlider/HomeSlider";

const Guarantee = () => {
  const {t}=useTranslation()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <section className={styles.container}>
      <div className="container">
        <h1 className={seoStyles.titleHidden}>
          Оренда квартири Суми. Сумы квартиры. Квартири подобово.
        </h1>
        <figure className={styles.toBackContainer}>
          <BreadCrumbs title={t('Navigation.Guarantee')} />
        </figure>
        <div className={styles.garanteeContainer}>
          <article>
            {!isLoading && (
              <>
                <h2 className={styles.title}>{t('GuaranteePage.MainTitle')}</h2>
                <ul className={styles.rulesList}>
                  <li>
                    <h3 className={styles.decimalListTitle}>
                      Вам буде відмовлено у наданні гарантії, якщо:
                    </h3>
                    <ol className={styles.decimalList}>
                      <li>
                        При підборі деталі за каталогом було допущено помилку
                        (установка деталі проводилася на невідповідний
                        автомобіль);
                      </li>
                      <li>
                        Деталь була деформована під час встановлення/зняття;
                      </li>
                      <li>
                        Деталь була встановлена з порушенням правил її
                        встановлення, що призвело до її несправності;
                      </li>
                      <li>
                        Деталь має видимі пошкодження, які були викликані її
                        використанням та експлуатацією;
                      </li>
                      <li>
                        Конструкція деталі була змінена у процесі її монтажу на
                        транспортний засіб;
                      </li>
                      <li>
                        Деталь втратила свої корисні властивості через знос;
                      </li>
                      <li>
                        Комплектація деталі не відповідає тій, яка була в момент
                        її придбання в магазині;
                      </li>
                      <li>
                        Деталь експлуатувалася в екстремальних умовах (спортивні
                        заходи);
                      </li>
                    </ol>
                  </li>
                  <li>
                    <h3 className={styles.decimalListTitle}>
                      Обов&apos;язково взяти із собою наступний перелік
                      документів:
                    </h3>
                    <ol className={styles.decimalList}>
                      <li>
                        Гарантійний талон (якщо передбачений заводом-виробником)
                        з печаткою продавця;
                      </li>
                      <li>
                        Ксерокопію наряд-замовлення із СТО, яке проводило
                        процедуру встановлення та зняття деталі з транспортного
                        засобу. Цей документ повинен включати повну інформацію
                        про СТО та автомобіль, а також перелік усіх виконаних
                        операцій. Обов&apos;язково перевірте, щоб документ був
                        із печаткою, якщо ж його немає, то потрібна буде копія
                        витягу з держреєстру про реєстрацію; Копію чека,
                        рахунок-фактури чи накладної;
                      </li>
                      <li>
                        Акт рекламації (можна завантажити із нашого сайту). Цей
                        документ має бути заповнений на СТО. У ньому детально
                        має бути описано суть проблеми, наведено інформацію про
                        стан інших деталей автомобіля та загальні дані про сам
                        транспортний засіб. Акт має бути засвідчений печаткою
                        або йти разом із копією виписки з держ.реєстру про
                        реєстрацію (якщо СТО працює без друку);
                      </li>
                      <li>
                        Поміщати в квартиру-готель, що орендується, сторонніх
                        людей, більш домовленої кількості.
                      </li>
                      <li>
                        Висновок про проведення діагностики несправності (тільки
                        для елементів електрообладнання, вартість яких перевищує
                        200 гривень з ПДВ).
                      </li>
                    </ol>
                  </li>
                </ul>
              </>
            )}
          </article>
        </div>
        <div className={styles.swiperWrapper}>
          <HomeSlider />
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
