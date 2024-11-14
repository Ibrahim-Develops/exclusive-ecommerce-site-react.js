import React, { useState, useEffect } from 'react';
import { LineWave } from 'react-loader-spinner';

const SpinnerExample = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <LineWave
        visible={true}
        height="200"
        width="200"
        color="black"
        ariaLabel="line-wave-loading"
      />
    </div>
  );
}

export default SpinnerExample;
