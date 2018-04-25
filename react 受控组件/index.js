import React from 'react';
import ReactDOM,{render} from 'react-dom';

class Sum extends React.Component{
    constructor(){
        super()
        this.state = {
            a:'1',
            b:'1'
        }
    }
    handchange=(key,e)=>{
        this.setState({
            [key]:e.target.value
        })
    }
    render(){
        return(
            <div>
                <input type='text' onChange={(e)=>{this.handchange('a',e)}} value={this.state.a} />
                <input type='text' onChange={(e)=>{this.handchange('b',e)}} value={this.state.b} />
                {this.state.a+this.state.b}
            </div>
        )
    }
}

ReactDOM.render(<Sum />,document.getElementById('root'));
