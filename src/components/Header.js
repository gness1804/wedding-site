import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => {
  const [content, setContent] = useState({});

  // TODO: replace hardcoded url with variable
  const loadContent = async () => {
    const res = await axios.get('http://localhost:8080/');
    setContent(res.data.content);
  };

  useEffect(() => {
    loadContent();
  }, []);

  return (
    <div>
      {Object.keys(content) && (
        <div className="header-main-container">
          <h1>{content.title}</h1>
        </div>
      )}
    </div>
  );
};

export default Header;
