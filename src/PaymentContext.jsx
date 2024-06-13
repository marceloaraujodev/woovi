import { createContext, useState } from "react";

const PaymentContext = createContext();

export const PaymentProvider = ({children}) => {
  const [payCondition, setPayCondition] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  function selectPaymentOption(id){
    setPayCondition(id)
    setIsSelected(!isSelected)
  }

  // just to simulate what you would receive from a database
const mockUser = {
  user: 'Joao',
  payAmount: 30500,
}

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