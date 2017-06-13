import React, { Component } from 'react';
import Card from '../components/Card';
import $ from 'jquery-ajax';

class Tarpy extends Component {
constructor(props) {
  super(props)
  this.state = {
    cards: []
  }
}

componentDidMount(){
  this.fetchData()
}

fetchData(){
  $.get(`/api/entries`)
  .then((res) => {
    this.setState({
      cards: res
    })
  })
}

render(){
  return (
    <div>
    {this.state.cards.map((card) => <Card title={card.title} />)}
    </div>
  )
}


}

export default Tarpy;
