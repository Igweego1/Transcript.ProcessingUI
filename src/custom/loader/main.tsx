import { CircularProgress } from '@mui/material';
import styles from './main.module.scss'


const Main: React.FC = () => {
    return(
        <div className={styles.wrapper}>
            <CircularProgress color='success'/>
        </div>
    )
}

export default Main;