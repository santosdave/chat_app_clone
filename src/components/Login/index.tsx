import React from "react";
import {Button} from "@material-ui/core";
import "./style.css";
import { useHistory } from 'react-router-dom';

export interface LoginProps {
	history: ReturnType<typeof useHistory>;
}
function Login({ history }: LoginProps) {
    const goToSignup = async () => {
		history.push('/signup');
	};
    const goToGroup=async()=> {
        history.push('/group');
    }
    return (
        <div className="login auth__wrapper">
            <div className="login_container  area__wrapper">
                <h1>Login</h1>
                <p className="header_text"> By Santos Dave</p>
                <form>
                    <input type="text" className="" placeholder="Email or Username" required/>
                    <input type="password" className="" placeholder="Password" required/>
                    <Button
                        onClick={goToGroup}
                        className="secondary"
                        color="secondary"
                        type="submit"
                        size="large"
                        variant="contained"
                    >
                        Proceed
                    </Button>
                    <p>Don't have an account yet?<b className="signup_link header_text" onClick={goToSignup}> Register</b></p>
                </form>
            </div>
        </div>
    )
}

export default Login
