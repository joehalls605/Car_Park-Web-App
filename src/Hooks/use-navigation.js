import { useContext } from "react";
import NavigationContext from "../Context/Navigation";

/*
A custom hook that provides access to the navigation context.
*/


function useNavigation(){
    return useContext(NavigationContext);
}

export default useNavigation;