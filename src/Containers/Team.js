import "../Css/Main.css"
import TeamCard from "../Components/TeamCard"
import {Container} from 'reactstrap';

export default function Team() {
    return (
      <Container className = "form-parent-container">
      <h2>Our Team</h2>
        <div className="grid--view--team">
          <TeamCard img={"images/kerem.jpg"} title ={"Kerem Ersan"} description ={"item.description"} age ={"22"} occupation ={"Computer Science"} favouriteMovie ={"Reservoir Dogs"}></TeamCard>
          <TeamCard img={"images/musa.jpg"} title ={"Musa Berkay"} description ={"item.description"} age ={"22"} occupation ={"Computer Science"} favouriteMovie ={"Baywatch"}></TeamCard>
          <TeamCard img={"images/kaan.jpg"} title ={"Kaan Alp"} description ={"item.description"} age ={"22"} occupation ={"Computer Science"} favouriteMovie ={"Nice Guys"}></TeamCard>
        </div>
      </Container>
    );
  }