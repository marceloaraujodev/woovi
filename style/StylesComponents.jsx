import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 30px;
  max-width: 600px;
`;
export const CardContainer = styled.div`
  max-width: 429px;
  min-height: 137px;
  border: 2px solid red;
  margin: 0 auto;
  position: relative;
  margin-bottom: 34px;
`;
export const PixTag = styled.div`
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
  color: #4D4D4D;
`;
export const PixTagText = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 800;
  font-size: 18px;
  line-height: 24px;
`;
export const LabelWrapper = styled.label`
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

  /* On mouse-over, add a color to checkmark box */
  /* &:hover input ~ span {
    background-color: #43d8aa;
    border: 2px solid #43d8aa;
    opacity: 0.5;
    } */
    
    /* When the checkbox is checked, add a color background */
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
export const CheckMarkCircle = styled.span`
  border: 2px solid #E5E5E5;
`;

// Barcode page

export const PrazoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 154px;
  height: 44px;
  color: #b2b2b2;
  font-size: 16px;
  font-weight: 600;
  line-height: 21.82px;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;

  span {
    font-weight: 800;
    color: #4d4d4d;
  }
`;
export const EntradasContainer = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  & > div {
    display: flex;
  }
`;
export const CirclesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Circle = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid #03d69d;
  border-radius: 50%;

  &:last-child {
    border: 2px solid #e5e5e5;
  }
`;
export const Separator = styled.div`
  border-left: 2px solid #e5e5e5;
  height: 24px;
`;
export const MethodsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 8px;
  font-size: 18px;
`;
export const TotalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 18px;
  line-height: 24.55px;
  font-weight: 800;
`;
export const Divider = styled.div`
  border-top: 2px solid #e5e5e5;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Cet = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 19.1px;

  span {
    font-size: 18px;
    line-height: 24.55px;
  }
`;
export const Funciona = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 800;
  line-height: 21.82px;
`;
export const Identificador = styled.div`
  width: 254px;
  height: 38px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 19.1px;
  text-align: center;
  span {
    color: #b2b2b2;
  }
  p {
    margin: 0;
    font-weight: 800;
  }
`;