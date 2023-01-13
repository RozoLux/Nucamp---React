import { Container } from "reactstrap";
import DisplayLIst from "../features/display/DisplayList";
import SubHeader from "../components/SubHeader";


const HomePage =() => {
  return (
    <Container>
      <SubHeader current='Home' />
      <DisplayLIst/>
    </Container>
  );

};

export default HomePage;