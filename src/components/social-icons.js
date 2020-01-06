import React from 'react';
import ThemeColors from '../utils/theme';
import { rhythm } from '../utils/typography';

const socialIconStyles = {
  width: rhythm(1.15),
  fill: ThemeColors.muted,
};

export const TwitterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      css={socialIconStyles}
    >
      <path
        d="M400,200c0,110.5-89.5,200-200,200S0,310.5,0,200S89.5,0,200,0S400,89.5,
          400,200z M163.4,305.5 c88.7,0,137.2-73.5,137.2-137.2c0-2.1,
          0-4.2-0.1-6.2c9.4-6.8,17.6-15.3,24.1-25c-8.6,3.8-17.9,6.4-27.7,7.6 c10-6,
          17.6-15.4,21.2-26.7c-9.3,5.5-19.6,9.5-30.6,11.7c-8.8-9.4-21.3-15.2-35.2-15.2c-26.6,
          0-48.2,21.6-48.2,48.2c0,3.8,0.4,7.5,1.3,11c-40.1-2-75.6-21.2-99.4-50.4c-4.1,
          7.1-6.5,15.4-6.5,24.2c0,16.7,8.5,31.5,21.5,40.1c-7.9-0.2-15.3-2.4-21.8-6c0,
          0.2,0,0.4,0,0.6c0,23.4,16.6,42.8,38.7,47.3c-4,1.1-8.3,1.7-12.7,1.7c-3.1,
          0-6.1-0.3-9.1-0.9c6.1,19.2,23.9,33.1,45,33.5c-16.5,12.9-37.3,20.6-59.9,
          20.6c-3.9,0-7.7-0.2-11.5-0.7C110.8,297.5,136.2,305.5,163.4,305.5"
      />
    </svg>
  );
};

export const GitHubIcon = () => {
  return (
    <svg
      viewBox="0 0 45 44"
      xmlns="http://www.w3.org/2000/svg"
      css={socialIconStyles}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.4773 0.926669C10.4853 0.926669 0.759979 10.6507 0.759979
          22.6467C0.759979 32.2414 6.98265 40.3827 15.6133 43.256C16.7 43.4547
          17.096 42.784 17.096 42.208C17.096 41.692 17.0773 40.3267 17.0667
          38.5147C11.0253 39.8267 9.75065 35.6027 9.75065 35.6027C8.76265 33.0934
          7.33866 32.4254 7.33866 32.4254C5.36666 31.0787 7.48799 31.1054 7.48799
          31.1054C9.66799 31.2587 10.8146 33.344 10.8146 33.344C12.752 36.6627
          15.8987 35.704 17.136 35.148C17.3333 33.7454 17.8946 32.788 18.5146
          32.2454C13.692 31.696 8.62132 29.8334 8.62132 21.5107C8.62132 19.1387
          9.46799 17.2014 10.8573 15.6827C10.6333 15.1334 9.88799 12.9253 11.0707
          9.93468C11.0707 9.93468 12.8933 9.35067 17.0426 12.16C18.7746 11.6787
          20.6333 11.4387 22.48 11.4293C24.3253 11.4387 26.1827 11.6787 27.9173
          12.16C32.064 9.35067 33.884 9.93468 33.884 9.93468C35.0693 12.9253
          34.324 15.1334 34.1013 15.6827C35.4933 17.2014 36.3333 19.1387 36.3333
          21.5107C36.3333 29.8547 31.2547 31.6907 26.4173 32.228C27.196 32.8987
          27.8907 34.224 27.8907 36.2507C27.8907 39.1534 27.864 41.496 27.864
          42.208C27.864 42.7894 28.256 43.4654 29.3573 43.2534C37.9813 40.3747
          44.1986 32.2401 44.1986 22.6467C44.1986 10.6507 34.4733 0.926669
          22.4773 0.926669Z"
      />
    </svg>
  );
};
