import React, { useState } from 'react';

const Banner = () => {
  const containerStyle = {
    position: 'relative',
    height: '500px',
  };

  const backgroundImageStyle = {
    backgroundImage: 'url("https://img.freepik.com/premium-photo/group-diverse-people-as-donation-community-service-volunteer_53876-38815.jpg?w=740")',
    filter: 'brightness(20%)', // Adjust the brightness value as needed for the background
    height: '100%',
  };

  const textContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  };

  const h1Style = {
    color: 'white',
    fontSize: '2.5rem',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: '10px',
    border: 'none',
    borderRadius: '4px 0 0 4px',
    outline: 'none',
  };

  const buttonStyle = {
    background: '#4B5563',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
  };

  // State for storing the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search button click
  const handleSearchClick = () => {
    // You can perform a search action here with the 'searchQuery' state
    console.log('Search Query:', searchQuery);
  };

  return (
    <div style={containerStyle}>
      <div
        className="bg-cover bg-center"
        style={backgroundImageStyle}
      ></div>
      <div style={textContainerStyle}>
        <h1 style={h1Style}>I Grow By Helping People In Need</h1>
        <div>
          <input
            type="text"
            placeholder="Search..."
            style={inputStyle}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="btn btn-error"
            style={buttonStyle}
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
