// Dependencies
import { 
    BrowserRouter, 
    Routes, 
    Route 
} from "react-router-dom";

// UI Components
import { MainMenu } from "../MainMenu";

// Screens
import { 
    HomeScreen,
    ContactScreen,
    PortfolioScreen
} from "../../screens";

const Router = () => (
    <BrowserRouter>
        <MainMenu />
        <Routes>
            <Route path="/" Component={HomeScreen} />
            <Route path="/contact" Component={ContactScreen} />
            <Route path="/portfolio" Component={PortfolioScreen} />
        </Routes>
    </BrowserRouter>
)

export const MainRouter = () => <Router />