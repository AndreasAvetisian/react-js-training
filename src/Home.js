import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
            });
    }, []);

    return ( 
        <div className="home">
            { blogs && <BlogList 
                blogs={blogs} 
                title='All blogs:' 
            /> }
            {/* <BlogList 
                blogs={blogs.filter((blog) => blog.author === 'andreas')} 
                title="Andreas's blogs:"
                handleDelete={handleDelete}
            /> */}
        </div>
    );
}
 
export default Home;