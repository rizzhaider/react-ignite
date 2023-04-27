import { Outlet } from "react-router-dom";
import { Component } from "react";
import ProfileClass from "./ProfileClass";
import ProfileClass2 from "./ProfileClass2";
import UserContext from "../utils/userContext";

class AboutClass extends Component {
    constructor(props){
        console.log(" parent Constructor")
        super(props)
    }
    
    componentDidMount(){
        console.log("Parent ComponentDidMount")
    }

    render() {
        console.log(" parent Render")
        return (
            <>
             <h1>This is about page</h1>
             <Outlet />
             <ProfileClass name={"First Child"}/>
             <ProfileClass2 name={"Second Child"}/>
             <UserContext.Consumer>
                {({user}) => <h4>Name: {user.name}</h4>}
             </UserContext.Consumer>
            </>
         )
    }
    
}

export default AboutClass;