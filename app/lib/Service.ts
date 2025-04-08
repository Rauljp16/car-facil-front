import { Car } from "../types/global";

export async function getCars(): Promise<Car[]> {
    const apiUrl = process.env.CAR_FACIL_API;
    if (!apiUrl) {
        throw new Error("La variable de entorno CAR_FACIL_API no está definida.");
    }
    const res = await fetch(`${apiUrl}/coches`);
    if (!res.ok) {
        throw new Error("Error al obtener los coches");
    }
    return res.json();
}

export async function getCarById(id: string): Promise<Car> {
    const apiUrl = process.env.CAR_FACIL_API;
    if (!apiUrl) {
        throw new Error("La variable de entorno CAR_FACIL_API no está definida.");
    }
    const res = await fetch(`${apiUrl}/coches/${id}`);
    if (!res.ok) {
        throw new Error(`Error al obtener el coche con ID ${id}`);
    }
    return res.json();
}
