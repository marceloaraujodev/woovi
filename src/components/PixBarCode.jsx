import styled from 'styled-components';
import { formattedValue } from '../utils/formatMoney';
import Button from './Button.jsx';
import {PrazoBox, EntradasContainer, CirclesContainer, Circle, Separator, MethodsBox, TotalBox, Divider, Cet, Funciona, Identificador} from '../../style/StylesComponents';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 30px;
  /* border: 1px solid gray; */
`;
const BarCodeContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border: 2px solid #03d69d;
    border-radius: 10px;
    padding: 8px;
  }
`;
const ButtonContainer = styled.div`
  width: 310px;
  margin: 0 auto;
`;

export default function PixBarCode() {
  const indexMockData = {
    id: 'stallments-2',
    // text: ` ${formattedValue.format(mockUser.payAmount)}`,
    cashback: '3%',
    // cashbackText: '300,00 de volta no seu pix na hora',
    stallments: 2,
    stallmentValue: formattedValue.format(1530000 / 100),
    total: 3060000,
    cet: '0.5%',
    identificator: '2c1b951f356c4680b13ba1c9fc889c47',
    expires: '15/12/2021',
  };

  function handleClickCopy(text) {
    try {
      navigator.clipboard.writeText(text).then(() => console.log(text));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <BarCodeContainer>
        <img src="/barcode.png" alt="" />
      </BarCodeContainer>

      <ButtonContainer>
        <Button onClick={() => handleClickCopy(indexMockData.identificator)}>
          Clique para copiar QR CODE <img src="/pagesicon.png" alt="" />
        </Button>
      </ButtonContainer>
      <PrazoBox>
        Prazo de pagamento:
        <span>
          {indexMockData.expires ? indexMockData.expires : '15/12/2021'} - 0817
        </span>
      </PrazoBox>

      <EntradasContainer>
        <div>
          <CirclesContainer>
            <Circle></Circle>
            <Separator />
            <Circle></Circle>
          </CirclesContainer>

          <MethodsBox>
            <div>1ª entrada no Pix</div>
            <div>2ª no cartão</div>
          </MethodsBox>
        </div>

        <TotalBox>
          <div>R$15.300,00</div>
          <div>R$15.300,00</div>
        </TotalBox>
      </EntradasContainer>
      <Divider />
      <Cet>
        CET: {indexMockData.cet ? indexMockData.cet : '0.5%'}{' '}
        <span>
          Total:{' '}
          {indexMockData.total
            ? formattedValue.format(indexMockData.total / 100)
            : 'RS 30.600,00'}
        </span>
      </Cet>
      <Divider />
      <Funciona>
        Como funciona?{' '}
        <span>
          <img src="/arrowup.png" alt="" />
        </span>
      </Funciona>
      <Divider />
      <Identificador>
        <span>Identificador:</span>
        <p>
          {indexMockData.identificator
            ? indexMockData.identificator
            : '2c1b951f356c4680b13ba1c9fc889c47'}
        </p>
      </Identificador>
    </Container>
  );
}
