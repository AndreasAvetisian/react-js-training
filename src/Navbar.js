import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link 
                to="/"
                className='myBlogTitle'
            >My blogs
            </Link>
            <div className="links">
                <Link 
                    to="/"
                >Home
                </Link>
                <Link 
                    to="/create" 
                    className="newBlogButton"
                >New blog
                </Link>
            </div>
        </nav>
     );
}
 
export default Navbar;