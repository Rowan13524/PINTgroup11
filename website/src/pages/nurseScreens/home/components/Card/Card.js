import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosReturnLeft } from 'react-icons/io';
import { FiActivity } from 'react-icons/fi';
import FrontCard from './FrontCard';
import BackCard from './BackCard';
import './CardStyles.css';


const page = "/nurse-home-screen/graph"

const Card = () => {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const handleFlipCard = (event) => {
    event.stopPropagation();
    setIsCardFlipped(!isCardFlipped);
  };

  const nav = useNavigate();
  const handleGoToPage = () => {
    nav(page);
  };

  return (
    <div className="card-container-holder">
      <div className={isCardFlipped ? 'card-container is-flipped' : 'card-container'}>
        <div className="card-face front-card-container">
          <FrontCard />
          <button className="button-flip" onClick={handleFlipCard} type="button" title="Patient Info">
            <IoIosReturnLeft size={30} className="icon" />
          </button>
          <button className="button-detail" onClick={handleGoToPage} type="button" title="Graph">
            <FiActivity size={22} color="#FF4B2B" className="icon" />
          </button>
        </div>
        <div className="card-face back-card-container">
          <BackCard />
          <button className="button-flip" onClick={handleFlipCard} type="button" title="Real Data">
            <IoIosReturnLeft size={30} className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
