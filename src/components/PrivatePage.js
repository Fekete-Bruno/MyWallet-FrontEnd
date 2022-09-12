import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import Unauthorized from "./Unauthorized";

export default function PrivatePage({ children }) {

    const {auth} = useContext(UserContext);
    
    function renderError() {
      localStorage.clear("mywallet");
      return(<Unauthorized/>);
    }

    if (!auth) {
      return(renderError());
    }
    
    return (
      <>
        {children}
      </>
    );
}