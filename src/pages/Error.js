import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="error-page">
            <h2>Eror 404</h2>
            <p>That page does not exist.</p>
            <Link to="/">go back to homepage...</Link>
        </div>
    )
}
 
export default Error;