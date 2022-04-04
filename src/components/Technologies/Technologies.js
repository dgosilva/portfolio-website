import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
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

const titleText = "I've worked with a range of technologies in the web development market.";

const Technologies = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      {titleText}
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle><DiReact size="3rem" /> Front-end</ListTitle>
          <ListParagraph>
            React <br />
            Angular <br />
            HTML/CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle><DiFirebase size="3rem" /> Back-end</ListTitle>
          <ListParagraph>
            Node.js <br />
            Java <br />
            Python <br />
            and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
