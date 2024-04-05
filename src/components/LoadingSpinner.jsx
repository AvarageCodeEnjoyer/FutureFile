import React from 'react';

// This uses a loading spinner from the UI Library Daisy UI https://daisyui.com/components/loading
export default function LoadingSpinner() {
  return (
    <div className='container grid'>
      <span className="loading loading-infinity loading-lg text-info px-24 self-center justify-self-center"></span>    
    </div>
  );
};
