import React, { FC } from 'react';

import './info.scss';

interface InfoProps {
  label: string;
  value: string;
}

const Info: FC<InfoProps> = ({ label, value }) => (
  <strong className="info" data-testod="info">
    {label}: <span>{value}</span>
  </strong>
);

export default Info;
