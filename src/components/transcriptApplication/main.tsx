import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import {ReactComponent as UploadIcon} from '../../svgs/upload1.svg';
import {ReactComponent as SuccessIcon} from '../../svgs/success.svg';
import { Field, FormikProvider, useFormik } from "formik";
import * as Yup from 'yup';
import DateInput from "../../custom/date/date";
import CustomInput from "../../custom/input/input";
import styles from './main.module.scss';
import { useState } from "react";
import CustomModal from "../../custom/modal/modal";

const Main = () => {
    const [file, setFile] = useState<File | null>(null);

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    
    const SuccessContent = ({handleClose}: {handleClose: () => void}) => (
        <div className={styles.successContainer}>
            <SuccessIcon/>
            <br/>
            <label className={styles.submitted}>Submitted</label>
            <p>
                Your transcript request has been successfully submitted for processing. 
                You can check your application status at a later date.
            </p>
            <br/>
            <button className={styles.closeModal} onClick={handleClose}>Great!</button>
        </div>
    )

    const validationSchema = Yup.object().shape({
        matricNo: Yup.string().required('required'),
        firstName: Yup.string().required('required'),
        middleName: Yup.string().required('required'),
        lastName: Yup.string().required('required'),
        phoneNo: Yup.string().required('required'),
        email: Yup.string().required('required'),
        programme: Yup.string().required('required'),
        dateOfGraduation: Yup.string().required('required'),
        appliedForTranscript: Yup.string().required('required'),
        office: Yup.string().required('required'),
        addressLine1: Yup.string().required('required'),
        addressLine2: Yup.string().required('required'),
        city: Yup.string().required('required'),
        postalCode: Yup.string().required('required'),
        country: Yup.string().required('required'),
        rrr: Yup.string().required('required'),
        file: Yup.string().required('required')
    })
    const formik = useFormik({
        initialValues: {
            matricNo: '',
            firstName: '',
            middleName: '',
            lastName: '',
            phoneNo: '',
            email: '',
            programme: '',
            dateOfGraduation: '',
            appliedForTranscript: '',
            office: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            postalCode: '',
            country: '',
            rrr: '',
            file: ''
        },
        //validationSchema: validationSchema,
        onSubmit: () => {
            console.log('fef')
            handleOpenModal()
        }
    })

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        setFile(e.target?.files?.[0]);
        formik.setFieldValue('file', e?.target?.files?.[0]);
    }

    return (
        <main>
            <FormikProvider value={formik}>
                <h1 className={styles.heading}>Transcript Application Form</h1>
                <p>Fill in your matriculation number to proceed</p>
                <form onSubmit={formik.handleSubmit}>
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
                            disabled={!formik.values.matricNo}
                        />
                        <Field
                            name='middleName'
                            as={CustomInput}
                            type='text'
                            label='Middle name'
                            disabled={!formik.values.matricNo}
                        />
                        <Field
                            name='lastName'
                            as={CustomInput}
                            type='text'
                            label='Last name'
                            disabled={!formik.values.matricNo}
                        />
                        <Field
                            name='phoneNo'
                            as={CustomInput}
                            type='text'
                            label='Phone number'
                            disabled={!formik.values.matricNo}
                        />
                        <Field
                            name='email'
                            as={CustomInput}
                            type='text'
                            label='Email'
                            disabled={!formik.values.matricNo}
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
                            disabled={!formik.values.matricNo}
                        />
                        <Field
                            name='dateOfGraduation'
                            as={DateInput}
                            label='Date of Graduation'
                            disabled={!formik.values.matricNo}
                        />
                    </section>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Have you applied for a transcript before?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    <h3>Transcript Destination Address</h3>
                    <hr/>
                    <Field
                        name='office'
                        as={CustomInput}
                        type='text'
                        maxWidth
                        placeholder='Name/Office'
                        disabled={!formik.values.matricNo}
                    />
                    <Field
                        name='addressLine1'
                        as={CustomInput}
                        type='text'
                        maxWidth
                        placeholder='Address Line 1'
                        disabled={!formik.values.matricNo}
                    />
                    <Field
                        name='addressLine2'
                        as={CustomInput}
                        type='text'
                        maxWidth
                        placeholder='Address Line 2 (Optional)'
                        disabled={!formik.values.matricNo}
                    />
                    <section className={styles.programme}>
                        <Field
                            name='city'
                            as={CustomInput}
                            type='text'
                            maxWidth
                            placeholder='City/Town'
                            disabled={!formik.values.matricNo}
                        />
                        <Field
                            name='postalCode'
                            as={CustomInput}
                            type='text'
                            maxWidth
                            placeholder='Postal Code'
                            disabled={!formik.values.matricNo}
                        />
                        <Field
                            name='country'
                            as={CustomInput}
                            type='text'
                            maxWidth
                            placeholder='Country'
                            disabled={!formik.values.matricNo}
                        />
                    </section>
                    <h3>Supporting Documents</h3>
                    <hr/>
                    <Field
                        name='rrr'
                        as={CustomInput}
                        type='text'
                        label='Remita RRR Number'
                        placeholder='12 digit number'
                        disabled={!formik.values.matricNo}
                    />
                    <label className={styles.container}>
                        <UploadIcon/>
                        <br/>
                        <input 
                            type='file' 
                            name='upload'
                            accept='image/*'
                            hidden
                            onChange={handleFileChange}
                        />
                        {file ? <div>{file?.name}</div> : <label className={styles.description}>Upload Receipt</label>}
                    </label>
                    <br/>
                    <button type="submit" className={styles.submit}>Submit</button>
                </form>
                <CustomModal 
                    open={openModal} 
                    handleClose={handleCloseModal} 
                    content={<SuccessContent handleClose={handleCloseModal} />}           
                />
            </FormikProvider>
        </main>
    )
}

export default Main;