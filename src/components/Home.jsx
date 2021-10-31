import { Container } from "react-bootstrap";
import { Navigation } from "./Navigation";

export const Home = () => {
  return (
    <>
      <Navigation />
      <Container>
        <p className="handWriting mt-5">Welcome friends, to Curse of Strahd</p>
        <p className="handWriting">~ Luke Dowling</p>
        <h3>About</h3>
        <Container>
          <p>
            Here you will find all you need to know about our version of Curse
            of Strahd. I will write down brief notes about the episodes if you
            wanna catch up or you miss any sessions. A start page is provided to
            give you some action points leading up to session zero/one.
          </p>
          <p>
            Any suggestions for improvements are always welcome. Let's do this!
          </p>
        </Container>
      </Container>
    </>
  );
};
