import { Radio, RadioGroup, Stack, useToast } from '@chakra-ui/react'
import {useDispatch} from "react-redux"
import React, { useState } from 'react'
import styles from './login.module.css'
import './login.css'
import { signup } from '../../store/auth/auth.actions'
const SignupForm = () => {
    const [email,setEmail]=useState("");
    const [name,SetName]=useState("");
    const [password,setPassword]=useState("");
    const [secondName, setSecondName] = useState("");
    const dispatch=useDispatch();
    const toast = useToast();
    const handleFormEvent=(e)=>{
        e.preventDefault();
        let payload = {name,email, password}
        dispatch(signup(payload));
        toast({
          title: `Signup successfull !`,
          status: "success",
          position: "top",
          isClosable: true,
          color:"white"
        })
    }
  return (
    <form className={styles.form}>
      <label>EMAIL ADDRESS:</label>
      <input type="text" className={styles.input} value={email}  onChange={(e)=>setEmail(e.target.value)} />
      <label>FIRST NAME:</label>
      <input type="text" className={styles.input} value={name}  onChange={(e)=>SetName(e.target.value)} />
      <label>LAST NAME:</label>
      <input type="text" className={styles.input} value={secondName} onChange={(e)=>setSecondName(e.target.value)}/>
      <label>PASSWORD:</label>
      <input type="password" className={styles.input} value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <label>DATE OF BIRTH:</label>
      <input type="date" className={styles.inputDate} />
      <br></br>
      <label>MOSTLY INTERESTED IN</label>
      <div className={styles.radioBtn}>
        <RadioGroup defaultValue="2">
          <Stack spacing={100} direction="row">
            <Radio colorScheme="black" size="lg" borderColor="gray" value="1">
              Womenswear
            </Radio>
            <Radio colorScheme="black" size="lg" borderColor="gray" value="2">
              Menswear
            </Radio>
          </Stack>
        </RadioGroup>
      </div>
      <button className={styles.signInBtn} onClick={handleFormEvent}>JOIN ASOS</button>
    </form>
  );
};

export default SignupForm;
