import React from 'react';
import { useContext, useEffect, useState } from 'react';
import PaymentContext from '../PaymentContext';
import styled, { css } from 'styled-components';
import axios from 'axios';

const CardContainer = styled.div`
  max-width: 429px;
  min-height: 137px;
  /* border: 2px solid #E5E5E5; */
  margin: 0 auto;
  position: relative;
  margin-bottom: 34px;
`;
const PixTag = styled.div`
  border-radius: 20px;
  height: 27px;
  padding: 0 20px;
  background-color: #e5e5e5;
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
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
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
    transition: all 0.4s ease;
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ span {
    background-color: #43d8aa;
    border: 2px solid #43d8aa;
    opacity: 0.5;
  }

  /* When the checkbox is checked, add a blue background */
  input:checked ~ span {
    background-color: #03d69d;
    border: 2px solid #34d2a3;
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

const PixInnerContainer = styled.div`
  padding: 20px 21px;
  padding-bottom: 23px;
  box-sizing: border-box;
  border: 2px solid ${(props) => (props.$isSelected ? '#03D69D' : '#E5E5E5')};
  border-bottom-style: none;
  background-color: ${(props) => (props.$isSelected ? '#F4FBF9' : '#fff')};
  /* background-color: #F4FBF9; */

  &:first-child {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  /* Apply top border color to next sibling when selected */
  & + div {
    border-top-color: ${(props) => (props.$isSelected ? '#03D69D' : '')};
  }

  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-style: solid;
  }
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
  color: #4D4D4D;
  font-size: 24px;
  font-weight: 800;
  line-height: 33px;

  span {
    font-size: 24px;
    font-weight: 600;
    line-height: 32.74px;
  }
`;

const CheckMarkCircle = styled.span`
  border: 2px solid #e5e5e5;
`;
const TotalText = styled.p`
  margin: 0;
  margin-top: 1px;
  font-size: 16px;
  font-weight: 600;
  line-height: 21.82px;
  color: #AFAFAF;
  height: 27px;

  .span {
    font-weight: 800;
  }
`;
const BlueRectangleRow = styled.div`
  display: flex;
  background-image: url('/Rectangle-77.png');
  height: 33px;
  background-repeat: no-repeat;
  color: white;
  margin-top: 7px;
  p {
    height: 20px;
    font: 16px;
    line-height: 20px;
    font-weight: 600;
    margin-top: 7px;
    margin-bottom: 6px;
    margin-left: 10px;
  }
  p span {
    font-weight: 800;
  }
`;
const Footer = styled.div`
  color: #b2b2b2;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    display: flex;
    align-items: center;
  }
`;

export default function PixParcelado() {
  const [selectedItem, setSelectedItem] = useState(null);
  const { isSelected, payCondition, selectPaymentOption, mockUser } =
    useContext(PaymentContext);

  useEffect(() => {
    setSelectedItem(payCondition);
  }, [payCondition]);

  function handleSelection(id, index) {
    selectPaymentOption(id);
    setSelectedItem(index);
  }

  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })
  console.log(formattedValue.format(mockUser.payAmount))
  const amount = formattedValue.format(mockUser.payAmount)
  // .format(mockUser.payAmount);
  const items = [
    {
      id: 'stallments-2',
      text: ` ${formattedValue.format(mockUser.payAmount)}`,
      cashback: '3%',
      // cashbackText: '300,00 de volta no seu pix na hora',
      stallments: 2,
      stallmentValue: formattedValue.format(1530000/100)
    },
    {
      id: 'stallments-3',
      text: formattedValue.format(1019600/100),
      cashback: '3%',
      // cashbackText: '300,00 de volta no seu pix na hora',
      stallments: 3,
      stallmentValue: formattedValue.format(101960000/100)
    },
    {
      id: 'stallments-4',
      text: formattedValue.format(772500/100),
      juros: '-3% de juros:',
      jurosText: 'Melhor opção de parcelamento',
      cashbackText: '300,00 de volta no seu pix na hora',
      stallments: 4,
      stallmentValue: formattedValue.format(7725000)
    },
    {
      id: 'stallments-5',
      text: formattedValue.format(630000/100),
      cashback: '3%',
      // cashbackText: '300,00 de volta no seu pix na hora',
      stallments: 4,
      stallmentValue: formattedValue.format(630000)
    },
  ];



  return (
    <>
      <CardContainer>
        <PixTag>
          <PixTagText>Pix Parcelado</PixTagText>
        </PixTag>
        <Wrapper>
          {items.map((item, index) => (
            <React.Fragment key={item.id}>
              <PixInnerContainer
                key={index}
                $isSelected={selectedItem === item.id}
              >
                <PixPaymentAmount>
                  <PayStallments>
                    {index + 2 }x <span> {item.text}</span>
                  </PayStallments>
                  <LabelWrapper htmlFor={item.id}>
                    <input
                      onChange={(e) => {
                        handleSelection(e.target.id, index);
                      }}
                      checked={payCondition === item.id && isSelected}
                      type="checkbox"
                      id={item.id}
                      name={item.id}
                    />
                    <CheckMarkCircle />
                  </LabelWrapper>
                </PixPaymentAmount>
                <TotalText>
                  Total: RS 30.600,00
                </TotalText>
                {item.cashbackText ? (
                  <BlueRectangleRow>
                  <p>
                    <span>{item.juros}</span> {item.jurosText}
                  </p>
                </BlueRectangleRow>
                ) : ''}
              </PixInnerContainer>
            </React.Fragment>
          ))}
        </Wrapper>
      </CardContainer>

      <Footer>
        <img src="/checkBadgeFooter.png" alt="" /> &nbsp;
        <p>
          Pagamento 100% seguro via:&nbsp; <img src="/logofooter.png" alt="" />
        </p>
      </Footer>
    </>
  );
}
