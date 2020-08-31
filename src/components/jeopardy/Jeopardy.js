import React from 'react';
import JeopardyService from '../../services/jeopardyService';
import Display from '../display/Display';

class Jeopardy extends React.Component {
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      userGuess: '',
    }
  }

  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }

  componentDidMount() {
    this.getNewQuestion();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let score = this.state.score;
    if (this.state.userGuess === this.state.data.answer) {
      score += this.state.data.value
    } else {
      score -= this.state.data.value
    }
    this.setState({
      score
    });
    this.getNewQuestion()
  }

  handleChange = (event) => {
    let userGuess = event.target.value
    this.setState({ userGuess })

  }

  render() {
    let category = "loading";
    if (this.state.data.category) {
      category = this.state.data.category.title
    }
    return (
      <div className='Jeopardy'>
        <Display score={this.state.score} question={this.state.data.question} value={this.state.data.value} category={category} handleSubmit={this.handleSubmit} handleChange={this.handleChange} userGuess={this.userGuess} />

      </div>
    );
  }
}
export default Jeopardy;