import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../../services/api';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';
import { ProductList } from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }))

    this.setState({ products: data })

    console.log(data);
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        { products.map(product => (
           <li className="card" key={product.id}>
           <div className="sneaker">
             <div className="circle"></div>
             <img src={product.image} alt={product.title} />
           </div>
           <div className="info">
             <strong>Adidas ZX</strong>
             <h3>{product.title}</h3>
           </div>
           <div className="price">
              <span>{product.priceFormatted}</span>
            </div>
           <button type='button' onClick={() => this.handleAddProduct(product.id)}>
             <span>COMPRAR</span>
           </button>
         </li>
        ))}
       
  
      </ProductList>
    );
  }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators(CartActions, dispatch);


export default connect(null, mapDispatchToProps)(Home);