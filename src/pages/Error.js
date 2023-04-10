import { NavLink } from 'react-router-dom'

// Error hantering för om en länk inte finns
export default function NotFound() {
    return (
        <div>
            <h2>Page not found!</h2>
            <p>
                The page you requested does not exist or has been moved.
            </p>
            <p>
                Go to the <NavLink to="/">Homepage</NavLink>.
            </p>
        </div>
    )
}
