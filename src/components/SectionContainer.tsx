import React, { forwardRef } from 'react';
import { gridStyles } from '../App';
import clsx from 'clsx';

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const SectionContainer = forwardRef<HTMLDivElement, SectionContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={clsx(gridStyles, className)}>
        <div className="hidden lg:block">{/* left space */}</div>
        {children}
        <div className="hidden lg:block">{/* right space */}</div>
      </div>
    );
  }
);

export default SectionContainer;
