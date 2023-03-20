import { Button } from '@mui/material';
import styles from './main.module.scss';
import { ReactComponent as ExcelIcon } from '../../svgs/excel.svg';
import TranscriptRequestTable from './table/table';
import transcriptRequestData from '../../data/transcriptRequest.json';




const Main = () => {

  return (
    <main>
            <div className={styles.tableHeader}>
                <h2>Transcript Request</h2>
                <div className={styles.groupedButtons}>
                    <Button className={styles.outlinedButton} variant="outlined" startIcon={<ExcelIcon/>}>
                        Export
                    </Button>
                </div>
            </div>

            <TranscriptRequestTable
              body={transcriptRequestData}
            
            />









    </main>
  )
}

export default Main;