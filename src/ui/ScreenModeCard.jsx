import React from 'react';
import Card from './Card';
import moon from '../assets/moon.svg';
import sun from '../assets/sun.svg';
import { motion } from 'framer-motion';

const themes = [
  { icon: sun, text: 'light' },
  { icon: moon, text: 'dark' }
];

const ScreenModeCard = () => {
  return (
    <Card>
      <motion.div
        className='pl-2 w-[124px]'
        exit={{ opacity: 0 }}

      >
        <h6 className='font-medium'>Theme</h6>
        {themes.map((theme, index) => (
          <Item key={index} icon={theme.icon} text={theme.text} />
        ))}
      </motion.div>
    </Card>
  );
};

const Item = ({ icon, text }) => {
  return (
    <div className="flex my-2 items-center cursor-pointer hover:bg-[#17182A] rounded-md p-1">
      <img className="h-5 mr-2" src={icon} alt={`${text} icon`} />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

export default ScreenModeCard;
