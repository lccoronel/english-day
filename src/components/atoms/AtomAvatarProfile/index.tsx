import React from 'react';

import { ImageProfile } from './styles';

interface AtomAvatarProfileProps {
  size: number;
  sourceUrl: string;
}

const AtomAvatarProfile: React.FC<AtomAvatarProfileProps> = ({
  size,
  sourceUrl,
}) => {
  return <ImageProfile size={size} source={{ uri: sourceUrl }} />;
};

export default AtomAvatarProfile;
