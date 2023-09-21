import useNavigation from "../Hooks/use-navigation";

const Route = ({path, children}) =>{
    const {currentPath} = useNavigation();


    if(path === currentPath){
        return children;
    }

    return null;
}

export default Route;