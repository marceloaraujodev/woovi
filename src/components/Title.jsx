import styled from "styled-components";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  /* margin-left: 70px; */
  font-family: "Nunito", sans-serif;
  font-size: 1.5rem;
  line-height: 32.74px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 32px;
`;


export default function Title() {
  const mockUser = {
    user: 'João',
    payAmount: 30500,
  }
  return (
    <Paragraph> {mockUser.user}, como você quer pagar?</Paragraph>
  )
}
