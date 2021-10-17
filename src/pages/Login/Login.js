import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Facebook, Google } from 'react-bootstrap-icons';
import { useForm } from 'react-hook-form';
import { NavLink,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Login = () => {
    const {googleSignUp}=useAuth();
    const history=useHistory()
    const location=useLocation()
    const redirect_url=location.state?.from || "/home"
    const handleGoogleSignUp=()=>{
            googleSignUp()
            .then(() => {
                history.push(redirect_url);
            })
        }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (

        <Container style={{width:"50%"}}>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Form.Group className="mt-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })} />
                    {errors.email && <span>Please enter your email address</span>}
                </Form.Group>

                <Form.Group className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
                    {errors.password && <span>Password should be at least 6 character</span>}
                </Form.Group>

                <div className="mt-2">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
            <div>
                New user?
                <NavLink to="/sign_up">
                    Create new Account
                </NavLink>
            </div>
            <div>
                <h1>

                ----------or----------
                </h1>
            </div>
            <div className="mb-5">
                <Button onClick={handleGoogleSignUp} style={{fontSize:"24px"}} className="me-2"> <Google/> Sign in with google</Button>
                <Button style={{fontSize:"24px"}}> <Facebook/> Sign in with facebook</Button>
            </div>
        </Container>

    );
};

export default Login;