declare namespace ymaps {
    export function ready(callback: () => void): void;

    class Map {
        constructor(element: HTMLElement | string, options: MapOptions);

        geoObjects: GeoObjectCollection;

        destroy(): void;

        setCenter(center: number[], zoom?: number): void;
    }

    interface GeoObjectCollection {
        add(object: GeoObject): void;

        remove(object: GeoObject): void;
    }

    interface GeoObject {
        getMap(): Map;

        options: OptionManager;
        events: EventManager;
        geometry?: Geometry;
        properties?: DataManager;
    }

    class Placemark implements GeoObject {
        constructor(
            geometry: number[] | object,
            properties?: PlacemarkProperties,
            options?: PlacemarkOptions
        );

        getMap(): Map;

        options: OptionManager;
        events: EventManager;
    }

    interface MapOptions {
        center: number[];
        zoom: number;
        controls: string[];
        behaviors?: string[];
    }

    interface PlacemarkProperties {
        hintContent?: string;
        balloonContent?: string;
        iconContent?: string;
    }

    interface PlacemarkOptions {
        iconLayout?: string;
        iconImageHref?: string;
        iconImageSize?: number[];
        iconImageOffset?: number[];
        preset?: string;
    }

    interface OptionManager {
        get<T = unknown>(key: string): T;

        set(key: string, value: unknown): this;

        unset(key: string): this;
    }

    interface EventManager {
        add(
            type: string,
            callback: (event: unknown) => void,
            context?: unknown,
            priority?: number
        ): this;

        remove(
            type: string,
            callback: (event: unknown) => void
        ): this;
    }

    interface Geometry {
        getBounds(): number[][];

        getType(): string;
    }

    interface DataManager {
        get<T = unknown>(key: string): T;

        set(key: string, value: unknown): this;
    }
}

declare global {
    interface Window {
        ymaps: typeof ymaps;
    }
}