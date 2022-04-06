import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const text = {
  part1: "I'm a Full Stack web developer based in Brasília, Brazil.",
  part2: "Ready to hear your ideas and put them in practice!"
}

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        {text.part1} <br />
        {text.part2}
      </SectionText>
      <Button onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vTBPrvbWUV85bVx6CgPp4Pc_WGz9HZEeoFoSarxTrbfVRKov-gBFQ7-WxgC5FfPOQljJNde-qjxUdkG/pub', '_blank')}>Read my CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;