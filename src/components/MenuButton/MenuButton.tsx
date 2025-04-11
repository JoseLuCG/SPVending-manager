import './MenuButton.css';
import menuIcon from './../../assets/icons/Menu-displayer.svg';

type MenuButtonProps = {
    isAbove: boolean;
};

function MenuButton({isAbove}: MenuButtonProps) {

    return(

            <button className={isAbove? 'hidden' : 'menuButton'}>
                <img src={menuIcon} alt="" height="60" width="60"/>
            </button>
    );
}

export default MenuButton;