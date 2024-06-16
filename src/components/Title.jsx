import styled from "styled-components";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  font-family: "Nunito", sans-serif;
  font-size: 1.5rem;
  line-height: 32.74px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 32px;
  color: #4D4D4D;
  max-width: 429px;
  margin: 0 auto;
`;


export default function Title({text, user}) {
  const mockUser = {
    user: 'João',
    payAmount: 30500,
  }
  return (
    <Paragraph> {mockUser.user}, {text}</Paragraph>
  )
}
