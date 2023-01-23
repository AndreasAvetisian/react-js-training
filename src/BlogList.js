const BlogList = ({ blogs, title, handleDelete }) => {

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <div className="blog-preview-content">
                        <p>Written by: { blog.author }</p>
                        <button 
                            onClick={() => handleDelete(blog.id)}
                            className='deleteBlog'
                        >Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;