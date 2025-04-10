import './MenuButton.css';
import menuIcon from './../../assets/icons/Menu-displayer.svg';

type MenuButtonProps = {
    isVisible: boolean;
};

function MenuButton({isVisible}: MenuButtonProps) {

    return(

            <button className={isVisible? 'menuButton': 'hidden'}>
                <img src={menuIcon} alt="" height="60" width="60"/>
            </button>
    );
}

export default MenuButton;