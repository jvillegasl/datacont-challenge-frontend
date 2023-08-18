import { IBook } from "@/interfaces";
import { Link } from "react-router-dom";

type BooksTableProps = {
    books: IBook[];
};

export function BooksTable({ books }: BooksTableProps) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {books.map((book, i) => {
                    return (
                        <tr key={i}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>
                                <Link to={`details/${book.id}`}>View</Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
