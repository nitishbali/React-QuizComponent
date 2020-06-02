import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";
let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1,
    };
  }
  handleResetClick() {
    this.setState({ quiz_position: 1 });
  }

  showNextQuestion() {
    this.setState((state) => ({ quiz_position: state.quiz_position + 1 }));
  }
  render() {
    let position =
      this.state.quiz_position - 1 === quizData.quiz_questions.length;
    const isQuizEnd = position;
    return (
      <React.Fragment>
        {isQuizEnd ? (
          <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />
        ) : (
          <QuizQuestion
            quiz_question={
              quizData.quiz_questions[this.state.quiz_position - 1]
            }
            showNextQuestionHandler={this.showNextQuestion.bind(this)}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Quiz;
