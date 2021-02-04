import React from 'react';
import { Button, Label, Input, Form, FormGroup } from 'reactstrap';
import './Register.css'
import './Login';
export default function Register(){
    return (
        <div className="details">
            <h1>Register</h1>
            <Form className="reg-form">
                <FormGroup>
                    <Label>Email</Label>
                    <Input required className="email" type="email" placeholder="email" />
                </FormGroup>

                <FormGroup>
                    <Label>Name</Label>
                    <Input required className="name" type="text" placeholder="name" />
                </FormGroup>

                <FormGroup>
                    <Label>Password</Label>
                    <Input required className="password" type="password" placeholder="password" />
                </FormGroup>

                <Button type="submit" className="btn-lg btn-dark btn-block">Register</Button>
            </Form>
            <div> Have an account? 
                <a href="./login"> Sign In</a>
            </div>
        </div>
    );
}