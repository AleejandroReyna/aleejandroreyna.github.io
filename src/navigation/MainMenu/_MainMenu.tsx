// Dependencies
import { Link } from "react-router-dom"

// Exported Component
export const MainMenu = () => (
    <header>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </header>
)