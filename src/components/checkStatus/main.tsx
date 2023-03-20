import { Field, FormikProvider, useFormik } from "formik";
import * as Yup from 'yup';
import CustomInput from "../../custom/input/input";
import CustomStepper from "../../custom/stepper/stepper";
import styles from './main.module.scss';

const Main = () => {
    const validationSchema = Yup.object().shape({
        matricNo: Yup.string().required('required')
    })
    const formik = useFormik({
        initialValues: {
            matricNo: ''
        },
        onSubmit: () => {

        },
        validationSchema: validationSchema
    })
    const steps = ['SUBMITTED', 'PROCESSING', 'APPROVED', 'SENT']
    return (
        <main>
            <FormikProvider value={formik}>
                <form>
                    <h1 className={styles.heading}>Transcript Application Form</h1>
                    <p>Fill in your matriculation number to proceed</p>
                    <div className={styles.container}>
                        <Field
                            name='matricNo'
                            as={CustomInput}
                            type='text'
                            label='MATRICULATION NUMBER'
                        />
                        <button className={styles.submit}>Check Status</button>
                        <hr/>
                        <CustomStepper steps={steps}/>
                        <p className={styles.statusMessage}>Your Transcript is being processed.</p>
                    </div>
                </form>
            </FormikProvider>
        </main>
    )
}

export default Main;