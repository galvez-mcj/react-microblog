import { Link } from "react-router-dom"

const BlogPreview = ({ blogs, title }) => {

    return (
        <div className="blog-preview">
            <h2>{ title }</h2>
            { blogs.map((blog) => (
                <div className="blog-list" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by: { blog.author }</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogPreview
