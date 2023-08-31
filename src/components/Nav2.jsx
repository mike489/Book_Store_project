import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav2() {
  const arrow = '>';

  return (
    <div className="second-nav h-20 bg-green-100 pl-40 font-semibold text-green-700 flex items-center text-x1">
      <p><Link to="/">Home {arrow}</Link> Gala Apples</p>
    </div>
  );
}
