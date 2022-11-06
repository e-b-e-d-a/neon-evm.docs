import React from 'react';
import Link from '@docusaurus/Link';
import './style.css';

export interface CommonBannerBlockProps {
  title: string;
  description: string;
  icon: string;
  background: string;
  to: string;
  imageStyle: any;
}

export const CommonBannerBlock = (props: CommonBannerBlockProps) => {
  const { description, icon, background, to, imageStyle } = props;

  return <Link className={'common-banner'} style={{ background }} to={to}>
    <div className={'image'}>
      <img src={icon} alt={icon} style={imageStyle} />
    </div>
    <p dangerouslySetInnerHTML={{ __html: description }}></p>
  </Link>;
};
