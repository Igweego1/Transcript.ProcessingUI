import { Field, FormikProvider, useFormik } from "formik";
import * as Yup from 'yup';
import DateInput from "../../custom/date/date";
import CustomInput from "../../custom/input/input";
import styles from './main.module.scss';

const Main = () => {
    const validationSchema = Yup.object().shape({
        matricNo: Yup.string().required('required')
    })
    const formik = useFormik({
        initialValues: {
            matricNo: ''
        },
        validationSchema: validationSchema,
        onSubmit: () => {

        }
    })
    return (
        <main>
            <FormikProvider value={formik}>
                <h1 className={styles.heading}>Transcript Application Form</h1>
                <p>Fill in your matriculation number to proceed</p>
                <form>
                    <Field
                        name='matricNo'
                        as={CustomInput}
                        type='text'
                        label='Matriculation number'
                        style={{width: '22.5rem'}}
                    />
                    <br/>
                    <h3>Personal Details</h3>
                    <hr/>
                    <section className={styles.personal}>
                        <Field
                            name='firstName'
                            as={CustomInput}
                            type='text'
                            label='First name'
                            disabled
                        />
                        <Field
                            name='middleName'
                            as={CustomInput}
                            type='text'
                            label='Middle name'
                            disabled
                        />
                        <Field
                            name='lastName'
                            as={CustomInput}
                            type='text'
                            label='Last name'
                            disabled
                        />
                        <Field
                            name='phoneNo'
                            as={CustomInput}
                            type='text'
                            label='Phone number'
                            disabled
                        />
                        <Field
                            name='email'
                            as={CustomInput}
                            type='text'
                            label='Email'
                            disabled
                        />
                    </section>
                    <h3>Programme Details</h3>
                    <hr/>
                    <section className={styles.programme}>
                        <Field
                            name='programme'
                            as={CustomInput}
                            type='text'
                            label='Programme'
                            disabled
                        />
                        <Field
                            name='dateOfGraduation'
                            as={DateInput}
                            label='Date of Graduation'
                            disabled
                        />
                    </section>
                </form>
            </FormikProvider>
        </main>
    )
}

export default Main;