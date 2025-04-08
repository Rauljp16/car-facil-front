export interface Car {
    createdAt: string | number | Date;
    updatedAt: string | number | Date;
    id: number | string;
    marca: string;
    modelo: string;
    anio: number;
    km: number;
    precio: string;
    images: string[];
    image_path: string;
    cambio: string;
    combustible: string;
    cv: number;
    motor: string;
    plazas: number;
    puertas: number;
}
