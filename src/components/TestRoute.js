// React component for the /test route
import React, { useEffect, useState } from 'react';

const TestRoute = () => {
  const [astroContent, setAstroContent] = useState('');

  useEffect(() => {
    // Fetch the Astro route content from the server
    fetch('/test')
      .then(response => response.text())
      .then(content => setAstroContent(content));
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: astroContent }} />
  );
};

export default TestRoute;
