import React, { Suspense } from "react";
import styled from "styled-components";
import abbImage from "../assets/abb.png";
import IITISoCImage from "../assets/IITISoC.png";
import NetImage from "../assets/comp/Netflix.png";
import LotImage from "../assets/comp/Lottery.jpg";
import ZombImage from "../assets/comp/Zomb.jpg";
import ERImage from "../assets/comp/erc20.jpg";
import ERCImage from "../assets/comp/ERC721.jpg";
import BankImage from "../assets/comp/Bank.png";
import CalImage from '../assets/comp/Calender.png';
import PepImage from '../assets/comp/Peptabase.png';
import GameImage from '../assets/comp/Gaming.png';
import RICImage from '../assets/comp/RIC.png';
import DashImage from '../assets/comp/Dash.png';
import TweetImage from "../assets/comp/Tweet.png";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import './Aboutc.css';
import { useInView } from "react-intersection-observer";
import { IconCloud } from "../components/ui/icon-cloud";
import { motion } from "framer-motion";

const Section = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const IntroParagraph = styled.p`
  font-size: 20px;
  color: #333;
  font-weight: 800;
  line-height: 1.6;
  max-width: 600px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    padding: 0 20px;
  }
`;

const Img = styled.img`
  width: 500px;
  height: 450px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 100px;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  gap: 16px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const InfoBox = styled.div`
  width: 200px;
  height: 150px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const InfoTitle = styled.h3`
  font-size: 20px;
  color: #001251;
  margin-bottom: 10px;
`;

const InfoDesc = styled.p`
  font-size: 16px;
  color: #333;
`;
const SectionTitle = styled.h2`
  font-size: 30px;
  color: #da4ea2;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 0px;
  text-transform: uppercase;
  position: relative;
  
  &::after {
    content: "";
    width: 50px;
    height: 4px;
    background-color: #da4ea2;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const SkillsSectionWrapper = styled.div`
  max-height:70%;
  width: 100vw;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  display: flex;
  padding: 3rem 10rem;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem 1rem;
    flex-direction: column;
  }
`;

const SkillsContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width:900px;
  max-width: 1400px;
  padding-right: 0rem;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 1rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 1.4rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const CategoryTitle = styled.h3`
  color: #ff5d8f;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  font-weight: 500;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: #ff5d8f;
    border-radius: 2px;
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
`;

const SkillItem = styled.li`
  color: #f0f0f0;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.1rem 0;
  transition: transform 0.2s ease;

  &:before {
    content: "→";
    color: #ff5d8f;
    font-weight: bold;
  }

  &:hover {
    transform: translateX(5px);
    color: #ff5d8f;
  }
`;

const IconCloudWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255,93,143,0.1) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

const ExperienceSection = styled.div`
  min-height: 50vh;
  width: 100vw;
  scroll-snap-align: center;
  padding: 3rem 0rem;
`;

const Timeline = styled.div`
  max-width: 950px;
  margin: 3rem auto;
  position: relative;
  
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
    background: #001251;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${props => props.position === 'left' ? 'flex-start' : 'flex-end'};
  padding-right: ${props => props.position === 'left' ? '50%' : '0'};
  padding-left: ${props => props.position === 'right' ? '50%' : '0'};
  margin-bottom: 1rem;
  position: relative;
`;

const TimelineContent = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1rem;
  width: 80%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    ${props => props.position === 'left' ? 'right: -10px' : 'left: -10px'};
    width: 20px;
    height: 20px;
    background: #da4ea2;
    border-radius: 50%;
    transform: translateY(-50%);
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1.5rem;
  color: #001251;
  margin-bottom: 0.35rem;
`;

const ExperienceCompany = styled.h4`
  font-size: 1.1rem;
  color: #da4ea2;
  margin-bottom: 0.1rem;
`;

const ExperienceDate = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 0.4rem;
`;

const ExperienceDescription = styled.p`
  color: #333;
  line-height: 1.6;
`;

const ProjectsSection = styled.div`
  min-height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
  background-color: #0a0a1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`;

