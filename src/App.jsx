import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./Pages/AllRoutes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
const App = () => {

  return (
    <main className="overflow-hidden">
      <Router>
        <Navbar />
        <AllRoutes />
        <Footer />
      </Router>
    </main>
  )
}

export default App
