import React from 'react'
// import auth from './firebase.config'
// import { RecaptchaVerifier } from 'firebase/auth'
import 'react-phone-number-input/style.css'
import PhoneAuth from './PhoneAuth'

class App extends React.Component {

  render() {

    return(
      <PhoneAuth/>
    )
  }
}
export default App
