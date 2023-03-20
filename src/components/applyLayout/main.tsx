import styles from './main.module.scss';
import {ReactComponent as Logo} from '../../svgs/ptilogo.svg';
import {ReactComponent as ArrowDown} from '../../svgs/arrow-down.svg';
import {ReactComponent as MenuIcon} from '../../svgs/hamburger-menu.svg';
import styled from '@emotion/styled';
import { Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const StyledButton = styled(Button)({
    color: 'black',
    backgroundColor: 'transparent'
})

const ApplyLayout: React.FC<LayoutProps> = ({children}) => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);
    const menuItems = ['About PTI', 'Admissions', 'Programmes', 'Students', 'Faculty & Staff', 'Procurement', 'Downloads'];
    return (
        <div className={styles.main}>
            <nav className={styles.nav}>
                <Logo/>
                <IconButton sx={{display: {xs: 'block', lg: 'none'}}}  onClick={handleOpenNavMenu}>
                    <MenuIcon/>
                </IconButton>
    
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    keepMounted
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                >
                    {menuItems?.map(menu => (
                        <MenuItem key={menu} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{menu}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
                <div className={styles.menu}>
                    {menuItems?.map(menu => (
                        <StyledButton endIcon={<ArrowDown/>}>{menu}</StyledButton>
                    ))}
                    <StyledButton>Alumni</StyledButton>
                </div>
            </nav>
            
            <section className={styles.content}>{children}</section>
        </div>
    )
}

export default ApplyLayout;