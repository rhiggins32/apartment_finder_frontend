import React, {Component} from 'react';
//import '../css/Apartments.css'



class Detail extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartment: this.props.apartment
    }
  }

  componentWillMount(){
    this.setState({apartment: this.props.apartment})
  }

  render(){
    let apt = this.state.apartment
    console.log(this.props.apartment, apt);
    return(
      <div>
        <ul>
          <li>{apt.address_1}{apt.address_2}</li>
          <li>{apt.city}{apt.state}</li>
          <li>{apt.country}{apt.postal_code}</li>
        </ul>
      </div>

    )
  }
}





export default Detail
