import React from 'react';

LoadingSegment = class LoadingSegment extends React.Component {
render() {
  return (
    <div className="ui segment">
      <div className="ui active dimmer">
          <div className="ui big text loader">Loading</div>
      </div>
      <br/> <br/>
      <br/> <br/>
      <br/> <br/>
    </div>
    );
  }
}
