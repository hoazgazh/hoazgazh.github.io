import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "AWS Certified Solutions Architect – Associate (SAA-C03)",
    desc: "Amazon Web Services",
  },
  {
    title: "Specializations",
    desc: "Kubernetes/GitOps | DevSecOps | Integration (ESB/Kafka/MQ) | Observability (OTel)",
  },
];

export default Education;
