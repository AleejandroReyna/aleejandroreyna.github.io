// Dependencies
import { 
    BrowserRouter, 
    Routes, 
    Route 
} from "react-router-dom";

// Screens
import { HomeScreen } from "../../screens";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomeScreen} />
        </Routes>
    </BrowserRouter>
)

export const MainRouter = () => <Router />