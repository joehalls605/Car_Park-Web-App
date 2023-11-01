import useNavigation from "../Hooks/use-navigation";

/*
A component used for routing.
Renders its children if the specified path matches the current path.
*/


const Route = ({path, children}) =>{
    const {currentPath} = useNavigation();


    if(path === currentPath){
        return children;
    }

    return null;
}

export default Route;