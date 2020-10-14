import React, { Component } from 'react'
import ProductApi from '../ApiServices/ProductApi';

export const DataContext = React.createContext();

export class Data extends Component {

    state = {
        // shops: [
        //     {
        //     "shop_id":"001",
        //     "shop_name":"IbaseShop...",
        //     "address": "jaffna",
        //     "src": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        //     "phone_number": "077000000",
        //     "description": "my shop..............."
        //     } 
        // ],
        // products: [
            
        //             {
        //                 "_id": "1",
        //                 "title": "I phone 1",
        //                 "src": "https://images.unsplash.com/photo-1555375771-14b2a63968a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",
        //                 "description": "phone phone phone phone phone phone ",
        //                 "price": 102000,
        //                 "count": 1,
        //                 "brand":"Apple",
        //                 "model": "S10",
        //                 "warandy":"5"
        //             },
        //             {
        //                 "_id": "2",
        //                 "title": "ear phone",
        //                 "src": "https://image.shutterstock.com/image-photo/new-white-headphones-on-dark-600w-1709709055.jpg",
        //                 "description": "ear phone ear phone ear phone ear phone ",
        //                 "price": 1500,
        //                 "count": 1,
        //                 "brand":"BB",
        //                 "model": "S10",
        //                 "warandy":"5"
        //             },
        //             {
        //                 "_id": "3",
        //                 "title": "I phone 1",
        //                 "src": "https://images.unsplash.com/photo-1555375771-14b2a63968a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",
        //                 "description": "phone phone phone phone phone phone ",
        //                 "price": 200060,
        //                 "count": 1,
        //                 "brand":"I phone",
        //                 "model": "S10",
        //                 "warandy":"5"
        //             },
        //             {
        //                 "_id": "4",
        //                 "title": "ear phone",
        //                 "src": "https://image.shutterstock.com/image-photo/new-white-headphones-on-dark-600w-1709709055.jpg",
        //                 "description": "ear phone ear phone ear phone ear phone",
        //                 "price": 1000,
        //                 "count": 1,
        //                 "brand":"I phone",
        //                 "model": "S10",
        //                 "warandy":"5"
        //             },
        //             {
        //                 "_id": "5",
        //                 "title": "I phone 1",
        //                 "src": "https://images.unsplash.com/photo-1555375771-14b2a63968a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",
        //                 "description": "phone phone phone phone phone phone ",
        //                 "price": 300500,
        //                 "count": 1,
        //                 "brand":"I phone",
        //                 "model": "S10",
        //                 "warandy":"5"
        //             },
        //             {
        //                 "_id": "6",
        //                 "title": "ear phone",
        //                 "src": "https://image.shutterstock.com/image-photo/new-white-headphones-on-dark-600w-1709709055.jpg",
        //                 "description": "ear phone ear phone ear phone ear phone",
        //                 "price": 3500,
        //                 "count": 1,
        //                 "brand":"BBBB",
        //                 "model": "S10",
        //                 "warandy":"5"
        //             },
        //             {
        //                 "_id": "7",
        //                 "title": "ear phone",
        //                 "src": "https://image.shutterstock.com/image-photo/new-white-headphones-on-dark-600w-1709709055.jpg",
        //                 "description": "ear phone ear phone ear phone ear phone",
        //                 "price": 3500,
        //                 "count": 1,
        //                 "brand":"BBBB",
        //                 "model": "S10",
        //                 "warandy":"5"
        //             },
        //             {
        //                 "_id": "5",
        //                 "title": "I phone 1",
        //                 "src": "https://images.unsplash.com/photo-1555375771-14b2a63968a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",
        //                 "description": "phone phone phone phone phone phone ",
        //                 "price": 300500,
        //                 "count": 1,
        //                 "brand":"I phone",
        //                 "model": "S10",
        //                 "warandy":"5"
        //             }
        // ],
        cart: [],
        total: 0,
        payment:[],
        products:[]
    };

    

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item.productId !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product.productId === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.productId === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.productId === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item1, index) =>{
                if(item1.productId === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }       
    };
    /////////////////////////
    remove2 = (id) =>{
        if(window.confirm("Do you want to delete this product?")){
            const {payment} = this.state;
            payment.forEach((item2, index) =>{
                if(item2.productId === id){
                    payment.splice(index, 1)
                }
            })
            this.setState({payment: payment});
            this.getTotal();
        }       
    };
    /////////////

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.sellPrice * item.count);
        },0)
        this.setState({total: res})
    };

    //////////////////////////////////////////////////////////////
    buythins =(id) =>{
        const {products, payment} = this.state;
        const data = products.filter(product =>{
            return product.productId === id
        })
        this.setState({payment: [...payment,...data]})
        this.getTotal();
    }
    ////////////////////////////////////////////////////////////
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))

        localStorage.setItem('dataBuythins', JSON.stringify(this.state.payment))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }

        const dataBuythins = JSON.parse(localStorage.getItem('dataBuythins'));
        if(dataBuythins !== null){
            this.setState({payment: dataBuythins});
        }

        this.productLoad();
    }

    productLoad = () => {
        ProductApi.getAllProduct()
        .then((res)=> {
          console.log(res);
          this.setState({products : res.data.data}) 
        })
    }

    render() {
        const {products, cart,total,shops,payment} = this.state;
        console.log(this.state.cart);
        const {addCart,reduction,increase,removeProduct,getTotal,buythins,remove2} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal,shops,buythins,payment,remove2}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}