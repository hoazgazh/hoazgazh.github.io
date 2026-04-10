import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Hoàng Anh</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a DevOps / SRE & Platform Engineer</HighlightAlt>{" "}
        based in Hanoi, Vietnam.
      </p>
      <p>
        I build reliable, secure, and observable platforms <br />
        for banking & payment systems.
      </p>
    </AboutWrapper>
  );
};

export default About;
