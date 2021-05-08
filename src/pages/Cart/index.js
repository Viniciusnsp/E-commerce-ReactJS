import React from 'react';

import { Container, ProductTable, Total, RemoveIcon, AddIcon, DeleteIcon } from './styles';
import adidas from '../../assets/images/tenis/adidas.png';


function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={adidas} alt="Tênis Adidas" />
            </td>
            <td>
              <strong>Adidas ZX</strong>
              <span>R$ 129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <RemoveIcon />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <AddIcon />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 258,80</strong>
            </td>
            <td>
              <button type="button">
                <DeleteIcon />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>Total</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;