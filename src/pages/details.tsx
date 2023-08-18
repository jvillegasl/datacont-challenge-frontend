import { BookForm } from "@/components";
import { useBook } from "@/hooks";
import { useParams } from "react-router-dom";

export function BookDetails() {
    const { id } = useParams() as { id: string };
    const { book, isLoading, hasFailed } = useBook(id);

    return (
        <>
            {isLoading ? (
                <span className="text-white fs-5">Loading...</span>
            ) : hasFailed || !book ? (
                <span className="text-danger fs-5">Failed to fetch data</span>
            ) : (
                <BookForm book={book} />
            )}
        </>
    );
}
