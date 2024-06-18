import React from 'react';
import { useContext, useEffect, useState } from 'react';
import PaymentContext from '../PaymentContext';
import styled from 'styled-components';
import {
  PixTag,
  PixTagText,
  CheckMarkCircle,
  LabelWrapper,
} from '../../style/StylesComponents';
import Title from './Title';
import Pix from './Pix';

const CardContainer = styled.div`
  max-width: 429px;
  min-height: 137px;
  /* border: 2px solid #E5E5E5; */
  margin: 0 auto;
  position: relative;
  margin-bottom: 34px;
  margin-top: 32px;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
const PixInnerContainer = styled.div`
  padding: 20px 21px;
  padding-bottom: 23px;
  box-sizing: border-box;
  border: 2px solid ${(props) => (props.$isSelected ? '#03D69D' : '#E5E5E5')};
  border-bottom-style: none;/* we have to set this to none otherwise we'll get a double thickness border between both elements */
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
    border-bottom-style: solid; /* since this is the last element we show the borders */
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
  color: #4d4d4d;
  font-size: 24px;
  font-weight: 800;
  line-height: 33px;

  span {
    font-size: 24px;
    font-weight: 600;
    line-height: 32.74px;
  }
`;
const TotalText = styled.p`
  margin: 0;
  margin-top: 1px;
  font-size: 16px;
  font-weight: 600;
  line-height: 21.82px;
  color: #afafaf;
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
  @media screen and (max-width: 472px) {
    background-size: 298px 33px;
    p {
      font-size: 13.1px;
    }
    p span {
      font-weight: 600;
    }
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
  });

  // Mock data
  const items = [
    {
      id: 'stallments-2',
      text: ` ${formattedValue.format(mockUser.payAmount)}`,
      cashback: '3%',
      // cashbackText: '300,00 de volta no seu pix na hora',
      stallments: 2,
      stallmentValue: formattedValue.format(1530000 / 100),
      total: 3060000,
      cet: '0.5%',
      identificator: '2c1b951f356c4680b13ba1c9fc889c47',
      expires: '15/12/2021',
    },
    {
      id: 'stallments-3',
      text: formattedValue.format(1019666 / 100),
      cashback: '3%',
      // cashbackText: '300,00 de volta no seu pix na hora',
      stallments: 3,
      stallmentValue: formattedValue.format(101960000 / 100),
      total: 3060000,
      cet: '0.5%',
      identificator: '2c1b951f356c4680b13ba1c9fc889c47',
      expires: '15/12/2021',
    },
    {
      id: 'stallments-4',
      text: formattedValue.format(772500 / 100),
      juros: '-3% de juros:',
      jurosText: 'Melhor opção de parcelamento',
      cashbackText: '300,00 de volta no seu pix na hora',
      stallments: 4,
      stallmentValue: formattedValue.format(7725000),
      total: 3060000,
      cet: '0.5%',
      identificator: '2c1b951f356c4680b13ba1c9fc889c47',
      expires: '15/12/2021',
    },
    {
      id: 'stallments-5',
      text: formattedValue.format(630000 / 100),
      cashback: '3%',
      // cashbackText: '300,00 de volta no seu pix na hora',
      stallments: 4,
      stallmentValue: formattedValue.format(630000),
      total: 3060000,
      cet: '0.5%',
      identificator: '2c1b951f356c4680b13ba1c9fc889c47',
      expires: '15/12/2021',
    },
    {
      id: 'stallments-6',
      text: formattedValue.format(528333 / 100),
      cashback: '3%',
      // cashbackText: '300,00 de volta no seu pix na hora',
      stallments: 4,
      stallmentValue: formattedValue.format(528333),
      total: 3060000,
      cet: '0.5%',
      identificator: '2c1b951f356c4680b13ba1c9fc889c47',
      expires: '15/12/2021',
    },
    {
      id: 'stallments-7',
      text: formattedValue.format(454285 / 100),
      cashback: '3%',
      // cashbackText: '300,00 de volta no seu pix na hora',
      stallments: 4,
      stallmentValue: formattedValue.format(454285),
      total: 3060000,
      cet: '0.5%',
      identificator: '2c1b951f356c4680b13ba1c9fc889c47',
      expires: '15/12/2021',
    },
  ];

  return (
    <>
      <Title text="como você quer pagar?" />
      <Pix />
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
                    {index + 2}x <span> {item.text}</span>
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
                <TotalText>Total: RS 30.600,00</TotalText>
                {item.cashbackText ? (
                  <BlueRectangleRow>
                    <p>
                      <span>{item.juros}</span> {item.jurosText}
                    </p>
                  </BlueRectangleRow>
                ) : (
                  ''
                )}
              </PixInnerContainer>
            </React.Fragment>
          ))}
        </Wrapper>
      </CardContainer>

    </>
  );
}
