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
//     text: `R$ ${formattedValue}`,
//     cashback: '3%',
//     cashbackText: 'R$300,00 de volta no seu pix na hora',
//     stallments: 2
//   },
//   // {
//   //   id: 'stallments-3',
//   //   text: `R$ ${formattedValue}`,
//   //   cashback: '3%',
//   //   cashbackText: 'R$300,00 de volta no seu pix na hora',
//   //   stallments: 3
//   // },
//   // {
//   //   id: 'stallments-3',
//   //   text: `R$ ${formattedValue}`,
//   //   cashback: '3%',
//   //   cashbackText: 'R$300,00 de volta no seu pix na hora',
//   //   stallments: 3
//   // },
//   // {
//   //   id: 'stallments-4',
//   //   text: `R$ ${formattedValue}`,
//   //   cashback: '3%',
//   //   cashbackText: 'R$300,00 de volta no seu pix na hora',
//   //   stallments: 4,

//   // },
// ];

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