import React, { Suspense } from "react";
import styled from "styled-components";
import abbImage from "../assets/abb.png";
import cssImage from "../assets/comp/css.png";
import firebaseImage from "../assets/comp/Firebase.png";
import htmlImage from "../assets/comp/html.png";
import jsImage from "../assets/comp/js.png";
import mongodbImage from "../assets/comp/mongodb.png";
import mysqlImage from "../assets/comp/mysql.png";
import nextImage from "../assets/comp/next.svg";
import IITISoCImage from "../assets/IITISoC.png";
import NetImage from "../assets/comp/Netflix.png";
import LotImage from "../assets/comp/Lottery.jpg";
import ZombImage from "../assets/comp/Zomb.jpg";
import ERImage from "../assets/comp/erc20.jpg";
import ERCImage from "../assets/comp/ERC721.jpg";
import nodeImage from "../assets/comp/node-js.png"; 
import tailwindImage from "../assets/comp/tailwind.png";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import './Aboutc.css';
import { useInView } from "react-intersection-observer";
import Contact from "../pages/contact/contact";

const Section = styled.div`
  height: 100vh;
  width:100vw;
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

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
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

const SkillsSection = styled.div`
  height: 100vh;
  width:100vw;
  scroll-snap-align: center;
  background-color: #001251;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const SkillsContainer = styled.div`
width: 100%;
max-width: 1200px; /* Set maximum width to allow for 5 cards per row */
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 20px; /* Adjust gap if needed */
transform: translateY(${(props) => (props.inView ? "0" : "50px")});
opacity: ${(props) => (props.inView ? "1" : "0")};
transition: all 0.7s ease;
`;

const SkillCard = styled.div`
  flex: 1 1 calc(20% - 20px); /* Allow 5 cards per row with some space */
  max-width: calc(20% - 20px); /* Set maximum width to fit 5 cards */
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
  }
`;


const SkillImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const SkillTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const SkillBar = styled.div`
  height: 10px;
  background-color: #001251;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;
  width: 100%;
`;

const SkillLevel = styled.div`
  height: 100%;
  width: ${(props) => props.level}%;
  background-color: #da4ea2;
  transition: width 1s ease;
`;

const SkillDesc = styled.p`
  font-size: 16px;
  color: #333;
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  color: #da4ea2;
  margin-bottom: 40px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
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
    font-size: 36px;
  }
`;

const EducationSection = styled.div`
  height: 80vh;
  width:100vw;
  gap:40px;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const EducationContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  transform: translateY(${(props) => (props.inView ? "0" : "50px")});
  opacity: ${(props) => (props.inView ? "1" : "0")};
  transition: all 0.7s ease;
`;

const EducationCard = styled.div`
  flex: 1 1 calc(50% - 20px); 
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  width:150px;
  height:150px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
  }
`;

const EducationTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #001251;
`;

const EducationDesc = styled.p`
  font-size: 18px;
  color: #333;
`;

