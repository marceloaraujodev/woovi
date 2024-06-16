import { createContext, useState } from "react";


const PaymentContext = createContext();

export const PaymentProvider = ({children}) => {
  const [payCondition, setPayCondition] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  function selectPaymentOption(id){
    if(payCondition === id && isSelected){
      setPayCondition(null);
      setIsSelected(false);
    }else{
      setPayCondition(id)
      setIsSelected(true)
    }
  }

  // just to simulate what you would receive from a database
const mockUser = {
  user: 'Joao',
  payAmount: 30500,
}

// const items = [
//   {
//     id: 'stallments-2',
//     text: ` ${formattedValue.format(mockUser.payAmount)}`,
//     cashback: '3%',
//     // cashbackText: '300,00 de volta no seu pix na hora',
//     stallments: 2,
//     stallmentValue: formattedValue.format(1530000/100),
//     total:3060000,
//     cet:'0.5%',
//     identificator: '2c1b951f356c4680b13ba1c9fc889c47',
//     expires: '15/12/2021'
//   },
//   {
//     id: 'stallments-3',
//     text: formattedValue.format(1019666/100),
//     cashback: '3%',
//     // cashbackText: '300,00 de volta no seu pix na hora',
//     stallments: 3,
//     stallmentValue: formattedValue.format(101960000/100),
//     total:3060000,
//     cet:'0.5%',
//     identificator: '2c1b951f356c4680b13ba1c9fc889c47',
//     expires: '15/12/2021'
//   },
//   {
//     id: 'stallments-4',
//     text: formattedValue.format(772500/100),
//     juros: '-3% de juros:',
//     jurosText: 'Melhor opção de parcelamento',
//     cashbackText: '300,00 de volta no seu pix na hora',
//     stallments: 4,
//     stallmentValue: formattedValue.format(7725000),
//     total:3060000,
//     cet:'0.5%',
//     identificator: '2c1b951f356c4680b13ba1c9fc889c47',
//     expires: '15/12/2021'
//   },
//   {
//     id: 'stallments-5',
//     text: formattedValue.format(630000/100),
//     cashback: '3%',
//     // cashbackText: '300,00 de volta no seu pix na hora',
//     stallments: 4,
//     stallmentValue: formattedValue.format(630000),
//     total:3060000,
//     cet:'0.5%',
//     identificator: '2c1b951f356c4680b13ba1c9fc889c47',
//     expires: '15/12/2021'
//   },
//   {
//     id: 'stallments-6',
//     text: formattedValue.format(528333/100),
//     cashback: '3%',
//     // cashbackText: '300,00 de volta no seu pix na hora',
//     stallments: 4,
//     stallmentValue: formattedValue.format(528333),
//     total:3060000,
//     cet:'0.5%',
//     identificator: '2c1b951f356c4680b13ba1c9fc889c47',
//     expires: '15/12/2021'
//   },
//   {
//     id: 'stallments-7',
//     text: formattedValue.format(454285/100),
//     cashback: '3%',
//     // cashbackText: '300,00 de volta no seu pix na hora',
//     stallments: 4,
//     stallmentValue: formattedValue.format(454285),
//     total:3060000,
//     cet:'0.5%',
//     identificator: '2c1b951f356c4680b13ba1c9fc889c47',
//     expires: '15/12/2021'
//   },
// ];

// total, cet, identificador, expires

  return (
    <PaymentContext.Provider value={{
      isSelected, 
      setIsSelected, 
      payCondition, 
      setPayCondition, 
      selectPaymentOption,
      mockUser
    }}>
    {children}
    </PaymentContext.Provider>
  )
}

export default PaymentContext;