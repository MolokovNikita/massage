// components/YandexMap.tsx
"use client";

import { useEffect, useRef, useState } from "react";

const YANDEX_MAP_API_KEY = process.env.API_KEY;

export default function YandexMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [ymaps, setYmaps] = useState<any>(null);
  const [mapInstance, setMapInstance] = useState<any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${YANDEX_MAP_API_KEY}&lang=ru_RU`;
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      window.ymaps.ready(() => {
        // @ts-ignore
        setYmaps(window.ymaps);
        setMapLoaded(true);
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (mapLoaded && ymaps && mapRef.current) {
      // Создаем карту
      const map = new ymaps.Map(mapRef.current, {
        center: [55.811771, 37.392895],
        zoom: 17,
        controls: ["zoomControl", "fullscreenControl"],
      });

      // Добавляем маркер
      const placemark = new ymaps.Placemark(
        [55.811771, 37.392895],
        {
          hintContent: "Студия массажа",
          balloonContent: "г. Москва, Неманский пр., д.7",
        },
        {
          iconLayout: "default#image",
          iconImageHref: "/map-marker.png",
          iconImageSize: [40, 40],
          iconImageOffset: [-20, -40],
        },
      );

      map.geoObjects.add(placemark);
      setMapInstance(map);

      return () => {
        map.destroy();
      };
    }
  }, [mapLoaded, ymaps]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "400px",
        borderRadius: "12px",
        overflow: "hidden",
        margin: "20px 0",
      }}
    >
      {!mapLoaded && <div>Загрузка карты...</div>}
    </div>
  );
}
