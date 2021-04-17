import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

    const buildNavBar = 
        console.log('path', window.location.pathname);
        if (window.location.pathname === '/'){
            return (
                <> 
                    <li>
                        <Link to="/">
                            <p class="highlighted-button">Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/matches">
                            <p class="unhighlighted-button">Matches</p>
                        </Link>

                    </li>
                    <li>
                        <Link to="/profile">
                            <p class="unhighlighted-button">Profile</p>
                        </Link>
                    </li>
                </>
            )
       } else if (window.location.pathname === '/matches'){
        return (
            <> 
                <li>
                    <Link to="/">
                        <p class="unhighlighted-button">Home</p>
                    </Link>
                </li>
                <li>
                    <Link to="/matches">
                        <p class="highlighted-button">Matches</p>
                    </Link>

                </li>
                <li>
                    <Link to="/profile">
                        <p class="unhighlighted-button">Profile</p>
                    </Link>
                </li>
            </>
        )
   } else if (window.location.pathname === '/profile'){
    return (
        <> 
            <li>
                <Link to="/">
                    <p class="unhighlighted-button">Home</p>
                </Link>
            </li>
            <li>
                <Link to="/matches">
                    <p class="unhighlighted-button">Matches</p>
                </Link>

            </li>
            <li>
                <Link to="/profile">
                    <p class="highlighted-button">Profile</p>
                </Link>
            </li>
        </>
    )
} else {
    
        return (
            <> 
                <li>
                    <Link to="/">
                        <p class="unhighlighted-button">Home</p>
                    </Link>
                </li>
                <li>
                    <Link to="/matches">
                        <p class="unhighlighted-button">Matches</p>
                    </Link>

                </li>
                <li>
                    <Link to="/profile">
                        <p class="unhighlighted-button">Profile</p>
                    </Link>
                </li>
            </>
        )
   
}

    return (

        <section id="nav-bar-section">
            <ul>
                {buildNavBar}
                
                
            </ul>
        </section>
        
    )
}
export default NavBar