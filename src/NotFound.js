import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
       <div className="not-found">
            <div className="not-found-content">
                <h2>Sorry :(</h2>
                <p>That page cannot be found...</p>
            </div>
            <Link to='/'>Back to the main page</Link>
       </div> 
     );
}
 
export default NotFound;