import { BooksTable } from "@/components";
import { useBooks } from "@/hooks";

export function Home() {
    const { books, isLoading, hasFailed } = useBooks();

    return (
        <>
            {isLoading ? (
                <span className="text-white fs-5">Loading...</span>
            ) : hasFailed ? (
                <span className="text-danger fs-5">Failed to fetch data</span>
            ) : (
                <BooksTable books={books} />
            )}
        </>
    );
}
