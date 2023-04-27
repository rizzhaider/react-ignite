import {Component} from "react";
import UserContext from "../utils/userContext";

class Profile extends Component {
    constructor(props){
        console.log("Costructor", props.name)
        super(props);

        this.state = {
           userInfo:{
            id:"",
            login:"",
            avatar_url:""
           }
        }
    }
   async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rizzhaider");
    const json = await data.json();
    console.log(json)
    this.setState({
        userInfo:json
    })
    console.log("Component did mount", this.props.name)
   }

   componentDidUpdate(prevProps, prevState){
    // if(this.state.count !== prevState.count){

    // }
    console.log("componentDidUpdate", this.props.name)
   }
    render(){
        console.log("render", this.props.name)
        
        return (
            <div>
                <UserContext.Consumer>
                    {({user}) => <>
                    <h1>
                        Name From Context: {user.name}
                    </h1>
                    <h1>
                        Email From Context: {user.email}
                    </h1>
                    </>}
                </UserContext.Consumer>
                <h1>Profile Class Component</h1>
                <h1>Name: {this.state?.userInfo?.login}</h1>
                <img alt="avatar" src={this.state?.userInfo?.avatar_url} />
            </div>
        )
    }
}

{/* <button onClick={() => {
    // we do not mutate stae directly
    // we will never do this.state = something
    this.setState({
        count:1
    }) // in set state we are sending modified object
}}>
    Click Count
</button> */}

export default Profile;