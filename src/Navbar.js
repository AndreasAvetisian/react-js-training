const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>My blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" className="newBlogButton">New blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;