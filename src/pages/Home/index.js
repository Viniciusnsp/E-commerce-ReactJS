import React from 'react';

import { ProductList } from './styles';
import shoes1 from '../../assets/images/tenis/adidas.png';

function Home() {
  return (
    <ProductList>
      <li className="card">
        <div className="sneaker">
          <div className="circle"></div>
          <img src={shoes1} alt="Tênis Adidas" />
        </div>
        <div className="info">
          <strong>Adidas ZX</strong>
          <h3>Future-ready trainers wrapped boost for exception comfort.</h3>
          <span>R$ 129,90</span>
        </div>
        <button type='button'>
          <span>COMPRAR</span>
        </button>
      </li>

      <li>
        <div className="sneaker">
          <div className="circle"></div>
          <img src={shoes1} alt="Adidas ZX" />
        </div>
        <div className="info">
          <strong>Adidas ZX</strong>
          <h3>Future-ready trainers wrapped boost for exception comfort.</h3>
          <span>R$ 129,90</span>
        </div>
        <button type='button'>
          <span>COMPRAR</span>
        </button>
      </li>

      <li>
        <div className="sneaker">
          <div className="circle"></div>
          <img src={shoes1} alt="Adidas ZX" />
        </div>
        <div className="info">
          <strong>Adidas ZX</strong>
          <h3>Future-ready trainers wrapped boost for exception comfort.</h3>
          <span>R$ 129,90</span>
        </div>
        <button type='button'>
          <span>COMPRAR</span>
        </button>
      </li>

      <li>
        <div className="sneaker">
          <div className="circle"></div>
          <img src={shoes1} alt="Adidas ZX" />
        </div>
        <div className="info">
          <strong>Adidas ZX</strong>
          <h3>Future-ready trainers wrapped boost for exception comfort.</h3>
          <span>R$ 129,90</span>
        </div>
        <button type='button'>
          <span>COMPRAR</span>
        </button>
      </li>

      <li>
        <div className="sneaker">
          <div className="circle"></div>
          <img src={shoes1} alt="Adidas ZX" />
        </div>
        <div className="info">
          <strong>Adidas ZX</strong>
          <h3>Future-ready trainers wrapped boost for exception comfort.</h3>
          <span>R$ 129,90</span>
        </div>
        <button type='button'>
          <span>COMPRAR</span>
        </button>
      </li>
      
      <li>
        <div className="sneaker">
          <div className="circle"></div>
          <img src={shoes1} alt="Adidas ZX" />
        </div>
        <div className="info">
          <strong>Adidas ZX</strong>
          <h3>Future-ready trainers wrapped boost for exception comfort.</h3>
          <span>R$ 129,90</span>
        </div>
        <button type='button'>
          <span>COMPRAR</span>
        </button>
      </li>

      
    </ProductList>
  );
}

export default Home;