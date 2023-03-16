import { Button, DialogActions } from '@mui/material';
import {  Field, FormikProvider, FormikValues, useFormik } from 'formik';
import styles from './form.module.scss';
import * as Yup from 'yup';
import CustomTextArea from '../../../custom/textarea/textarea';

interface FormProps {
    handleClose: () => void;
}

const Form: React.FC<FormProps> = () => {


    const validationSchema = Yup.object().shape({
        comments: Yup.string().required('Message is required')
            .min(10, 'Message must be at least 10 characters')
            .max(500, 'Message cannot exceed 500 characters')
    });

    const formik = useFormik<FormikValues>({
        initialValues: {
            comments: ''
        },
        onSubmit: (values) => {
            
        },
        validationSchema: validationSchema
    })    

    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit} className={styles.wrapper}>
                <label className={styles.container}>
                    <Field name='comments' as={CustomTextArea} className={styles.textArea}/>
                </label>  
                <DialogActions className={styles.action}>
                    <div className={styles.actionButtons}>
                        <Button type='submit'  className={styles.request} >
                           REQUEST ACCESS
                        </Button>
                    </div>
                </DialogActions>   
            </form>
        </FormikProvider>
    )
}

export default Form;