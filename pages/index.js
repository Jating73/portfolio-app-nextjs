// Modules
import { Fragment } from "react";
import Head from "next/head";
import Script from "next/script";

// Components
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Resume from "../components/Resume";
// import Testimonial from '../components/Testimonial';
import Contact from "../components/Contact";

// Functions
import {
  getEducationDetails,
  getProjectDetails,
  getSkillDetails,
  getVolunteerDetails,
  getWorkDetails,
} from "../dummy-data";

function Home(props) {
  const { educations, works, skills, projects, volunteers } = props;

  return (
    <Fragment>
      <Head>
        <title>Jatin Gambhir | Portfolio</title>
        <meta
          name="description"
          content="Find More about Jatin Gambhir Portfolio"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
        />
      </Head>
      <Navbar />
      <HeroSection />
      <About />
      <Resume
        educations={educations}
        works={works}
        skills={skills}
        projects={projects}
        volunteers={volunteers}
      />
      <Contact />
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
    </Fragment>
  );
}

export async function getStaticProps(content) {
  const educations = await getEducationDetails();
  const works = await getWorkDetails();
  const skills = await getSkillDetails();
  const projects = await getProjectDetails();
  const volunteers = await getVolunteerDetails();

  return {
    props: {
      educations: educations,
      works: works,
      skills: skills,
      projects: projects,
      volunteers: volunteers,
    },
    revalidate: 10, // 10 secs
  };
}

export default Home;
