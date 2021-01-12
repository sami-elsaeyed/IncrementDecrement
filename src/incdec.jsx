import { Component } from "react"
class Incdec extends Component{
    constructor(props){
        super(props)
        this.state={num:this.props.num}
    }
    increase=()=>{
        let number=this.state.num
        this.setState({num:number+1})
    }
    decrease=()=>{
        if(this.state.num===0){
        alert("As small as can be. Can't be less than zero")
        return
        }
        let number=this.state.num
        this.setState({num:number-1})
    }

    render(){
        return <div>
            <button onClick={this.increase}>Increment</button>
            <button onClick={this.decrease}>Decrement</button>
            <br/>
            <h1>{this.state.num}</h1>
        </div>   

    }
}
export default Incdec