const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  margin-top: 40px;
`;

const ProjectCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  color: #da4ea2;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #ffffff;
  line-height: 1.5;
`;

const EducationSection = styled.div`
  min-height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
  padding: 4rem 2rem;
`;

const EducationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '20px'});
  transition: all 0.5s ease-in-out;
`;

const EducationCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const EducationTitle = styled.h3`
  font-size: 1.5rem;
  color: #001251;
  margin-bottom: 1rem;
`;

const EducationDesc = styled.p`
  color: #666;
  line-height: 1.6;
`;

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypr",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const Aboutc = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <Section>
        <Container>
          <Left>
            <Title>About Me</Title>
            <IntroParagraph>
              I'm Aayush Yadav, a CSE student at IIT Indore with a focus on software and web development. I have hands-on experience in smart contracts, machine learning, and actively contribute to Google Developer Student Clubs (GDSC). I'm also a proud gold medalist at IITISoC.            </IntroParagraph>
            <BoxContainer>
              <InfoBox>
                <InfoTitle>Web Developer</InfoTitle>
                <InfoDesc>Expert in building modern, responsive websites and applications.</InfoDesc>
              </InfoBox>
              <InfoBox>
                <InfoTitle>Blockchain</InfoTitle>
                <InfoDesc>Experienced in building smart contracts and Web3 Development.</InfoDesc>
              </InfoBox>
              <InfoBox>
                <InfoTitle>Machine Learning</InfoTitle>
                <InfoDesc>Experienced in using and building ML models.</InfoDesc>
              </InfoBox>
            </BoxContainer>
          </Left>
          <Right>
            <Canvas>
              <Suspense fallback={null}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 100, 200]} scale={2.4}>
                  <MeshDistortMaterial
                    color="#082b73"
                    attach="material"
                    distort={0.5}
                    speed={1}
                  />
                </Sphere>
              </Suspense>
            </Canvas>
            <Img src={abbImage} alt="about image" />
          </Right>
        </Container>
      </Section>

      <SkillsSectionWrapper>
        <SkillsContent>
          <SectionTitle>Skills & Expertise</SectionTitle>
          <SkillsGrid>
            <SkillCategory
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CategoryTitle>Frontend</CategoryTitle>
              <SkillsList>
                <SkillItem>React.js, Vite.js & Next.js</SkillItem>
                <SkillItem>TypeScript & JavaScript</SkillItem>
                <SkillItem>Modern CSS & Frameworks</SkillItem>
                <SkillItem>Three.js, Matter.js</SkillItem>
                <SkillItem>Figma & Design Tools</SkillItem>
              </SkillsList>
            </SkillCategory>

            <SkillCategory
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CategoryTitle>Backend</CategoryTitle>
              <SkillsList>
                <SkillItem>Node.js & Express</SkillItem>
                <SkillItem>Python (Flask, Django)</SkillItem>
                <SkillItem>RESTful APIs</SkillItem>
                <SkillItem>Databases: MySQL, SQLite</SkillItem>
                <SkillItem>Firebase & AWS</SkillItem>
              </SkillsList>
            </SkillCategory>

            <SkillCategory
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CategoryTitle>Blockchain</CategoryTitle>
              <SkillsList>
                <SkillItem>Smart Contracts & Solidity</SkillItem>
                <SkillItem>Foundry & Hardhat Framework</SkillItem>
                <SkillItem>DeFi Protocols</SkillItem>
                <SkillItem>NFT Development</SkillItem>
              </SkillsList>
            </SkillCategory>

            <SkillCategory
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <CategoryTitle>Machine Learning</CategoryTitle>
              <SkillsList>
                <SkillItem>Tensorflow & Pytorch</SkillItem>
                <SkillItem>Numpy & Pandas</SkillItem>
                <SkillItem>Convolutional Neural Networks</SkillItem>
                <SkillItem>Streamlit</SkillItem>
              </SkillsList>
            </SkillCategory>
          </SkillsGrid>
        </SkillsContent>

        <IconCloudWrapper>
          <IconCloud
            images={slugs.map(
              (slug) => `https://cdn.simpleicons.org/${slug}/ffffff`
            )}
            style={{ width: '100%', height: '100%' }}
          />
        </IconCloudWrapper>
      </SkillsSectionWrapper>

      <ExperienceSection>
        <SectionTitle>Experience</SectionTitle>
        <Timeline>

          <TimelineItem position="left">
            <TimelineContent position="left">
              <ExperienceTitle>Software Developer Intern</ExperienceTitle>
              <ExperienceCompany>Raizzify</ExperienceCompany>
              <ExperienceDate>Feb. 2025 - Present</ExperienceDate>
              <ExperienceDescription>
              Assists in coding, debugging, testing, and developing applications while learning industry practices and collaborating with teams. 
              </ExperienceDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem position="right">
            <TimelineContent position="right">
              <ExperienceTitle>Peptabase Project</ExperienceTitle>
              <ExperienceCompany>Under Prof. Amit Kumar, IIT Indore</ExperienceCompany>
              <ExperienceDate>Nov. - Jan. 2025</ExperienceDate>
              <ExperienceDescription>
                Developed the Web platform for a database project working on vast collection of aptamers, categorized and
                searchable by type, function, and application criteria for faster, more accurate research insights.
              </ExperienceDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem position="left">
            <TimelineContent position="left">
              <ExperienceTitle>Web Developer Intern</ExperienceTitle>
              <ExperienceCompany>Sankalp Technologies</ExperienceCompany>
              <ExperienceDate>Aug. - Sept. 2024</ExperienceDate>
              <ExperienceDescription>
                Worked on Frameworks like Vite.js, React.js and Advanced Javascript.
              </ExperienceDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem position="right">
            <TimelineContent position="right">
              <ExperienceTitle>Gold Medalist</ExperienceTitle>
              <ExperienceCompany>IITISoC</ExperienceCompany>
              <ExperienceDate>June - Aug. 2024</ExperienceDate>
              <ExperienceDescription>
                Built a trading Web Platform enabling users to trade stocks with virtual money, manage portfolios, analyze advanced charts, test strategies, and
                maximize profits.
              </ExperienceDescription>
            </TimelineContent>
          </TimelineItem>


        </Timeline>
      </ExperienceSection>

      {/* <EducationSection ref={ref}>
        <SectionTitle>Education</SectionTitle>
        <EducationContainer inView={inView}>
          <EducationCard>
            <EducationTitle>B.Tech in Computer Science</EducationTitle>
            <EducationDesc>IIT Indore</EducationDesc>
            <EducationDesc>2023 - Present</EducationDesc>
          </EducationCard>
          <EducationCard>
            <EducationTitle>Class 1-12</EducationTitle>
            <EducationDesc>Ralli International School</EducationDesc>
            <EducationDesc>2011-2023</EducationDesc>
          </EducationCard>
        </EducationContainer>
      </EducationSection> */}

      <ProjectsSection ref={ref}>
        <SectionTitle>My Projects</SectionTitle>
        <ProjectsContainer>
          <ProjectsGrid>
            <ProjectCard>
              <ProjectImage src={IITISoCImage} alt="Vertex" />
              <ProjectContent>
                <ProjectTitle>Trading Web Platform</ProjectTitle>
                <ProjectDescription>Vertex is a virtual trading platform for buying, selling stocks, portfolio management, advanced charting, and real-time data analysis.</ProjectDescription>
              </ProjectContent>
            </ProjectCard>
            <ProjectCard>
              <ProjectImage src={BankImage} alt="Vertex" />
              <ProjectContent>
                <ProjectTitle>Bank DBMS</ProjectTitle>
                <ProjectDescription>Full stack Bank website for efficient management of customer data, account transactions, database integration financial operations and secure authentication</ProjectDescription>
              </ProjectContent>
            </ProjectCard>

            <ProjectCard>
              <ProjectImage src={TweetImage} alt="Netflix" />
              <ProjectContent>
                <ProjectTitle>Tweet Generator</ProjectTitle>
                <ProjectDescription>An AI chatbot that generates engaging Tweets from images, text, etc, using advanced NLP and computer vision to create shareable social media content effortlessly.</ProjectDescription>
              </ProjectContent>
            </ProjectCard>

            <ProjectCard>
              <ProjectImage src={ERImage} alt="ERC20" />
              <ProjectContent>
                <ProjectTitle>Cryptocurrency Generator</ProjectTitle>
                <ProjectDescription>The ERC20 token project involves creating a custom cryptocurrency on the Ethereum blockchain, adhering to the ERC20 standard for token transactions and smart contract integration.</ProjectDescription>
              </ProjectContent>
            </ProjectCard>

            <ProjectCard>
              <ProjectImage src={PepImage} alt="Peptabase" />
              <ProjectContent>
                <ProjectTitle>Peptabase Database</ProjectTitle>
                <ProjectDescription>A Rust based web platform for a database project that works on vast collection of aptamers, categorized and searchable by type, function, and application for more accurate research insights.</ProjectDescription>
              </ProjectContent>
            </ProjectCard>

            <ProjectCard>
              <ProjectImage src={GameImage} alt="Game" />
              <ProjectContent>
                <ProjectTitle>Gaming Club Website</ProjectTitle>
                <ProjectDescription>The official club website of Gaming Club, IIT Indore: the hub of gaming and game development activities of IIT Indore, made on Express.js.</ProjectDescription>
              </ProjectContent>
            </ProjectCard>

            <ProjectCard>
              <ProjectImage src={RICImage} alt="RIC" />
              <ProjectContent>
                <ProjectTitle>RIC-25 Website</ProjectTitle>
                <ProjectDescription>The official website of Research And Industrial conclave, IIT Indore made using Vite.js and Spline tools.</ProjectDescription>
              </ProjectContent>
            </ProjectCard>

            <ProjectCard>
              <ProjectImage src={NetImage} alt="Netflix" />
              <ProjectContent>
                <ProjectTitle>Netflix Clone</ProjectTitle>
                <ProjectDescription>Stream your favorite shows and movies with our Netflix clone website, offering a sleek, user-friendly interface, personalized recommendations, and high-quality video content anytime, anywhere.</ProjectDescription>
              </ProjectContent>
            </ProjectCard>
            <ProjectCard>
              <ProjectImage src={ERCImage} alt="ERC721" />
              <ProjectContent>
                <ProjectTitle>NFT Generator</ProjectTitle>
                <ProjectDescription>A unique non-fungible token (NFT) creator on the Ethereum blockchain, following the ERC721 standard for ownership, transfer, and metadata integration.</ProjectDescription>
              </ProjectContent>
            </ProjectCard>

            <ProjectCard>
              <ProjectImage src={DashImage} alt="Dashboard" />
              <ProjectContent>
                <ProjectTitle>Dynamic DashBoard Application</ProjectTitle>
                <ProjectDescription>A dynamic dashboard using React.js, Redux, TypeScript, Redux Thunk, and Recharts, featuring user management, analytics with charts, API integration, responsive design, and interactive visualizations for insightful data representation.</ProjectDescription>
              </ProjectContent>
            </ProjectCard>

            <ProjectCard>
              <ProjectImage src={CalImage} alt="Calendar" />
              <ProjectContent>
                <ProjectTitle>Dynamic Calendar App</ProjectTitle>
                <ProjectDescription>A dynamic event calendar built with Vite, Shadcn UI, and Day.js offering customizable scheduling, event management, reminder, etc, designed for intuitive user experience.</ProjectDescription>
              </ProjectContent>
            </ProjectCard>
            <ProjectCard>
              <ProjectImage src={LotImage} alt="Space Themed Website" />
              <ProjectContent>
                <ProjectTitle>Decentralised Lottery</ProjectTitle>
                <ProjectDescription>A decentralized lottery system in Solidity using Remix IDE allows participants to enter with Ether, randomly selects a winner using a secure algorithm, and automatically transfers the prize to the winner's address.</ProjectDescription>
              </ProjectContent>
            </ProjectCard>
          </ProjectsGrid>
        </ProjectsContainer>
      </ProjectsSection>

    </>
  );
};
export default Aboutc;
