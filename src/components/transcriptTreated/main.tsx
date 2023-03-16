import { Button } from '@mui/material';
import styles from './main.module.scss';
import userData from '../../data/treated.json'
import {ReactComponent as ExportIcon} from '../../svgs/excel.svg';
import CustomModal from '../../custom/modal/modal';
import { useState } from 'react';
import RequestForm from './requestAccessForm/form'
import RequestTable from './table/table';



 const Main = () => {

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);


    const headings = ['S/N', 'MATRIC NO', 'NAME', 'DIRECTORATE']
    return (
        <main>
            <div className={styles.tableHeader}>
                <h4>Treated Transcript</h4>
                <div>
                    <Button className={styles.outlinedButton} variant='outlined' startIcon={<ExportIcon/>}>
                        Export
                    </Button>
                </div>
            </div>

            <RequestTable 
            headings={headings}
            body={userData}
            handleOpenModal={handleOpenModal}
            
            />

            <CustomModal
                title={'Requesting access to re-process this transcript?'}
                subTitle={'Please provide reason below.'}
                maxWidth='md'
                open={openModal}
                handleClose={handleCloseModal}
                content={<RequestForm  handleClose={handleCloseModal}/>}
            />
        </main>
    )
 }

 export default Main