import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects & Experience</SectionTitle>
    <GridContainer>
      {projects.slice(0).reverse().map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title="true">{title}</HeaderThree>
              <Hr />
              <CardInfo>{description}</CardInfo>
              <div>
                <br />
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit} target="_blank">Visit</ExternalLinks>
                {/* <ExternalLinks href={source}>Source</ExternalLinks> */}
              </UtilityList>
            </TitleContent>
          </BlogCard>
        )
      )}
    </GridContainer>
    <br />
  </Section>
);

export default Projects;
