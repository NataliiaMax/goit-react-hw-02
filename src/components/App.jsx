import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import SectionTitle from './SectionTitle/SectionTitle';
import Notification from './Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const results = good + neutral + bad;
    return results;
  };

  countPositiveFeedbackPercentage = good => {
    return Math.round((good / this.results) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <SectionTitle title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </SectionTitle>
        <SectionTitle title={'Statistics'}>
          {this.results > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </SectionTitle>
      </>
    );
  }
}

export default App;
