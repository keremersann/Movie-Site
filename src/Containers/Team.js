import "../Css/Card.css"
import TeamCard from "../Components/TeamCard"
import "../Css/Main.css"



export default function Team() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>THE TEAM</h2>
        <div className = "main">
                <div className = "grid--view">
                <TeamCard title ={"Kerem Ersan"} description ={item.description} age ={"22"} occupation ={"Computer Science"} favouriteMovie ={"Resevoir Dogs"}></TeamCard>
                <TeamCard title ={"Musa Berkay"} description ={item.description} age ={"22"} occupation ={"Computer Science"} favouriteMovie ={"Baywatch"}></TeamCard>
                <TeamCard title ={"Kaan Alp"} description ={item.description} age ={"22"} occupation ={"Computer Science"} favouriteMovie ={"Nice Guys"}></TeamCard>
                </div>
            </div>
      </main>
    );
  }