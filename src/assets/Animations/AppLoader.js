import React from 'react';
import Lottie from 'react-lottie';
// import animationData from './animation.json';

const AppLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: "https://assets7.lottiefiles.com/private_files/lf30_l8csvun7.json",
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div style={styles.container}>
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
    height: '100vh',
  },
};

export default AppLoader;