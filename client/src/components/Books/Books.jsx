import { useParams } from "react-router-dom"

export default function Books() {
    const id  = useParams();
    console.log(id);
    return (
        <div>
            <h1>Book {id.id}</h1>
        </div>
    )
}