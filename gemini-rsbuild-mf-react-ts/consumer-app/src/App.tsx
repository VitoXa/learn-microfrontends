import React from 'react';

const CustomButton = React.lazy(() => import('provider_app/custom-button'));

const App = () => {
  return (
    <div>
      <h1>Consumer App</h1>
      <React.Suspense fallback="Loading Button...">
        <CustomButton />
      </React.Suspense>
    </div>
  );
};

export default App;
