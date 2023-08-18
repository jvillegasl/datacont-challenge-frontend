import { IBook } from "@/interfaces";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

type BooksTableProps = {
    books: IBook[];
};

export function BooksTable({ books }: BooksTableProps) {
    return (
        <Table className="table-dark table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th className="text-center">Title</th>
                    <th className="text-center">Author</th>
                    <th className="text-center">Actions</th>
                </tr>
            </thead>

            <tbody>
                {books.map((book, i) => {
                    return (
                        <tr key={i}>
                            <td>{book.id}</td>
                            <td className="text-center">{book.title}</td>
                            <td className="text-center">{book.author}</td>
                            <td className="text-center">
                                <Link to={`details/${book.id}`}>
                                    <Button variant="primary">View</Button>
                                </Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}
