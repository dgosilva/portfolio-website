import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { SectionTitle } from "../../styles/GlobalComponents";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <SectionTitle>Feel free to contact me</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle><AiOutlineWhatsApp /> Whatsapp</LinkTitle>
          <LinkItem href="https://wa.me/5561981200999" target="_blank">+55 61 98120 0999</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle><MdAlternateEmail /> Email</LinkTitle>
          <LinkItem href="mailto:davidgosilva@gmail.com">
            davidgosilva@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Let's work together!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/dgosilva" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/davidgosilva/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/dgosilva/" target="_blank">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
