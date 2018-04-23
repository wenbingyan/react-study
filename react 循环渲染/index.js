import React from 'react';
import ReactDOM,{render} from 'react-dom';

let Arr = [
    {name:'apple',price:'12'},
    {name:'pear',price:'8'},
]
let ele =(
    <ul>
        {Arr.map((item,index)=>(
            <li key={index}>{toContent(item)}</li>
        ))}
    </ul>
)
function toContent(item){
    return `name是${item.name},价格是${item.price}`
}
ReactDOM.render(ele, document.getElementById('root'));
