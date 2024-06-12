import styled from "styled-components";

const Center = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
  margin-bottom: 40.35px;
`;

export default function Logo() {
  return (
    <Center>
      <img src="/Logo.png" alt="woovi" />
    </Center>
  )
}
