import { useBook } from "@/hooks";
import { useParams } from "react-router-dom";

export function BookDetails() {
    const { id } = useParams() as { id: string };
    const { book, isLoading, hasFailed } = useBook(id);

    return (
        <>
            {isLoading
                ? "Loading..."
                : hasFailed
                ? "Failed"
                : JSON.stringify(book)}
        </>
    );
}
