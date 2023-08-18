import { useEffect, useState } from "react";
import { IBook } from "@/interfaces";
import { getBooks } from "@/services";

export function useBooks() {
    const [books, setBooks] = useState<IBook[]>([]);
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [hasFailed, setHasFailed] = useState<Boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        setHasFailed(false);

        getBooks()
            .then((books) => setBooks(books))
            .catch((error) => {
                setHasFailed(true);
                console.error(error);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return {
        books,
        isLoading,
        hasFailed,
    };
}
