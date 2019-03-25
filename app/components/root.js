import React from 'react';
import { buildSetCandiesThunk } from '../store';
import { AllCandies } from './AllCandies';
import { connect } from 'react-redux';

export class DisconnectedRoot extends React.Component {
  componentDidMount() {
    this.props.fetchCandies();
  }

  render() {
    return (
      <div>
        <nav>Goodie Bag</nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
          <AllCandies candies={this.props.candies} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  candies: state.candies,
});

const mapDispatchToProps = dispatch => ({
  fetchCandies: () => dispatch(buildSetCandiesThunk()),
});

export const Root = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisconnectedRoot);
