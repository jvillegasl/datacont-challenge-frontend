import { IBook } from "@/interfaces";

type BookFormProps = {
    book: IBook;
};

export function BookForm({ book }: BookFormProps) {
    return (
        <form>
            <div>
                <label>ID:</label>
                <input type="text" value={book.id} disabled />
            </div>

            <div>
                <label>Title:</label>
                <input type="text" value={book.title} disabled />
            </div>

            <div>
                <label>Author:</label>
                <input type="text" value={book.author} disabled />
            </div>

            <div>
                <label>Price:</label>
                <input type="text" value={book.price} disabled />
            </div>

            <div>
                <label>Description:</label>
                <textarea value={book.id} disabled />
            </div>
        </form>
    );
}
