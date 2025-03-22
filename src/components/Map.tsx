"use client";

import {useEffect, useRef, useState} from "react";

declare global {
    interface Window {
        ymaps: typeof ymaps;
    }
}

const YANDEX_MAP_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function YandexMap() {
    const mapRef = useRef<HTMLDivElement>(null);
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined" || !YANDEX_MAP_API_KEY) return;

        const loadMap = () => {
            if (window.ymaps) {
                initMap();
                return;
            }

            const script = document.createElement("script");
            script.src = `https://api-maps.yandex.ru/2.1/?apikey=${YANDEX_MAP_API_KEY}&lang=ru_RU`;
            script.async = true;

            script.onload = () => {
                window.ymaps.ready(initMap);
            };

            script.onerror = () => {
                console.error("Error loading Yandex Maps script");
            };

            document.head.appendChild(script);

            return () => {
                document.head.removeChild(script);
            };
        };

        const initMap = () => {
            if (!mapRef.current) return;

            const map = new window.ymaps.Map(mapRef.current, {
                center: [55.811771, 37.392895],
                zoom: 16,
                controls: ["zoomControl", "fullscreenControl"],
            });

            const placemark = new window.ymaps.Placemark(
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
                }
            );

            map.geoObjects.add(placemark);
            setMapLoaded(true);
        };

        loadMap();
    }, []);

    return (
        <div
            ref={mapRef}
            style={{
                width: "100%",
                height: "400px",
                borderRadius: "12px",
                overflow: "hidden",
                margin: "20px 0",
                position: "relative",
            }}
        >
            {!mapLoaded && (
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 100
                }}>
                    Загрузка карты...
                </div>
            )}
        </div>
    );
}