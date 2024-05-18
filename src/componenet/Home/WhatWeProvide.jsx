import React from 'react';
import signin from '../../assets/sign-in.webp';
import darkdashboard from '../../assets/dashboard.webp';
import WhatWeProvideDesc from '../../ui/WhatWeProvideDesc';

const data = [
  {
    title: 'Authentication',
    subtitle: 'Secure and Easy-to-Use Authentication for Your SaaS Website and API',
    description: 'Our authentication system is built on top of the industry-leading PaaS such as Supabase and Firebase. It is secure, easy-to-use, and fully customizable. It supports email/password, social logins, and more.',
    imgSrc: signin,
    imgAlt: 'sign in image'
  },
  {
    title: 'Dashboard',
    subtitle: 'Powerful and User-Friendly Dashboard for Managing Your Data',
    description: 'Our dashboard provides a comprehensive and intuitive interface for managing your data and user interactions. It supports customizable widgets, real-time analytics, and more.',
    imgSrc: darkdashboard,
    imgAlt: 'dashboard image'
  }
];

const WhatWeProvide = () => {
  return (
    <div className="mt-28 lg:grid lg:grid-cols-2 lg:items-center lg:justify-center lg:gap-x-20">
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <WhatWeProvideDesc
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
          />
          <div className="mt-10">
            <img src={item.imgSrc} alt={item.imgAlt} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default WhatWeProvide;
