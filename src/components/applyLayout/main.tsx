import styles from './main.module.scss';
import {ReactComponent as Logo} from '../../svgs/ptilogo.svg';
import {ReactComponent as ArrowDown} from '../../svgs/arrow-down.svg';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useState } from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const StyledButton = styled(Button)({
    color: 'black',
    backgroundColor: 'transparent'
})

const ApplyLayout: React.FC<LayoutProps> = ({children}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={styles.main}>
            <nav className={styles.nav}>
                <Logo/>
                <div className={styles.menu}>
                    <StyledButton endIcon={<ArrowDown/>}>About PTI</StyledButton>
                    <StyledButton endIcon={<ArrowDown/>}>Admissions</StyledButton>
                    <StyledButton endIcon={<ArrowDown/>}>Programmes</StyledButton>
                    <StyledButton endIcon={<ArrowDown/>}>Students</StyledButton>
                    <StyledButton endIcon={<ArrowDown/>}>Faculty & Staff</StyledButton>
                    <StyledButton endIcon={<ArrowDown/>}>Procurement</StyledButton>
                    <StyledButton endIcon={<ArrowDown/>}>Downloads</StyledButton>
                    <StyledButton>Alumni</StyledButton>
                </div>
            </nav>
            <section className={styles.content}>{children}</section>
        </div>
    )
}

export default ApplyLayout;