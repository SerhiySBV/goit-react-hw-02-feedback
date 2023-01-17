import React, { Component } from 'react';
import Statistics from 'components/Feedback/Statistics';
import Buttons from 'components/Feedback/Buttons';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodFeedback = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  neutralFeedback = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  badFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    // Totatl
    let countTotalFeedback = good + neutral + bad;

    //   Positiv feedbacks
    let countPositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback) * 100
    );

    return (
      <div>
        <h1>Please leave feedback</h1>
        <Buttons
          onGood={this.goodFeedback}
          onNeutral={this.neutralFeedback}
          onBad={this.badFeedback}
        />
        <Statistics
          positivFeedback={countPositiveFeedbackPercentage}
          total={countTotalFeedback}
          onGood={good}
          onBad={bad}
          onNeutral={neutral}
        />
      </div>
    );
  }
}

export default Feedback;
