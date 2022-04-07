import React from 'react';

interface MainContentProps {
  children?: React.ReactNode;
}

const MainContent = (props: MainContentProps) => {
  const { children, ...other } = props;
  return <div {...other}>{children}</div>;
};

export default MainContent;
