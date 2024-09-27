// FooterLinks.js
import React from 'react';
import styled from 'styled-components';

// Styled Components
const FooterContainer = styled.div`
  background-color: #f7f7f7;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
  margin-right: 20px;
  min-width: 150px;

  h4 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-size: 14px;
    margin-bottom: 5px;
  }

  li a {
    text-decoration: none;
    color: #333;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const OtherLinksContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const LanguageSelector = styled.div`
  margin-right: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 10px;
    font-size: 24px;
    color: #333;

    &:hover {
      color: #555;
    }
  }
`;

const FooterLinks = () => {
  return (
    <>
      {/* Footer Links */}
      <FooterContainer>
        <Column>
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Centre</a></li>
            <li><a href="#">AirCover</a></li>
            <li><a href="#">Anti-discrimination</a></li>
            <li><a href="#">Disability support</a></li>
            <li><a href="#">Cancellation options</a></li>
            <li><a href="#">Report neighbourhood concern</a></li>
          </ul>
        </Column>

        <Column>
          <h4>Hosting</h4>
          <ul>
            <li><a href="#">Airbnb your home</a></li>
            <li><a href="#">AirCover for Hosts</a></li>
            <li><a href="#">Hosting resources</a></li>
            <li><a href="#">Community forum</a></li>
            <li><a href="#">Hosting responsibly</a></li>
            <li><a href="#">Join a free Hosting class</a></li>
          </ul>
        </Column>

        <Column>
          <h4>Airbnb</h4>
          <ul>
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">New features</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Airbnb.org emergency stays</a></li>
          </ul>
        </Column>
      </FooterContainer>

      {/* Language and Social Links */}
      <OtherLinksContainer>
        <LanguageSelector>
          <span>English (SG)</span> • <span>$ SGD</span>
        </LanguageSelector>

        <SocialLinks>
          <a href="#">🌍</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </SocialLinks>
      </OtherLinksContainer>
    </>
  );
};

export default FooterLinks;
