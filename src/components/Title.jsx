import styled from "styled-components";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  margin-left: 70px;
  font-family: "Nunito", sans-serif;
  font-size: 1.5rem;
  line-height: 32.74px;
  font-weight: 800;

  
`;

export default function Title({clientName}) {
  return (
    <Paragraph> {clientName}, como você quer pagar?</Paragraph>
  )
}
