import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  handleClick(buttonText) {
    if (this.props.quiz_question.answer === buttonText) {
      this.props.showNextQuestionHandler(buttonText);
    }
  }
  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map(
              (answer_option, index) => (
                <QuizQuestionButton
                  clickHandler={this.handleClick.bind(this)}
                  key={index}
                  button_text={answer_option}
                />
              )
            )}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;