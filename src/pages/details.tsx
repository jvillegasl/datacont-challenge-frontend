import { BookForm } from "@/components";
import { useBook } from "@/hooks";
import { useParams } from "react-router-dom";

export function BookDetails() {
    const { id } = useParams() as { id: string };
    const { book, isLoading, hasFailed } = useBook(id);

    return (
        <>
            {isLoading ? (
                "Loading..."
            ) : hasFailed || !book ? (
                "Failed"
            ) : (
                <BookForm book={book} />
            )}
        </>
    );
}
