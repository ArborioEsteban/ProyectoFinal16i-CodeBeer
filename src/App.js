import { useEffect} from "react";
import Router from "./routing/Router";
import './index.css';



const App = () => {
  useEffect(() => {
    // localStorage.setItem("user", "Usuario");
    // localStorage.setItem("carrito", []);

  }, []);

  return (
    <>

        <Router />
  
    </>
  );
};

export default App;
