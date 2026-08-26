import React from 'react';
import { InstagramReels } from './InstagramReels';
import { PortalType } from '../../types';

interface InstagramSectionProps {
  currentPortal: PortalType;
}

export const InstagramSection: React.FC<InstagramSectionProps> = (props) => {
  return <InstagramReels {...props} />;
};

export { InstagramReels };
