import { useEffect } from "react";
import Router from "./routing/Router";


const App = () => {
  useEffect(() => {
    // sessionStorage.setItem("isAdmin", false);
    // sessionStorage.setItem('isActive', false);
    
  }, [])
  return (
    <>
      <Router />
    </>
  );
};

export default App;
