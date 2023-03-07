import styles from './header.module.scss';
import { Avatar, IconButton } from "@mui/material";
import {ReactComponent as HamburgerIcon} from '../../../svgs/menu.svg';

interface HeaderProps {
    handleSidebarToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({handleSidebarToggle}) => {

  return (
    <div className={styles.header}>
        <IconButton
            aria-label="open sidebar"
            edge="start"
            onClick={handleSidebarToggle}
            sx={{ mr: 2, visibility: { xs: 'visible', md: 'hidden' } }}
        >
            <HamburgerIcon className={styles.menu}/>

        </IconButton>


    </div>
  )
}

export default Header;