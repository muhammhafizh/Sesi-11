/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react'

export class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: " ",
          button: 1
        };
        
        this.list = []
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        if (this.state.button !== 1) {
          this.list.pop()
          this.setState({value: ""});
          this.list([])
        }
         this.list.push(this.state.value);
         this.setState({value: ""});
         console.log(this.list) 
      }
    
      render() {
        const { list } = this
        return (
          <>
            <form onSubmit={this.handleSubmit}>
              <label>
                Name: <br/>
                <input type="text" value={this.state.value} onChange={this.handleChange} /> <br/>
              </label>
              <input type="submit" value="Antrikan !" onClick={() => (this.state.button = 1)}/>
              <input type="submit" value="Majukan !" onClick={() => (this.state.button = 2)}/>
            </form> 

            <hr/>
            
            <ul>
              {list.map((listItem, index) => {
                if (index === 0) {
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  return <li key={index}><a>{listItem}</a></li>
                }  
                 // eslint-disable-next-line jsx-a11y/anchor-is-valid
                 return <li key={index}> {'=>'}  <a>{listItem}</a></li>
              })}
            </ul>
          </>
        );
      }
}

export default Input