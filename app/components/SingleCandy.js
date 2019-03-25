import React from 'React';

export const SingleCandy = props => {
  const { name, description, quantity, imageUrl } = props.candy;
  return (
    <div className="candy-name">
      <h1>{name}</h1>
      <p>{description}</p>
      <h3>{quantity}</h3>
      <img className="imgUrl" src={imageUrl} />
    </div>
  );
};