const ProjectsSection = styled.div`
  min-height: 100vh;
  width:100vw;
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
              I'm Aayush Yadav, a CSE student at IIT Indore. I specialize in software development and web development, with experience in smart contracts and machine learning. I also volunteer at Google Developer Student Clubs (GDSC) and have been a gold medalist in IITISoC.
            </IntroParagraph>
            <BoxContainer>
              <InfoBox>
                <InfoTitle>Web Developer</InfoTitle>
                <InfoDesc>Expert in building modern, responsive websites and applications.</InfoDesc>
              </InfoBox>
              <InfoBox>
                <InfoTitle>Blockchain </InfoTitle>
                <InfoDesc>Experienced in smart contracts and financial systems development.</InfoDesc>
              </InfoBox>
              <InfoBox>
                <InfoTitle>Data Analytics</InfoTitle>
                <InfoDesc>Skilled in data-driven decision-making and analytics.</InfoDesc>
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

      <SkillsSection ref={ref}>
        <SectionTitle>My Skills</SectionTitle>
        <SkillsContainer inView={inView}>

          <SkillCard>
            <SkillImage src={htmlImage} alt="HTML" />
            <SkillTitle>HTML</SkillTitle>

            <SkillDesc>Proficient in HTML5 and accessibility standards.</SkillDesc>
          </SkillCard>
          <SkillCard>
            <SkillImage src={cssImage} alt="CSS" />
            <SkillTitle>CSS</SkillTitle>

            <SkillDesc>Experienced with CSS3, Flexbox, and Grid.</SkillDesc>
          </SkillCard>
          <SkillCard>
            <SkillImage src={jsImage} alt="JavaScript" />
            <SkillTitle>JavaScript</SkillTitle>

            <SkillDesc>Skilled in ES6 and modern JavaScript frameworks.</SkillDesc>
          </SkillCard>
          <SkillCard>
            <SkillImage src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" />
            <SkillTitle>React</SkillTitle>

            <SkillDesc>Expert in building modern, responsive web applications using React.</SkillDesc>
          </SkillCard>
          <SkillCard>
            <SkillImage src={nextImage} alt="Next.js" />
            <SkillTitle>Next.js</SkillTitle>

            <SkillDesc>Experience in building server-side rendered apps.</SkillDesc>
          </SkillCard>
          <SkillCard>
            <SkillImage src={nodeImage} alt="Node.js" />
            <SkillTitle>Node.js</SkillTitle>

            <SkillDesc>Familiar with RESTful APIs and backend development.</SkillDesc>
          </SkillCard>
          <SkillCard>
            <SkillImage src={mysqlImage} alt="MySQL" />
            <SkillTitle>MySQL</SkillTitle>

            <SkillDesc>Experienced in relational databases and SQL queries.</SkillDesc>
          </SkillCard>
          <SkillCard>
            <SkillImage src={tailwindImage} alt="Tailwind CSS" />
            <SkillTitle>Tailwind CSS</SkillTitle>

            <SkillDesc>Proficient in utility-first CSS frameworks.</SkillDesc>
          </SkillCard>

          <SkillCard>
            <SkillImage src={mongodbImage} alt="MongoDB" />
            <SkillTitle>MongoDB</SkillTitle>

            <SkillDesc>Proficient in NoSQL database design and management.</SkillDesc>
          </SkillCard>
          <SkillCard>
            <SkillImage src={firebaseImage} alt="Firebase" />
            <SkillTitle>Firebase</SkillTitle>

            <SkillDesc>Experienced in building real-time applications.</SkillDesc>
          </SkillCard>
        </SkillsContainer>
      </SkillsSection>

      <EducationSection ref={ref}>
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
      </EducationSection>

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
              <ProjectImage src={NetImage} alt="Netflix" />
              <ProjectContent>
                <ProjectTitle>Netflix Clone</ProjectTitle>
                <ProjectDescription>Stream your favorite shows and movies with our Netflix clone website, offering a sleek, user-friendly interface, personalized recommendations, and high-quality video content anytime, anywhere.</ProjectDescription>
              </ProjectContent>
            </ProjectCard>
            <ProjectCard>
              <ProjectImage src={LotImage} alt="Space Themed Website" />
              <ProjectContent>
                <ProjectTitle>Decentralised Lottery</ProjectTitle>
                <ProjectDescription>A decentralized lottery system in Solidity using Remix IDE allows participants to enter with Ether, randomly selects a winner using a secure algorithm, and automatically transfers the prize to the winner's address.</ProjectDescription>
              </ProjectContent>
            </ProjectCard>
            <ProjectCard>
              <ProjectImage src={ZombImage} alt="Zombies" />
              <ProjectContent>
                <ProjectTitle>Cryptozombies Generator</ProjectTitle>
                <ProjectDescription>The Cryptozombies generator generates personalized zombie characters for blockchain-based games using solidity where a 16-digit unique code.</ProjectDescription>
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
              <ProjectImage src={ERCImage} alt="ERC721" />
              <ProjectContent>
                <ProjectTitle>NFT Generator</ProjectTitle>
                <ProjectDescription>A unique non-fungible token (NFT) creator on the Ethereum blockchain, following the ERC721 standard for ownership, transfer, and metadata integration.</ProjectDescription>
              </ProjectContent>
            </ProjectCard>
          </ProjectsGrid>
        </ProjectsContainer>
      </ProjectsSection>

    </>
  );
};

export default Aboutc