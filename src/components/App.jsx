import React from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';


export class App extends React.Component {
  state = {
 good: 0,
  neutral: 0,
  bad: 0
  }
  
onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

   countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;       
    }
    
  countPositiveFeedbackPercentage = () => {
     const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total === 0 ? 0 : Math.round((good / total) * 100);
    }

    render() {
    const good = this.state.good;
    const bad = this.state.bad;
    const neutral = this.state.neutral;
    const total = this.countTotalFeedback(good, bad, neutral);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      bad,
      neutral
      );
      
      let content;
    if (total === 0) {
content = <Notification message="There is no feedback" />;
    } else {
      content = (<Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />);
    }
      return (
          <>
            <h1>Please leave feedback</h1>
          <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
          />
 <h1>Statistics</h1>
        {content}

          {/* <div className="Grade">
              <button type="button" onClick= {() => this.setState({ good: good + 1 })}>Good</button>
                    <button type="button" onClick={() => this.setState({ neutral: neutral + 1 })}>Neutral</button>
                    <button type="button" onClick={() => this.setState({ bad: bad + 1 })}>Bad</button>
                </div>
                <div className="Statistics">
                    <h2 className="Statistics header">Statistics</h2>
                    <p>Good: {good} </p> 
                    <p>Neutral: {neutral} </p>
                    <p>Bad: {bad} </p>
                    <p>Total: {this.countTotalFeedback()} </p>
                    <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
                </div> */}
</>
        )
    }
};
