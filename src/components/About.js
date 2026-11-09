import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


const About = () => {
  return (
    <div>
      <div>About</div>
      <h2>This is my about section</h2>
      <div>
        <UserContext.Consumer>
          {({loggedInUser}) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>
      <UserClass name={"Soumya Kakarlapudi Class"} location={"Germany"}/>
    </div>
  )
};
export default About;