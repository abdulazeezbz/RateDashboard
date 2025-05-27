'use client';
import { useState } from 'react';







interface CollapsedNavProps {
  items: {
    name: string;
    title: string;
  }[];
}

const CollapsedNav = ({ items }: CollapsedNavProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
  <div className='coll'>
    <div className="slide shadow p-1 m-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`list cursor-pointer px-4 py-2 rounded ${
            activeIndex === index ? 'bg-blue-500 text-white active' : 'bg-white text-black'
          }`}
          onClick={() => setActiveIndex(index)}
        >
          {item.name} ({item.title})
        </div>
      ))}

      <i className='fa fa-add p-2' ></i>
    </div>

    <div className='right'>Refresh</div>
  </div>
  );
};

export default CollapsedNav;
