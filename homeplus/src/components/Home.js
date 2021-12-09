import '../styles/App.css'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className='get-started'>
            <h1>Welcome to <span>Home+</span></h1>


            <p>Keeping track of your daily tasks has never been easier.</p>

            <Link className='btn' to='/login' >Log in</Link>

            <br/>

            <Link className='btn-green' to='/signup' >Sign up</Link>
        </div>
    )
}

export default Home
