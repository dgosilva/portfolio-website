import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { CgWebsite } from "react-icons/cg";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import { LeftSection } from "../Hero/HeroStyles";

const titleText = "I've worked with a range of technologies in the web development market.";

const Technologies = () => (
  <Section nopadding id="tech">
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        {titleText}
      </SectionText>
      <List row>
        <ListItem>
          <ListContainer>
            <ListTitle><CgWebsite size="2rem" /> Front-end</ListTitle>
            <ListParagraph>
              React <br />
              Angular <br />
              HTML/CSS
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle><DiFirebase size="2.3rem" /> Back-end</ListTitle>
            <ListParagraph>
              Node.js <br />
              Java <br />
              Python <br />
              and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle><DiReact size="2.3rem" /> Frameworks</ListTitle>
            <ListParagraph>
              Next.js <br />
              Django <br />
              Spring <br />
              Hibernate <br />
              Bootstrap <br />
              Material
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
