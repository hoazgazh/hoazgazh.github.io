import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Hoang Anh</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a DevOps Engineer</HighlightAlt> based in Vietnam.
      </p>
      <p>
        I am passionate about cloud infrastructure, automation, <br />
        and building reliable systems at scale.
      </p>
    </AboutWrapper>
  );
};

export default About;
