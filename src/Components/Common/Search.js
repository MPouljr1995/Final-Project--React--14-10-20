import React,{Component} from 'react';
import {Typography,CardActionArea,CardMedia } from '@material-ui/core';
import {Card, CardContent, Grid, FormControl, InputLabel, OutlinedInput, Box,Select, Button,CardActions } from '@material-ui/core';
import Rating from 'material-ui-rating'

import './Css/Search.css';
import ProductApi from '../ApiServices/ProductApi';


class Search extends Component {
  constructor(props) {
    super(props)
    this.state={
      minPrice:'',
      maxPrice:'',
      warranty:'',
      products:[],
    };
  }


  componentDidMount() {
    const searchKey = this.props.match.params.id;
    console.log(searchKey);
    if(searchKey) {
      this.loadSearchProducts(searchKey)
    }
  }


  loadSearchProducts(searchKey) {
    ProductApi.getSearchProducts(searchKey)
    .then((res)=> {
      // console.log(res);
      this.setState({products:res.data.data});
      console.log(this.state.products);
    })
  }


  onChangeMinPrice = (e) =>{
    this.setState({
      minPrice:e.target.value,
    });
  }
  onChangeMaxPrice = (e) =>{
    this.setState({
      maxPrice:e.target.value,
    });
  }
  onChangeWarranty = (e) =>{
    this.setState({
      warranty:e.target.value,
    });
  }




  render(){

    const {products} =this.state;

    // const products=[
    //   {
    //     id:'phone1',
    //     title:'Apple iphone 11',
    //     imgName:'https://pbs.twimg.com/media/EhBF69tU8AA30rM?format=jpg&name=small',
    //     lastPrice:135000,
    //     sellPrice:120000,
    //     rating:4,
    //   },{
    //     id:'phone2',
    //     title:'sumsung galaxy j2',
    //     imgName:'https://pbs.twimg.com/media/EhCtnLdU0AACxPE?format=jpg&name=360x360',
    //     lastPrice:18500,
    //     sellPrice:15000,
    //     rating:2,
    //   },{
    //     id:'phone3',
    //     title:'One Plus black sheep killer',
    //     imgName:'https://pbs.twimg.com/media/Egwzx1bVgAkM2xc?format=jpg&name=small',
    //     lastPrice:13500,
    //     sellPrice:12000,
    //     rating:3,
    //   }
    // ];

    return (
        <div>
          <div className='searchMainDiv' >
            <Grid container spacing={5} >
              <Grid item xs={3}  >
                <Box  className='priceBox'>
                <Typography className='sortTitle'>Price (RS)</Typography>
                  <FormControl variant="outlined" className='minPriceInput'>
                    <InputLabel htmlFor="component-outlined">Min Price</InputLabel>
                    <OutlinedInput id="component-outlined" value={this.state.minPrice} onChange={this.onChangeMinPrice} label="Min Price" type='number' />
                  </FormControl>
                  <FormControl variant="outlined" className='maxPriceInput'>
                    <InputLabel htmlFor="component-outlined">Max Price</InputLabel>
                    <OutlinedInput id="component-outlined" value={this.state.maxPrice} onChange={this.onChangeMaxPrice} label="Max Price" type='number' />
                  </FormControl>
                </Box>
              </Grid>

              <Grid item xs={3} >
                <Box  className='sortBox'>
                <Typography className='sortTitle'>Sort</Typography>
                <FormControl variant="outlined" className='sortSelect'>
                  <InputLabel htmlFor="outlined-age-native-simple">Sort</InputLabel>
                  <Select
                    native
                    value={this.state.gender}
                    onChange={this.handleChangeGender}
                    label="Sort"
                    inputProps={{
                      name: 'age',
                      id: 'outlined-age-native-simple',
                    }}
                  >

                    <option value={'Best Match'}>Best Match</option>
                    <option value={'Price: Hight to low'}>Price: Hight to low</option>
                    <option value={'Price: Low to Height'}>Price: Low to height</option>
                  </Select>
                </FormControl>
                </Box>
              </Grid>

              <Grid item xs={3} >
                <Box  className='warrantyBox'>
                <Typography className='sortTitle'>warranty (Month)</Typography>
                  <FormControl variant="outlined" className='warrantyInput'>
                    <InputLabel htmlFor="component-outlined">Warranty</InputLabel>
                    <OutlinedInput id="component-outlined" value={this.state.warranty} onChange={this.onChangeWarranty} label="warranty" type='number' />
                  </FormControl>

                </Box>
              </Grid>

              <Grid item xs={3}  >
                <Box  className='applyBtnBox'>
                  <Button variant="contained" style={{backgroundColor:'#03a9f4',color:'white'}} className='applyBtn'>
                  <b>Apply</b>
                  </Button>
                  <br/>
                  <Button variant="contained" href="/" style={{backgroundColor:'#03a9f4',color:'white'}} className='applyBtn'>
                  <b>BACK</b>
                  </Button>
                </Box>
              </Grid>
            </Grid>

          </div>

          <div  className='searchResultDiv'>
            <Grid container >
              {
                  products.map(product =>(
                        <Grid item xs={6} sm={4} md={3} lg={2} style={{marginTop:'20px'}}  >

                                <Card className='productCard' key={product.productId}  elevation={3}>
                                  <CardActionArea href={`/product?id=${product.productId}`}>
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
                                  <Button variant="contained" style={{backgroundColor:'#03a9f4',color:'white',margin:'auto'}} >
                                  Add cart
                                  </Button>
                                  </CardActions>
                                </Card>

                        </Grid>
                  ))
              }


            </Grid>
          </div>

        </div>
    )
  }
}

export default Search;
