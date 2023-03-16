import styles from './sidebar.module.scss'
import {ReactComponent as AppIcon} from '../../../svgs/app.svg';
import {ReactComponent as ProfileIcon} from '../../../svgs/user.svg';
import {ReactComponent as CommentIcon} from '../../../svgs/comment.svg';
import {ReactComponent as EditIcon} from '../../../svgs/edit.svg';
import {ReactComponent as LogoutIcon} from '../../../svgs/signout.svg';
import {ReactComponent as SettingIcon} from '../../../svgs/setting.svg';
import { Link} from 'react-router-dom'; 
import { Divider } from "@mui/material";

const Sidebar = () => {
  return (
    <nav className={styles.nav}>

      <div className={styles.logoWrapper}></div>
      <div className={styles.menuHeader}>Menu</div>

      <Link className={styles.navLink} to={'/'}><AppIcon/><span>Setup</span></Link>

      <Link className={styles.navLink} to={'/'}><EditIcon/><span>Transcript Requests</span></Link>

      <Link className={styles.navLink} to={'/transcript-treated'}><CommentIcon/><span>Treated Transcripts</span></ Link>

      <Link className={styles.navLink} to={'/'}><ProfileIcon/><span>Profile</span></ Link>

      <Divider/>

      <Link className={styles.navLink} to={'/'}><SettingIcon/><span>Configure</span></ Link>

      <Link className={styles.navLink} to={'/'}><LogoutIcon/><span>Logout</span></ Link>

    </nav>
  )
}

export default Sidebar