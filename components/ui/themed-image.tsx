import Image from 'next/image';
import React from 'react';

export const ThemedImage: React.FC = () => {
  return (
    <Image
      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      width={400}
      height={400}
      alt="themed-image"
    />
  );
};
