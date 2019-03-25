import React from 'react';
import { SingleCandy } from './SingleCandy';

export const AllCandies = props => {
  const { candies } = props;
  return (
    <div id="candies">
      {candies.map(candy => (
        <SingleCandy key={candy.id} candy={candy} />
      ))}
    </div>
  );
};
