import styled from 'styled-components';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #191920;
      color: #fff;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      padding: 10px;
      text-transform: uppercase;
      transition: background .2s;
      
      &:hover {
        background: ${darken(0.03, '#191920')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    width: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 10px;
    font-size: 14px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;


export const RemoveIcon = styled(MdRemoveCircleOutline)`
  width: 20px;
  height: 20px;
  color: #191920;
`;

export const AddIcon = styled(MdAddCircleOutline)`
  width: 20px;
  height: 20px;
  color: #191920;
`;

export const DeleteIcon = styled(MdDelete)`
  width: 20px;
  height: 20px;
  color: #191920;
`;

