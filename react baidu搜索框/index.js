import React from 'react';
import ReactDOM,{render} from 'react-dom';
import oldJsonp from 'jsonp';

function jsonp(url,opts={}){
    return new Promise((resolve,reject)=>{
        oldJsonp(url,opts,function(err,data){
            if(err)reject(err);
            resolve(data);
        })
    })
}
// async + await  await跟的是promise 有await就需要用async来修饰此函数
class Search extends React.Component{
    constructor(){
        super()
        this.state = {
            val:'',
            arr:[],
            index:-1
        }
    }
    handle=async (e)=>{
        let wd = e.target.value;
        this.wd = wd;
        let {s} = await jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+wd,{param:'cb'})
        this.setState({val:wd,arr:s})
    }
    keychange=(e)=>{
        let index = this.state.index;
        if(e.keyCode===38||e.keyCode===40){
            e.preventDefault();
            if(e.keyCode===40){
                index++;
                if(index===this.state.arr.length){
                    index=-1;
                }
            }else{
                index--;
                if(index===-2){
                    index = this.state.arr.length-1
                }
            }
            this.setState({index,val:this.state.arr[index]||this.wd})
        }
        console.log(index)
    }
    enter=(e)=>{
        if(e.keyCode===13){
            window.open('https://www.baidu.com/s?wd='+this.state.val)
        }
    }
    render(){
        return(
            <div>
                <input type='text' onKeyUp={this.enter} onKeyDown={this.keychange} onChange={this.handle} value={this.state.val} />
                <ul>
                    {this.state.arr.map((item,index)=>(
                        <li className={this.state.index===index?'red':'qwe'} key={index}>{item}</li>
                    ))}
                </ul>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

ReactDOM.render(<Search />,document.getElementById('root'));
