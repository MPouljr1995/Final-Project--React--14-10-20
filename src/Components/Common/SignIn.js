import React, { Component } from 'react';

import {Paper,CardContent,Typography,Button} from '@material-ui/core';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import './Css/SignIn.css';
import CommonApi from '../ApiServices/CommonApi';

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            message: "",
            // loginSucces:false,
        };
    }

          onChangeUsername = (e) => {
            this.setState({
              username: e.target.value
            });
          }

          onChangePassword = (e) => {
            this.setState({
              password: e.target.value
            });
          }

        handleLogin = (event) => {
            event.preventDefault();

            // if (this.state.username && this.state.password) {
            //     console.log("username = " + this.state.username)
            //     console.log("password = " + this.state.password)

            //     localStorage.setItem('id', '1');
            //     localStorage.setItem('username', this.state.username);
            //     localStorage.setItem('email', 'RAJAN@GMAIL.COM');

            //     localStorage.setItem('first_name', 'Gnanachchandran');
            //     localStorage.setItem('last_name', 'Sasitharan');
            //     localStorage.setItem('address', 'Inuvil South Inuvil');
            //     localStorage.setItem('phone', '0774440240');

            //     localStorage.setItem('roles', 'ROLE_ADMIN');
            //     this.props.history.push("/profile");
            //     window.location.reload();

            //     this.setState({
            //         loginSucces:true,
            //     })
            // }

            let regis = {
                userName : this.state.username,
                password : this.state.password
            }
            CommonApi.login(regis)
            .then((res) =>{
                console.log(res.data);
                localStorage.setItem("userId",res.data.id);
                localStorage.setItem("userName",res.data.username);
                localStorage.setItem("roles",res.data.roles);

                this.setState({message:""})

                this.props.history.push("/");
                window.location.reload();
            })
            .catch((error) =>{
                this.setState({message:"INVALID USERNAME OR PASSWORD"})
            })
        }


    render() {

        return(
            <Paper id="signInCard">
                <CardContent>
                    <ValidatorForm onSubmit={this.handleLogin} >
                        <Typography variant='h3' id="signinTitle">
                            Login to IBaseShop
                        </Typography>
                        <br/>

                        <TextValidator
                            helperText="Please enter username"
                            variant="outlined"
                            label="Username"
                            onChange={this.onChangeUsername}
                            name="Username"
                            value={this.state.username}
                            Id="signInIP1"
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />

                        <br/><br/>

                        <TextValidator
                            helperText="Please enter password"
                            variant="outlined"
                            label="Password"
                            onChange={this.onChangePassword}
                            name="Password"
                            value={this.state.password}
                            id="signInIP2"
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />

                        <br/><br/>

                        <Button variant="contained" id="signinBtn" type="submit"  >
                            LOG IN
                        </Button>

                        <p>To Register click  <a href='/signup'>here</a></p>
                        <p>{this.state.message}</p>

                    </ValidatorForm>
                </CardContent>
            </Paper>

        )
    }
}
export default SignIn;
