import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
    __                                        __  
   / /_  ____  ____ _____  ____ _____ _____  / /_ 
  / __ \\/ __ \\/ __ \`/_  / / __ \`/ __ \`/_  / / __ \\
 / / / / /_/ / /_/ / / /_/ /_/ / /_/ / / /_/ / / /
/_/ /_/\\____/\\__,_/ /___/\\__, /\\__,_/ /___/_/ /_/ 
                        /____/                    
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
 _                              _    
| |_  ___  __ _ _____ _ __ _ __| |_  
| ' \\/ _ \\/ _\`|_ / _\`/ _\`|_ / ' \\ 
|_||_\\___/\\__,_/__\\__, \\__,_/__|_||_|
                  |___/              
            `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.0.0)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/hoazgazh/hoazgazh.github.io">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
