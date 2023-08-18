import { IBook } from "@/interfaces";
import { getBook } from "@/services";
import { useEffect, useState } from "react";

export function useBook(id: string) {
    const [book, setBook] = useState<IBook>();
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [hasFailed, setHasFailed] = useState<Boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        setHasFailed(false);

        getBook(id)
            .then((book) => setBook(book))
            .catch((error) => {
                setHasFailed(true);
                console.error(error);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return { book, isLoading, hasFailed };
}
