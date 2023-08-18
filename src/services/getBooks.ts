import { IBook } from "@/interfaces";

export function getBooks() {
    const endpoint = import.meta.env.VITE_BACKEND_URL + "books";

    return fetch(endpoint).then((data) => {
        if (!data.ok) {
            throw new Error(data.statusText);
        }

        return data.json() as Promise<IBook[]>;
    });
}
