
// import './index.css';
// import Main from './assets/main';

// import Page2 from './assets/page2';

// function App() {
//   return (
//    <div>
//    <Main/>
   
//    <Page2/>
//    </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import './index.css';
import Main from './assets/main';
import Page2 from './assets/page2';

function App() {
  const [showMain, setShowMain] = useState(true);

  useEffect(() => {
    
    const timeoutId = setTimeout(() => {
      setShowMain(false);
    }, 1000); 

   
    return () => clearTimeout(timeoutId);
  }, []); 
  return (
    <div>
      {showMain && <Main />}
      {!showMain && <Page2 />}
    </div>
  );
}

export default App;

