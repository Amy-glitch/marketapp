import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import ProfileFlowNav from './ProfileFlowNav';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';


const LoginScreen = () => {
    const [screen2, setScreen2] = useState(false)
    let AuthCtx = useContext(AuthContext)
    const AuthFlow = () => {
        return (screen2 ? <SignUp setScreen2={setScreen2} AuthCtx={AuthCtx} /> : <SignIn setScreen2={setScreen2} AuthCtx={AuthCtx} />)
    }
    return (AuthCtx.session ? <ProfileFlowNav /> : <AuthFlow />)
}
export default LoginScreen;