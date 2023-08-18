import { IBook } from "@/interfaces";
import Form from "react-bootstrap/Form";

type BookFormProps = {
    book: IBook;
};

export function BookForm({ book }: BookFormProps) {
    return (
        <Form className="text-white">
            <Form.Group className="mb-4">
                <Form.Label>ID:</Form.Label>
                <Form.Control type="text" value={book.id} disabled />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" value={book.title} disabled />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Author:</Form.Label>
                <Form.Control type="text" value={book.author} disabled />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Price:</Form.Label>
                <Form.Control type="text" value={book.price} disabled />
            </Form.Group>

            <Form.Group>
                <Form.Label>Description:</Form.Label>
                <Form.Control as="textarea" value={book.description} disabled />
            </Form.Group>
        </Form>
    );
}
