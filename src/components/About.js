import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileClass2 from "./ProfileClass2";

const About = () => {
        return (
            <>
             <h1>This is about page</h1>
             <Outlet />
             <ProfileClass name={"First Child"}/>
             <ProfileClass2 name={"Second Child"}/>
            </>
         )
}

export default About;