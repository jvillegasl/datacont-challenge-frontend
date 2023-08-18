import { IBook } from "@/interfaces";

export function getBook(id: string) {
    const endpoint =
        import.meta.env.VITE_BACKEND_URL + "books/details/" + id;

    return fetch(endpoint).then((data) => {
        if (!data.ok) {
            throw new Error(data.statusText);
        }

        return data.json() as Promise<IBook>;
    });
}
