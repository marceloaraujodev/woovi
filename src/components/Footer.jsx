import styled from 'styled-components';

const FooterStyle = styled.div`
  color: #b2b2b2;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    display: flex;
    align-items: center;
    margin-left: 5px;
  }
`;

export default function Footer({badgeImg, logoImg, text}) {
  return (
    <FooterStyle>
      <img src="/checkBadgeFooter.png" alt="" />
      <p>
      Pagamento 100% seguro via:&nbsp; <img src="/logofooter.png"   alt="" />
      </p>
    </FooterStyle>
  );
}
