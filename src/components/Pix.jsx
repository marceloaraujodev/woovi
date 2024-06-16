import { useContext } from 'react';
import PaymentContext from '../PaymentContext';
import styled from 'styled-components';
import {
  PixTag,
  PixTagText,
  CheckMarkCircle,
  LabelWrapper,
} from '../../style/StylesComponents';

const CardContainer = styled.div`
  border: 2px solid #e5e5e5;
  max-width: 429px;
  min-height: 137px;
  border-radius: 10px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 34px;
`;
const PixInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 23px;
  margin-right: 21px;
  margin-left: 21px;
`;
const PixPaymentAmount = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  color: #4d4d4d;
  height: 32.74px;
`;
const PayStallments = styled.p`
  margin: 0;

  font-size: 24px;
  font-weight: 800;
  line-height: 32.74px;

  span {
    font-size: 24px;
    font-weight: 600;
    line-height: 32.74px;
  }
`;
const DiscountText = styled.p`
  margin: 0;
  margin-top: 1px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #03d69d;
  height: 23px;

  .span {
    font-weight: 800;
  }
`;
const BlueRectangleRow = styled.div`
  background-image: url('/Rectangle-77.png');
  height: 33px;
  background-repeat: no-repeat;
  /* border: 2px solid red; */
  color: white;

  p {
    height: 20px;
    font-size: 16px;
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
  }
`;

export default function Pix() {
  const { isSelected, payCondition, selectPaymentOption, mockUser } =
    useContext(PaymentContext);

  function handleSelection(id) {
    selectPaymentOption(id);
  }

  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(mockUser.payAmount);

  return (
    <CardContainer
      style={{
        border:
          isSelected && payCondition === 'stallments-1'
            ? '2px solid #03D69D'
            : '2px solid #E5E5E5',
        backgroundColor:
          isSelected && payCondition === 'stallments-1' ? '#F4FBF9' : '#fff',
      }}
    >
      <PixTag>
        <PixTagText>Pix</PixTagText>
      </PixTag>
      <PixInnerContainer>
        <PixPaymentAmount>
          <PayStallments>
            1x <span>R$ {formattedValue}</span>
          </PayStallments>
          <LabelWrapper>
            <input
              onChange={(e) => {
                handleSelection(e.target.id);
              }}
              checked={payCondition === 'stallments-1' && isSelected}
              type="checkbox"
              id="stallments-1"
              name="stallments-1"
            />
            <CheckMarkCircle />
          </LabelWrapper>
        </PixPaymentAmount>
        <DiscountText>
          Ganhe <span>3%</span> de Cashback
        </DiscountText>
        <BlueRectangleRow>
          <p>
            🤑 <span>R$300,00</span> de volta no seu pix na hora
          </p>
        </BlueRectangleRow>
      </PixInnerContainer>
    </CardContainer>
  );
}
