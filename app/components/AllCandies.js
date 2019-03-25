import React from 'react';
import { buildSetCandiesThunk } from '../store';
import { SingleCandy } from './SingleCandy';
import { connect } from 'react-redux';

export class DisconnectedAllCandies extends React.Component {
  componentDidMount() {
    this.props.fetchCandies();
  }

  render() {
    console.log(this.props)
    return (
      <div id="candies">
        {this.props.candies.map(candy => (
          <SingleCandy key={candy.id} candy={candy} />
        ))}
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

export const AllCandies = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisconnectedAllCandies);
