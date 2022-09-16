import { useState } from "react";
/* import { Formik, Form,  Field, ErrorMessage} from 'formik';
import * as yup from 'yup'; */



const Form = ({title, handleFn}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    /* const validationsSchema = yup.object().shape({
        password: yup.string().typeError('должно быть строкой').required('Обязательно'),
        email: yup.string().email('введите верный email').required('Обязательно'),
      }) */
    
    return (
        <div>
{/* <Formik initialValues={{
        password: '',
        email: ''
      }}
        validateOnBlur
        onSubmit={(values) => {
             console.log(values);
             handleFn(values.email, values.password)
        }}
        validationSchema={validationsSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <div className={`form`}>


            <p>
              <label htmlFor={`email`}>email</label><br />
              <input
                className={'input'}
                type={`email`}
                name={`email`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </p>
            {touched.email && errors.email && <p className={'error'}>{errors.email}</p>}

            <p>
              <label htmlFor={`password`}>password</label><br />
              <input
                className={'input'}
                type={`password`}
                name={`password`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </p>
            {touched.password && errors.password && <p className={'error'}>{errors.password}</p>}

            
           
            <button disabled={!isValid && !dirty} onClick={handleSubmit} type={`submit`}>{title}</button>
          </div>
        )}
      </Formik> */}


           <input type="email" value={email} placeholder='email' onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" value={pass} placeholder='password' onChange={(e)=>{setPass(e.target.value)}} />
            
            <button onClick={()=>{handleFn(email, pass)}}>{title}</button>
        </div>
    )
}
export default Form;