import { useState } from 'react'
import { PhoneContext } from './context';
import OtpPage from './OtpPage';
import PhonePage from './PhonePage';

const Integrater = () => {

  const [phoneNo, setphoneNo] = useState("")
  const [otpPage, setOtpPage] = useState(false);

  function handleClick() {
    if (!otpPage && phoneNo.length == 10 && !isNaN(phoneNo)) {
      setOtpPage(true);
      // console.log("Enterd phone no " + phoneNo);
    }
    else{
      alert("Enter a valid number")
    }
  }

  return (
    <>
      <PhoneContext.Provider value={phoneNo}>
        <center>
          {!otpPage ?
            <PhonePage phoneNo={phoneNo} setphoneNo={setphoneNo} handleClick={handleClick}/>
            :
            <OtpPage length={4}/>
          }
        </center>
      </PhoneContext.Provider>
    </>
  )
}

export default Integrater;
