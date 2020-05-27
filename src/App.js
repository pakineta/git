import React from 'react';
import './App.css';

// function Helloworld(props){
//   return(
//            <div id="hello">
//              <h3>{props.subtitle}</h3>
//              {props.mytext}
//             </div>
//     );
// }

class Helloworld extends React.Component{

  state= {
    show: true
  }

toggleShow = () => {
  this.setState({show: !this.state.show})
}

  render(){
    if(this.state.show){
    return(
      <div id="hello">
      <h3>{this.props.subtitle}</h3>
      {this.props.mytext}
      <button onClick={this.toggleShow}>Toggle Show</button>
     </div>
    )
  } else {
    return <h2>
     No hay elementos!
    <button onClick={this.toggleShow}>Toggle Show</button> 
    </h2>      
  }

 }
}


function App() {
  return (
    
  <div>
    Thiss is my component: 
    <Helloworld mytext="Hello Pakirulo" subtitle="pepose pepo" /> 
    <Helloworld mytext="Hello Paki" subtitle="ats ats" /> 
    <Helloworld mytext="Hello Pakinetta" subtitle="ots ots2" />
  </div>

  );
}

export default App;