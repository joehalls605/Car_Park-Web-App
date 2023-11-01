import classNames from 'classnames';
import useNavigation from '../Hooks/use-navigation';


/*
Provides a component for creating navigation links.
Utilizes the useNavigation custom hook for navigation functionality.
*/


const Link = ({to, children, className}) => {

    const {navigate} = useNavigation();
    
    const classes = classNames('text-blue-500 mx-3', className); // className is for adding any additional classes.

    const handleClick = (event) => {
        // if(event.metaKey || event.ctrlKey){
        //     return;
        // }
       event.preventDefault();

       navigate(to);

    };

    return <a className={classes} onClick={handleClick}>{children}</a>
}

export default Link;