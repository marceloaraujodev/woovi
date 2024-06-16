import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import styled from 'styled-components';
import Title from './Title.jsx';
import { formattedValue } from '../utils/formatMoney';
// import Button from './Button.jsx';
import {
  PrazoBox,
  EntradasContainer,
  CirclesContainer,
  Circle,
  Separator,
  MethodsBox,
  TotalBox,
  Divider,
  Cet,
  Funciona,
  Identificador,
  PageContainer
} from '../../style/StylesComponents';
// import axios from 'axios';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 28px;
  margin-top: 28px;
`;
const FormGroup = styled.div`
  position: relative;
  width: 100%;
  label {
    height: 19px;
    position: absolute;
    top: -10px;
    left: 20px;
    background-color: white;
  }

  input {
    border: 2px solid #e5e5e5;
    width: 100%;
    border-radius: 8px;
    height: 65px;
    margin: 0;
    outline: none;
    font-size: 18px;
    line-height: 24.55px;
    color: #4d4d4d;
    padding: 20px;
    box-sizing: border-box;
  }
  input::placeholder{
    color: #d6d6d6;
  }
  /* input:focus{
    background-color: white;
  } */
  & input[type='date'] {
    font-family: 'Nunito';
  }
  // makes chrome autofill background color white
  input:-webkit-autofill {
    box-shadow: 0 0 0 50px white inset !important;
  }

  select {
    height: 65px;
    width: 100%;
    border-radius: 8px;
    border: 2px solid #e5e5e5;
    outline: none;
    font-size: 18px;
    line-height: 24.55px;
    color: #4d4d4d;
  }
`;
const SideBySide = styled.div`
  display: flex;
  gap: 22px;
`;
const mockData = ['15.300,00', '19.700,00', '25.700,00'];

export default function PixContactForm() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [card, setCard] = useState('');
  const [expires, setExpires] = useState('');
  const [cvv, setCvv] = useState('');
  const [parcelas, setParcelas] = useState('option1');

  const navigate = useNavigate();

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

  function handleName(e) {
    setName(e.target.value);
  }
  function handleCpf(e) {
    setCpf(e.target.value);
  }
  function handleCard(e) {
    setCard(e.target.value);
  }
  function handleExpires(e) {
    setExpires(e.target.value);
  }
  function handleCvv(e) {
    setCvv(e.target.value);
  }
  function handleParcelas(e) {
    setParcelas(e.target.value);
  }
  function handleForm(e) {}

  // pay button submition
  async function handleBtnClick(e) {
    e.preventDefault();
    try {
      const paymentFormData = {
        name,
        cpf,
        cardNumber: card,
        expiration: expires,
        cvv,
        stallments: parcelas,
      };
  
      // //submits the form information to the backend
      // const res = await axios.post('http://localhost:4000/form', {paymentFormData});
  
      // check the log to see the obj that will be sent.
      console.log(paymentFormData);
  
      // after submition navigate away
      navigate('/')
      
    } catch (error) {
      console.error(error)
      alert('Sorry please try again!')
    }
  }

  return (
    <>
    <Layout>
      <Title text="pague o restante em 1x no cartão" />
      <PageContainer>
        <Form onSubmit={handleForm}>
          <FormGroup>
            <label htmlFor="nome">Nome completo</label>
            <input
              onChange={handleName}
              type="text"
              name="nome"
              value={name}
              id='nome'
              placeholder="Nome"
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="cpf">CPF</label>
            <input
              onChange={handleCpf}
              type="number"
              name="cpf"
              value={cpf}
              id='cpf'
              placeholder="xxx.xxx.xxx-xx"
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="cartao">Número do cartão</label>
            <input
              onChange={handleCard}
              type="number"
              name="cartao"
              id='cartao'
              value={card}
              placeholder={'xxx.xxx.xxx-xx'}
            />
          </FormGroup>

          <SideBySide>
            <FormGroup>
              <label htmlFor="expires">Vencimento</label>
              <input 
              onChange={handleExpires} 
              type="date" 
              id='expires'
              name='expires' value={expires} />
            </FormGroup>

            <FormGroup>
              <label htmlFor="cvv">CVV</label>
              <input
                onChange={handleCvv}
                type="number"
                value={cvv}
                name='cvv'
                id='cvv'
                placeholder="xxx"
              />
            </FormGroup>
          </SideBySide>

          <FormGroup>
            <select onChange={handleParcelas} name='parcelas'>
              {mockData.map((parcela, index) => {
                return (
                  <option key={parcela} value={`option${index + 1}`} name='parcela'>
                    {index + 1}x de R${parcela}
                  </option>
                );
              })}
            </select>
          </FormGroup>
        </Form>

        <div>
          {/* <Button onClick={handleBtnClick}>Pagar</Button> */}
        </div>
        <PrazoBox>
          Prazo de pagamento:
          <span>
            {indexMockData.expires ? indexMockData.expires : '15/12/2021'} -
            0817
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
      </PageContainer>
    </Layout>
    </>
  );
}
