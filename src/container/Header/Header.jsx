import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Welcome! May the best food find your appetite" />
      <h1 className="app__header-h1">You Don’t Need A Silver Fork To Eat Good Food.</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.biryani} alt="header_img" />
    </div>
  </div>
);

export default Header;
