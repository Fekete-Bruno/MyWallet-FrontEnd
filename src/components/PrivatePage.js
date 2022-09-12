import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function PrivatePage({ children }) {

    const {auth} = useContext(UserContext);
    
    function renderError() {
        localStorage.clear("mywallet");
        return(<div>ERROR: NOT AUTHORIZED</div>
        );
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