import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { FaLaptopCode } from "react-icons/fa";
import { useEffect } from "react";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <FaLaptopCode size="3rem" /> <Span size="2.5rem">David Silva</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects" passHref={true}>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" passHref={true}>
          <NavLink>Tech</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" passHref={true}>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact" passHref={true}>
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com/dgosilva" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/davidgosilva/"
        target="_blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/dgosilva/" target="_blank">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
