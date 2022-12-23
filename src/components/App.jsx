import React from "react";
import ReactDOM from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import SectionTitle from "./SectionTitle/SectionTitle";


class App extends React.Component {
  state={
    good:0,
neutral:0,
bad:0,
total:0,
positivePersentage:0
  }

  onLeaveFeedback(options){
    
  }
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
