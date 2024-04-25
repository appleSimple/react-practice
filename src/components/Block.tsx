import React, { ReactNode, memo } from 'react';

type BlockProps = {
  children: ReactNode;
};

const Block =  memo(({ children }: BlockProps) => {
  return <div className="block">{children}</div>;
});

export default Block;
