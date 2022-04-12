import Head from "next/head";
import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const title = "David Silva";
const siteName = "David Silva's Portfolio";
const description = "A Full Stack developer's portfolio";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={'/images/htmltag.jpg'} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/images/htmltag.jpg" />
      </Head>
      <Section grid style={{paddingTop: '15rem'}}>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Section grid>
        <Technologies />
        <BgAnimation />
      </Section>
      <Timeline />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
