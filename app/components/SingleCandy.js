import React, { Component } from 'React';

export const SingleCandy = props => {
  const { name, description, quantity, imageUrl } = props.candy;
  return (
    <div className="candy-name">
      <h1>{name}</h1>
      <div>{description}</div>
      <h3>{quantity}</h3>
      <div>{imageUrl}</div>
    </div>
  );
};
