import { Link } from "react-router-dom";
import useFetch from "./useFetch";

function BlogList(){

    const {dataContent: blogs, isLoading, error} = useFetch('https://dummyjson.com/posts?limit=8');

    return(
        <section className="all-blogs">
            <div className="container">
                <div className="blog-list-wrap">
                    {isLoading && <p className="loading-blogs-msg">Fetching blogs...</p>}
                    {error && <p className="error-msg">{error}</p>}
                    {blogs && blogs.posts.map(blog => {
                        return(
                            <div className="blog" key={blog.id}>
                                <span className="blog-tags">
                                    <span>{blog.tags[0]}</span>
                                    <span>{blog.tags[1]}</span>
                                    <span>{blog.tags[2]}</span>
                                </span>
                                <h3 className="entry-title"><span>{blog.id} - </span>{blog.title}</h3>
                                <p>{blog.body}</p>
                                <Link to={`/blogs/${blog.id}`} className="read-more">Read More</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default BlogList;