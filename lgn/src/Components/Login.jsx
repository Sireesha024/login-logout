import React from 'react';
import { useState } from 'react';
import { Button, Label, Input, Form, FormGroup } from 'reactstrap';
import './Login.css';
import './Register';

export default function Login(){
    
    const initialstate = {
        email: "",
        password: ""
    };

    const [state,setState] = useState(initialstate);

    const onChangeValue = async(event) => {
        setState({
            ...state,
            [event.target.name]:event.target.value
        });
        console.log(state);
    };
    
    return (
        <div className="details">
            <h1>Login</h1>
            <Form className="login-form">
                <FormGroup>
                    <Label>Email</Label>
                    <Input required name="email" className="email" type="email" placeholder="email" value={state.email} onChange={onChangeValue} />
                </FormGroup>

                <FormGroup>
                    <Label>Password</Label>
                    <Input required name="password" className="password" type="password" placeholder="password" value={state.password} onChange={onChangeValue}/>
                </FormGroup>

                <Button type="submit" className="btn-lg btn-dark btn-block">Sign in</Button>
            </Form>
            <div> Don't have an account, create it! 
                <a href="./Register"> Sign up</a>
            </div>
        </div>
    );
}