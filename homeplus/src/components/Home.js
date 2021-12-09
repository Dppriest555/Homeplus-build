import '../styles/App.css'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className='get-started'>

            <h1>Welcome to <span>Home+</span></h1>
            <p>Keeping track of your daily tasks has never been easier.</p>
            <div className='image-home'></div>

            <Link to='/login' ><button className='btn'>Log in</button></Link>
            <Link to='/signup' ><button className='btn-green'>Sign up</button></Link><br/>
        </div>
    )
}

export default Home
