import { Car } from "../types/global";

export async function getCars(): Promise<Car[]> {
    const apiUrl = process.env.CAR_FACIL_API;
    const res = await fetch(`${apiUrl}/coches`);
    if (!apiUrl) {
        throw new Error("La variable de entorno CAR_FACIL_API no está definida.");
    }
    if (!res.ok) {
        throw new Error("Error al obtener los coches");
    }
    return res.json();
}
