import { Navigation } from "./Navigation";
import { Container } from "react-bootstrap";

export const Start = () => {
  return (
    <>
      <Navigation />
      <Container>
        <p className="handWriting mt-5">
          Send a ship to Port Daggerford and find out what in the nine hells
          happened to that amulet!
        </p>
        <p className="handWriting">~ Sir Ludwig Cartier</p>
        <h3>The Beginning</h3>
        <Container>
          <p>
            The party will start in a port town named 'Port Daggerford'. You are
            all new to town, arriving for various reasons and have already made
            your mark. The town was attacked by a wolf who made play he was a
            man. Whilst it overwhelmed the town gaurd, you all stepped up to
            give aid and finally end the beast.
          </p>
          <p>
            "The warriors of Daggerford", local folk have branded you. Even Lady
            Daggerford herself has acknowledged your bravery. So much so, that
            she has invited you all for dinner this evening...
          </p>
        </Container>
        <h3>Backstory Creation</h3>
        <Container>
          <code>
            Answer as much or a little as you want and if you want more
            questions go to this{" "}
            <a
              href="https://authority.pub/character-development-questions/"
              target="_blank"
              rel="noreferrer"
            >
              link
            </a>
            .
          </code>
          <ul>
            <li>What are your characters physical traits?</li>
            <li>What does your character usually wear?</li>
            <li>
              What was your profession before you came to this town? Did your
              character have any authority over your co-workers?
            </li>
            <li>
              Has your character got a significant other? Parent/s? Best
              friend/s?
            </li>
            <li>Is your character introverted or extraverted?</li>
            <li>Are they thinking-focused or feeling-focused?</li>
            <li>What does your character do to relax?</li>
          </ul>
        </Container>
        <h3>D&D</h3>
        <Container>
          <code>
            Send me over some general points about your character so we can
            create a backstory together.
          </code>
          <p>
            We can choose Race and Class in session zero, however while
            answering these questions you will probably get some inspiriation
            for what your gonna play.
          </p>
          <p>
            We start at level three, you also get an extra 25 gold each for
            saving aiding in the death of the beast.
          </p>
        </Container>
        <h3>Port Daggerford</h3>
        <Container>
          <p>
            The port is based in the middle of the Dual Kingdom of Jursel. A
            handful of town gaurd ("Portectors") cover this land however, most
            are utilised for the two capital cities.
          </p>
          <p>
            The docks here are seldom used, all the materials and livestock
            depleted over the previous years. Apart from usual business, the
            docks act as a great place to diverge from common pirated routes, if
            you're in the know.
          </p>
          <p>
            The people are friendly or generally here to lay low. A few country
            loving rich folk run the town with a modest degree of respect. Lady
            Daggerford is the most prominant figure. She owns a personal militia
            that she lends when the town is under threat. Furthermore, she
            recently opened a temple to Waukeen, the Merchant's Friend, which
            handles the financial status of the docks/town.
          </p>
        </Container>
      </Container>
    </>
  );
};
