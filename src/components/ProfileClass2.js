import { Component } from "react";

class ProfileClass2 extends Component {
    constructor(props){
        console.log("Costructor", props.name)
        super(props)
    }

    componentDidMount(){
        // this.timer = setInterval(() => {
        // console.log("Set Interval from", this.props.name)
        // }, 1000)
        console.log("Component did mount", this.props.name)
    }

    componentDidUpdate() {
        console.log("componentDidUpdate", this.props.name)
    }

    componentWillUnmount(){
        //clearInterval(this.timer)
    }

    render() {
        console.log("render", this.props.name)
        return (
            <div>

                <h1>Profile two class</h1>
            </div>
        )
    }
}

export default ProfileClass2;