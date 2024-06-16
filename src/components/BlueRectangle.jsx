import styled from "styled-components";

const BlueRectangle = styled.button`
  background-color: #133a6f;
  border-radius: 8px;
  height: 39px;
  width: 100%;
  color: #fff;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 24.55px;
  cursor: pointer;
  border: none;

  img {
    margin-left: 10px;
    height: 22px;
    width: 19px;
  }
`;

export default function Button({onClick, children}) {
  return (
    <BlueRectangle onClick={onClick}>{children}</BlueRectangle>
  )
}
