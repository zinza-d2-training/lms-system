import React from 'react';
import { Content } from '../../../types/contents';

interface Props {
  rawHTML: string | undefined;
  container: React.CSSProperties;
}
export const BasicContent = ({ rawHTML = '', container }: Props) => {
  return (
    <div style={container}>
      <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
    </div>
  );
};
