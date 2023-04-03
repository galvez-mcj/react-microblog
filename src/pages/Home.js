import BlogPreview from "../components/BlogPreview";
import useFetch from "../hooks/useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            { error && 
                <div className="error-container">
                    <b>Error:</b> { error }
                    </div>
            }
            { isPending && <div>Data Loading...</div> }
            { blogs &&
                <BlogPreview 
                    blogs={blogs}
                    title="All Blogs"
                />
            }
        </div>
    )
}
 
export default Home