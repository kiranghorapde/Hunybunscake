import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppIcon from "./WhatsAppIcon";

function App() {
  return (
    
    <>
      <div>
  
        <Header />
        <WhatsAppIcon/>
        <Outlet />
        <Footer />
      
      </div>
    </>
    
  );
}

export default App;
