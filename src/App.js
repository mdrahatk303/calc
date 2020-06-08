import React, {Component} from 'react';
import Button from './components/button.js'
import './css/style.css';
class App extends Component{

  constructor(props)
  {
    super(props);

    this.state={
      
      current: "0",
      previous: []
    }
  }

  reset=(symbol)=>  {
    
      this.setState({current:"0",previous:[]})
  
   
  }

  addTocurrent=(symbol)=>{
    //console.log('here');
    if(['/','*','+','-'].indexOf(symbol)>-1)
    {
        let floaty=[];
        let input=this.state.current+symbol;
        floaty.push(input);
       
        this.setState({previous:floaty,current:"0"});
    }
    else{
      if(this.state.current==="0")
      {
        //console.log(this.state.current);
        this.setState({current:""});
        this.setState({current:symbol});
      }
      else
      {
        //console.log(typeof(this.state.current)+"here"+this.state.current);
        this.setState({current:this.state.current+symbol});
      }
    }
  }

  calculate=()=>{
    if(this.state.previous.length>0)
    {
      //console.log(eval(String(this.state.previous[0])+"2"));
       
       let calc=String(eval((this.state.previous[this.state.previous.length-1]+this.state.current)));
       this.setState({current:calc,previous:[]});
    }
  }

  render()
  {

    const buttons=
    [
      {symbol:'C',cols:3,action:this.reset},
      {symbol:'/',cols:1,action:this.addTocurrent},
      {symbol:'7',cols:1,action:this.addTocurrent},
      {symbol:'8',cols:1,action:this.addTocurrent},
      {symbol:'9',cols:1,action:this.addTocurrent},
      {symbol:'*',cols:1,action:this.addTocurrent},
      {symbol:'4',cols:1,action:this.addTocurrent},
      {symbol:'5',cols:1,action:this.addTocurrent},
      {symbol:'6',cols:1,action:this.addTocurrent},
      {symbol:'-',cols:1,action:this.addTocurrent},
      {symbol:'1',cols:1,action:this.addTocurrent},
      {symbol:'2',cols:1,action:this.addTocurrent},
      {symbol:'3',cols:1,action:this.addTocurrent},
      {symbol:'+',cols:1,action:this.addTocurrent},
      {symbol:'0',cols:2,action:this.addTocurrent},
      {symbol:'.',cols:1,action:this.addTocurrent},
      {symbol:'=',cols:1,action:this.calculate}
    ]

    return(
      <div className="App">
        <div className="resultArea">
            <div>
              <input className="floaty" type="text" value={this.state.previous}/>
            </div>
            <div>
            <input className="result" type="text" value={this.state.current}/>  
            </div>
        </div>
        <div className="buttons">
          {buttons.map((btn,i)=>{
            return <Button key={i} symbol={btn.symbol} cols={btn.cols} action={(symbol)=>{btn.action(symbol)}}/>
          })}
        </div>
      </div>
    )
  }
}

export default App;
