import React from 'react';
import './card.css';

interface CardProps {
  title?: string;
  content?: string;
  image?: string;
  tag?: string;
  userImg?: any;
  titleImg?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  tag,
  image,
  userImg,
  titleImg
}) => {

  const renderUserImg = <div className="card-image">{userImg}</div> 
  const renderTitleImg = titleImg && (
    <img src={titleImg} alt="Title" height="12" width="12" />
  );

  const renderTag = tag && (
    <div className='card-tag'>
      <img src="/fillCircle.svg" alt="Tag Icon" height="12" width="12" />
      {tag}
    </div>
  );

  const renderImage = image && (
    <img src={image} alt="CardIMage" className="card-image" />
  );

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          {title}
          {renderUserImg}
        </div>
        <div className="card-content">
          {renderTitleImg}
          {content}
        </div>
        <div className="card-content-bottom">
          {renderImage}
          {renderTag}
        </div>
      </div>
    </div>
  );
};

export default Card;