import React from 'react';
import { PRIMARY } from 'src/theme/colors';

export default function OneTimeIcon(): JSX.Element {
  return (
    <svg width="80" height="56" viewBox="0 0 80 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M51.2605 56C43.4345 56 36.8058 53.2843 31.3743 47.8528C25.9429 42.4214 23.2271 35.7927 23.2271 27.9667C23.2271 20.1992 25.9429 13.5962 31.3743 8.1577C36.8058 2.71924 43.4345 0 51.2605 0C59.0281 0 65.6311 2.71924 71.0695 8.1577C76.508 13.5962 79.2272 20.1992 79.2272 27.9667C79.2272 35.7927 76.508 42.4214 71.0695 47.8528C65.6311 53.2843 59.0281 56 51.2605 56ZM51.2272 52C57.8939 52 63.5606 49.6667 68.2272 45C72.8939 40.3333 75.2272 34.6667 75.2272 28C75.2272 21.3333 72.8939 15.6667 68.2272 11C63.5606 6.33333 57.8939 4 51.2272 4C44.5606 4 38.8939 6.33333 34.2272 11C29.5606 15.6667 27.2272 21.3333 27.2272 28C27.2272 34.6667 29.5606 40.3333 34.2272 45C38.8939 49.6667 44.5606 52 51.2272 52ZM61.0964 40.8231L63.9503 37.9692L53.2272 27.2461V13.2308H49.2272V28.8539L61.0964 40.8231ZM4.76563 14V10H19.2271V14H4.76563ZM0.765625 30V26H19.2271V30H0.765625ZM4.76563 46V42H19.2271V46H4.76563Z"
        fill={PRIMARY.main}
      />
    </svg>
  );
}
