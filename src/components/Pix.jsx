import { useContext, useEffect, useState } from 'react';
import PaymentContext from '../PaymentContext';
import styled, { css } from 'styled-components';
import axios from 'axios';

const CardContainer = styled.div`
  border: 2px solid #E5E5E5;
  max-width: 429px;
  min-height: 137px;
  border-radius: 10px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 34px;
`;
const PixTag = styled.div`
  height: 27px;
  padding: 0 20px;
  background-color: #E5E5E5;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -13.5px;
  left: 21px;
`;
const PixTagText = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 800;
  font-size: 18px;
  line-height: 24px;
`;
const PixInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 23px;
  margin-right: 21px;
  margin-left: 21px;
  ${({index, length}) => {
    if(length === 1){
      return css`
        border-radius: 10px;
      `;
    }
    if(length === 2){
      if(index === 0){
        return css`
          border-bottom: none;
          border-radius: 10px 10px 0 0;
        `;
      }else{
        return css`
          border-radius: 0 0 10px 10px;
          border-top: none;
        `;
      }
    }
    return '';
  }}

`;
const PixPaymentAmount = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  height: 32.74px;
`;
const PayStallments = styled.p`
  margin: 0;

  font-size: 24px;
  font-weight: 800;
  line-height: 32.74px;
  
  span{
    font-size: 24px;
    font-weight: 600;
    line-height: 32.74px;

  }
`;
const LabelWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 10px;
  position: relative;
  cursor: pointer; /* Make the entire label clickable */

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  span {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 25px;
    width: 25px;
    background-color: #fff;
    border-radius: 50%;
    transition: all .4s ease;
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ span {
    background-color: #43d8aa;
    border: 2px solid #43d8aa;
    opacity: 0.5;
    }
    
    /* When the checkbox is checked, add a blue background */
    input:checked ~ span {
      background-color: #03D69D;
      border: 2px solid #34D2A3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  span:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  input:checked ~ span:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  span:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  } 
`;
const CheckMarkCircle = styled.span`
  border: 2px solid #E5E5E5;
`;
const DiscountText = styled.p`
  margin: 0;
  margin-top: 1px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #03D69D;
  height: 23px;

  .span{
    font-weight: 800;
  }
`;
const BlueRectangleRow = styled.div`
  background-image: url("/Rectangle-77.png");
  height: 33px;
  background-repeat: no-repeat;
  /* border: 2px solid red; */
  color: white;

  p{
    height: 20px;
    font: 16px;
    line-height: 20px;
    font-weight: 600;
    margin-top: 7px;
    margin-bottom: 6px;
    margin-left: 10px;
  }
  p span{
    font-weight: 800;
  }
`;



export default function Pix() {
  const {
    isSelected, 
    payCondition, 
    selectPaymentOption,
    mockUser
  } = useContext(PaymentContext)

  function handleSelection(id){
    selectPaymentOption(id)
  }

  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(mockUser.payAmount);

  return (
    <CardContainer style={{border: (isSelected && payCondition === 'stallments-1') ? '2px solid #03D69D' : '2px solid #E5E5E5'}}>
      <PixTag>
        <PixTagText>Pix</PixTagText>
      </PixTag>
      <PixInnerContainer>
        <PixPaymentAmount>
          <PayStallments>1x <span>R$ {formattedValue}</span>
          </PayStallments>
          <LabelWrapper >
            <input 
              onChange={(e) => {handleSelection(e.target.id)}}
              checked={payCondition === "stallments-1" && isSelected}
              type="checkbox" 
              id="stallments-1" 
              name="stallments-1" />
            <CheckMarkCircle />
          </LabelWrapper>
        </PixPaymentAmount>
        <DiscountText>Ganhe <span>3%</span> de Cashback</DiscountText>
        <BlueRectangleRow>
         <p>
         🤑 <span>R$300,00</span> de volta no seu pix na hora
         </p>
        </BlueRectangleRow>
      </PixInnerContainer>
    </CardContainer>
  )
}


