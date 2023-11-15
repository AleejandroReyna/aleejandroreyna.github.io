// Dependencies
import { 
    BrowserRouter, 
    Routes, 
    Route 
} from "react-router-dom";

// Screens
import { 
    HomeScreen,
    ContactScreen 
} from "../../screens";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomeScreen} />
            <Route path="/contact" Component={ContactScreen} />
        </Routes>
    </BrowserRouter>
)

export const MainRouter = () => <Router />