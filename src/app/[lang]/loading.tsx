import React from 'react';

const loading = () => {
  return (
    <div>
      <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-700"></div>
      </div>
    </div>
  );
};

export default loading;
