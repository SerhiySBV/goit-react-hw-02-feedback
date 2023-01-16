import React from 'react';
import Statistics from 'components/Feedback/Statistics';
import Buttons from 'components/Feedback/Buttons';

class Feedback extends React.Component {
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
      console.log(prevState.bad);
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  //   totalFeedback = () => {
  //     this.State(prevState => {
  //       const totalFeedback = prevState.bad + prevState.good + prevState.neutral;
  //       console.log(totalFeedback);
  //       return totalFeedback;
  //     });
  //   };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <Buttons
          onGood={this.goodFeedback}
          onNeutral={this.neutralFeedback}
          onBad={this.badFeedback}
        />
        <Statistics
          //   total={this.totalFeedback}
          onGood={this.state.good}
          onBad={this.state.bad}
          onNeutral={this.state.neutral}
        />
      </div>
    );
  }
}

export default Feedback;
