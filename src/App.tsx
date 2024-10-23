import Header from "@/components/header";
import { Label, Card, Typography } from "@/components/UI";
import InfluenceTypeSelector from "@/components/influence-type-selector";
import Qa from "@/components/qa";
import icons from "@/components/icons";

const Medias = [
  "INSTAGRAM",
  "TIKTAK",
  "TWITTER",
  "FACEBOOK",
  "YOUTUBE",
  "SPOTIFY",
  "SOUNDCLOUD",
  "AUDIOMACK",
];

const cards: object[] = [];
function App() {
  const listOfCards = cards.map((card: object) => {
    return <Card {...card} />;
  });

  return (
    <>
      <Header>
        {Medias.map((media) => (
          <Label key={media}>
            <icons.instagram width="50" height="50" color='white'/>
            <Typography>{media}</Typography>
          </Label>
        ))}
      </Header>
      <main>
        <InfluenceTypeSelector />
        {listOfCards}
        {/* <NeedHelp/> */}
        {/* <HowItWorks /> */}
        <Qa />
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default App;
