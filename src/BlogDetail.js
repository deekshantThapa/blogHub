import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetail() {
    const { id } = useParams();
    const { dataContent: blog, isLoading, error } = useFetch('https://dummyjson.com/posts/' + id);
    return (
        <section className="blog-detail-section">
            <div className="container-sm">
                <Link to='/' className="go-back-btn">Back</Link>
                <div className="blog-detail-content">
                    {isLoading && <p className="loading-blogs-msg">Fetching the blog...</p>}
                    {error && <p className="error-msg">{error}</p>}
                    {blog && (
                        <div className="blog-detail">
                            <h3 className="entry-title"><span>{id} - </span>{blog.title}</h3>
                            <p>{blog.body}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default BlogDetail;