import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Rating from 'material-ui-rating';
import {Typography,CardActionArea,CardMedia } from '@material-ui/core';
import {Card, CardContent, Grid, Box, Button,CardActions } from '@material-ui/core';

import {DataContext} from '../Card/Data'

import './Css/HomePageProduct.css';

import ProductApi from "../ApiServices/ProductApi";


class HomePageProductView extends Component {
    constructor(props){
        super(props);
        this.state = {
            products:[]
        }
    }

    ////////////////////////////////////////////////
    static contextType = DataContext;
    //////////////////////////////////////////////////////

    componentDidMount() {
        this.productLoad();
    }

    productLoad = () => {
        ProductApi.getAllProduct()
        .then((res)=> {
          console.log(res);
          this.setState({products : res.data.data}) 
        })
    }



    render(){
      const {addCart,buythins} = this.context;
      ///////////////////////////////////////////////////////////////////////////
        const {products} = this.state;
        return(
            // <div id="HomePageShow">
            //    {
            //         products.map(product =>(
            //            <div className="card" key={product.productId}>
            //                <a to={`/product/${product.productId}`}>
            //                    <img src={product.image_1} alt=""/>
            //                </a>
                           
            //                <div className="content">
            //                    <h3>
            //                        <a to={`/product/${product.productId}`}>{product.title}</a>
            //                    </h3>
            //                    <span>Rs.{product.lastPrice}</span>
            //                    <br/>
            //                    <br/>

            //                    <span>Rs.{product.sellPrice}</span>
            //                    <p>{product.description}</p>

            //                    <Rating name="read-only" value={product.rating} size="small" size="small" readOnly   />
            //                     <div>
                                  
            //                         <Button id="item_B" >Add to cart</Button>
            //                         <Button id="item_B"  href='/payment'>buy now</Button>

            //                     </div>
            //                </div>
            //            </div>
            //        ))
            //    }
            // </div> 

            <div  className='searchResultDiv'>
            <Grid container >
              {
                  products.map(product =>(
                        <Grid item xs={6} sm={4} md={3} lg={2} style={{marginTop:'20px'}}  >

                                <Card className='productCard' key={product.productId}  elevation={3}>
                                  <CardActionArea href={`products/${product.productId}`}>
                                    <Box className='showImgDiv'>
                                      <CardMedia
                                        className='showImg'
                                        component="img"
                                        image={product.image_1}
                                        title="Contemplative Reptile"
                                        class="img-responsive"
                                        id="showImg"

                                      />
                                    </Box>

                                    <CardContent>
                                      <Typography gutterBottom  className='productTitle'>
                                      {product.title}
                                      </Typography>
                                      <Typography className='offerPrice' variant="h6">
                                        {product.lastPrice}
                                      </Typography>
                                        <Typography className='sellPrice' variant="h6">
                                        {product.sellPrice}
                                        </Typography>

                                        <Typography className='offerPrice'>
                                            <Rating name="read-only" value={product.rating} readOnly style={{}} />
                                        </Typography>
                                    </CardContent>
                                  </CardActionArea>
                                  <CardActions >
                                  <Button variant="contained" id="btn" style={{backgroundColor:'#03a9f4',color:'white',margin:'auto'}} >
                                  Buy
                                  </Button>
                                  <Button  onClick={()=> addCart(product.productId)} variant="contained" style={{backgroundColor:'#03a9f4',color:'white',margin:'auto'}} >
                                  Add cart
                                  </Button>
                                  </CardActions>
                                </Card>

                        </Grid>
                  ))
              }


            </Grid>
          </div>
        )
    }

}
export default  HomePageProductView;