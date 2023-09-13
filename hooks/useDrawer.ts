'use client';

import {useState} from 'react';

export const useDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  return {isOpen, toggleDrawer, closeHandler};
};
