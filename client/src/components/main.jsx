import React from 'react';

export default class Main extends React.Component{
  
  constructor(props) {
    super(props);
    this.users =  ['Alice','Bob','Carol'];
  }

  handleClick(idx, name){
    console.log(idx, name);
    alert(`hi! ${name}`);
  }

  render(){
    return (
      <div>
        {/* comment */}
        <h1>Hello World!</h1>
        <ul>{
          this.users.map((name, i)=>{
            return <li key={i}>
                     name: {name}!
                     <input type="button" value="Call"
                            onClick={this.handleClick.bind(this, i, name)} />
                   </li>
          })
        }</ul>
      </div>
    );
  }
}