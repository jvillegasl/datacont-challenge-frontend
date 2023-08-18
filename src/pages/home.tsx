import { BooksTable } from "@/components";
import { useBooks } from "@/hooks";

export function Home() {
    const { books, isLoading, hasFailed } = useBooks();

    return (
        <>
            {isLoading ? (
                "Loading..."
            ) : hasFailed ? (
                "Failed"
            ) : (
                <BooksTable books={books} />
            )}
        </>
    );
}
