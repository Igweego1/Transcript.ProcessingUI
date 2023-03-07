import { Drawer } from '@mui/material'
import Sidebar from './sideBar/sidebar'
import styles from './main.module.scss';
import { useState } from 'react';
import Header from './header/header';

interface ComponentProps {
  children: React.ReactNode;
}

interface Props {
  window?: () => Window;
}

const Main: React.FC<ComponentProps & Props> = ( {children, window}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleSidebarToggle = () => {
      setMobileOpen(!mobileOpen);
  }

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <div>
      <Header handleSidebarToggle={handleSidebarToggle}/>
      <Drawer
       variant="temporary"
       open={mobileOpen}
       onClose={handleSidebarToggle}
       ModalProps={{
        keepMounted: true
       }}
       sx={{
        display: { xs: 'block', md: 'none' }
    }}
      >
        <Sidebar/>
      </Drawer>

      <Drawer
         container={container}
         variant="permanent"
          sx={{
              display: { xs: 'none', md: 'block' }
            }}
          open
      >

            <Sidebar/>
      </Drawer>
      
      <div className={styles.content}>{children}</div> 
    </div>
  )
}

export default Main;