import React, {useEffect, useState} from 'react';
import HomeScreen from './home-screen';

/**
 * Container Component
 *  - Write down all component logic here
 */
const Home = props => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(true);
  };

  return (
    <HomeScreen
      showPopup={showPopup}
      setShowPopup={setShowPopup}
      handlePopup={handlePopup}
      {...props}
    />
  );
};

export default Home;
