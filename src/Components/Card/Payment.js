import React, { Component } from 'react'

import {DataContext} from '../Card/Data'

// import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

// import OtpInput from 'react-otp-input';
// import OTPInput, { ResendOTP } from "otp-input-react";
// import OTPInput, { ResendOTP } from "../lib";

import {Grid,Paper,Button} from '@material-ui/core';

import './CardCss/Payment.css'
// import './cssPages/Payment.css';

// import BuyingThings from './BuyingThings';


export default class Payment extends Component {

    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }

    state = {
        otp: '',
      };
    
      handleChange = otp => this.setState({ otp });


      
    render() {

        const {total} = this.context;

        return(
            
            <Paper id="paper1">
                <div className="payment_d">   
                    <div className="heading">
                        <h3>Oder Confirmation</h3>
                        <p>Oder Total :-</p>
                        <Button id="oder">Place Oder</Button>
                    </div>  

                    <div className="boder">
                        <div className="detail_1">
                            <Grid container>
                                <Grid item xs={6}>
                                    <Box className="box">
                                        <h3>Your Information</h3>
                                        <p>- - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                                        <h4>Name - </h4>
                                        <h5>Email - </h5>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box className="box">
                                        <h3>Shipping Address</h3>
                                        <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                                        <TextField
                                        id="outlined-multiline-static"
                                        label="address"
                                        multiline
                                        rows={4}
                                        defaultValue="address"
                                        variant="outlined"
                                        />   
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box className="box">
                                        <h3>Payment</h3>
                                        <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                                        <h5>Cash On Delivery</h5>
                                        {/* <input></input> */}
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box className="box">
                                        <h3>Phone Number</h3>
                                        <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                                        <div>
                                            <TextField
                                            id="outlined-password-input"
                                            label="Enter PhoneNumber"
                                            type="Number"
                                            autoComplete="current-password"
                                            variant="outlined"
                                            />
                                            <Button id="phoneNumber_B">Enter</Button>
                                        </div>
                                        <div>
                                            {/* <div>
                                                <OtpInput
                                                onChange={this.handleChange}
                                                numInputs={6}
                                                separator={<span>-</span>}
                                            /> */}

                                                {/* <OTPInput
                                                    value={this.state.otp}
                                                    onChange={this.setOTP}
                                                    onChange={this.handleChange}
                                                    autoFocus
                                                    OTPLength={4}
                                                    otpType="number"
                                                    disabled={false}
                                                    secure
                                                />
                                                <ResendOTP handelResendClick={() => console.log("Resend clicked")} /> */}

                                            
                                        </div>
                                    </Box>
                                </Grid>
                            </Grid>                            
                        </div>                       
                    </div>
                    
                    {/* <div><BuyingThings/></div> */}


                    <Box className="total_B">
                        <div className="total_d"> 
                            <div>
                                <h4>Subtotal -</h4>
                                <h4>Shipping fee -</h4>
                                <h1>TOTAL -</h1>
                            </div>
                            <div className="price_d">
                                <h4>RS. {total}.00</h4>
                                <h4>RS. 200.00</h4>
                                <h1>RS. {total}.00</h1>
                            </div>
                        </div>
                        <Button id="oder_2">PLACE ODER</Button>                        
                    </Box> 
                </div>
            </Paper>
        )
    }
}