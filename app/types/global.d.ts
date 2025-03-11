export interface Car {
    createdAt: string | number | Date;
    updatedAt: string | number | Date;
    id: number | string;
    marca: string;
    modelo: string;
    anio: number;
    precio: string;
    images: string[];
    image_path: string;
}
