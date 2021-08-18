import React, {useState,useEffect} from 'react';
import {Button} from "@material-ui/core";
import { DebounceInput } from 'react-debounce-input';
import { useHistory } from 'react-router-dom';
import "./style.css";
export interface SignUpProps {
	history: ReturnType<typeof useHistory>;
}
function SignUp({ history }: SignUpProps) {
    const [email, setEmail]= useState("");
    const [username, setUsername]= useState("");
     
    const goToLogin= async ()=>{
        history.push('/login');
    }
    const checkAvailability= async(value:string, type:string)=>{
        if (type==="email") setEmail(value);
        else setUsername(value);
    }
    return (
        <div className="signup auth__wrapper">
            <div className="signup_container  area__wrapper">
                <h1>SignUp</h1>
                <p className="header_text"> By Santos Dave</p>
                <form>
                    <DebounceInput
                        debounceTimeout={300}
						onChange={(e) => checkAvailability(e.target.value, 'email')}
						value={email}
						type="text"
						placeholder="Email"
						required
                    />
                    <DebounceInput
						debounceTimeout={300}
						onChange={(e) => checkAvailability(e.target.value, 'username')}
						value={username}
						type="text"
						placeholder="Username"
						required
					/>
                    <input type="password" placeholder="Password" required/>
                    <div className="signup_name">
                        <input type="text" className="" placeholder="First Name" required/>
                        <input type="text" className="" placeholder="Last Name" required/>
                    </div>
                    <Button
                     onClick={goToLogin}
                     type="submit"
                     variant="contained"
                     className="secondary"
                     color="secondary"
                    >
                        Proceed
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
