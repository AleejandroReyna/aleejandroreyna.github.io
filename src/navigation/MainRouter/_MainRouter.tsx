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
    AboutScreen,
    ContactScreen,
    PortfolioScreen
} from "../../screens";

const Router = () => (
    <BrowserRouter>
        <MainMenu />
        <Routes>
            <Route path="/" Component={HomeScreen} />
            <Route path="/about" Component={AboutScreen} />
            <Route path="/contact" Component={ContactScreen} />
            <Route path="/portfolio" Component={PortfolioScreen} />
        </Routes>
    </BrowserRouter>
)

export const MainRouter = () => <Router />