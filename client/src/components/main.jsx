import React from 'react';

export default class Main extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = { users: props.users };
    fetch('http://localhost:9001/api/sample')
    .then( res => res.json())
    .then(data => this.setState({
      users: this.state.users.concat(data.users.map( user => `web of ${user}` ))
    }));
  }

  handleClick(idx, name){
    this.setState({
      users: this.state.users.concat(` child of ${name} `)
    });
  }

  render(){
    return (
      <div>
        {/* comment */}
        <h1>Hello World!</h1>
        <ul>{
          this.state.users.map((name, i)=>{
            return <li key={i}>
                     <input type="button" value="Add Child"
                            onClick={this.handleClick.bind(this, i, name)} />
                     {name}!
                   </li>
          })
        }</ul>
      </div>
    );
  }
}