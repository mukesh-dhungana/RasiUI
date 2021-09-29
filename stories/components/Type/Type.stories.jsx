/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Typography/Type',
  decorators: [withKnobs],
};

export const AllTypeStyles = () => {
  const displayText = text('Text', 'Welcome Back!');
  return (
    <div>
      <h1 className="h0">
        h0:
        {' '}
        {displayText}
      </h1>
      <h1>
        h1:
        {' '}
        {displayText}
      </h1>
      <h2>
        h2:
        {' '}
        {displayText}
      </h2>
      <h3>
        h3:
        {' '}
        {displayText}
      </h3>
      <h4>
        h4:
        {' '}
        {displayText}
      </h4>
      <h5>
        h5:
        {' '}
        {displayText}
      </h5>
      <h6>
        h6:
        {' '}
        {displayText}
      </h6>
    </div>
  );
};

export const HeadingZero = () => (
  <div>
    <h1 className="h0">h0. Welcome Back!</h1>
    <br />
    <p>Font: Brother 1816 Medium</p>
    <p>Size: 32px</p>
    <p>Line Height: 150%</p>
  </div>
);

export const HeadingOne = () => (
  <div>
    <h1>h1. Payroll (Jul 4 - Jul 16)</h1>
    <br />
    <p>Font: Neue Haas Unica Pro</p>
    <p>Size: 24px</p>
    <p>Line Height: 150%</p>
  </div>
);

export const HeadingTwo = () => (
  <div>
    <h2>h2. Group Vendors</h2>
    <br />
    <p>Font: Neue Haas Unica Pro</p>
    <p>Size: 20px</p>
    <p>Line Height: 150%</p>
  </div>
);

export const HeadingThree = () => (
  <div>
    <h3>h3. Add Group Vendor</h3>
    <br />
    <p>Font: Neue Haas Unica Pro</p>
    <p>Size: 18px</p>
    <p>Line Height: 150%</p>
  </div>
);

export const HeadingFour = () => (
  <div>
    <h4>h4. Unmatched External Transactions</h4>
    <br />
    <p>Font: Neue Haas Unica Pro</p>
    <p>Size: 16px</p>
    <p>Line Height: 150%</p>
  </div>
);

export const HeadingFive = () => (
  <div>
    <h5>h5. 379 Vendors, 200 Units, 138 Items</h5>
    <br />
    <p>Font: Neue Haas Unica Pro</p>
    <p>Size: 11px</p>
    <p>Line Height: 150%</p>
  </div>
);

export const HeadingSix = () => (
  <div>
    <h6>h6. UNIT, VENDOR DATE, AMOUNT</h6>
    <br />
    <p>Font: Neue Haas Unica Pro</p>
    <p>Size: 10px</p>
    <p>Line Height: 150%</p>
  </div>
);

export const SubHeading = () => (
  <div>
    <p className="sub-heading">sub-heading</p>
    <br />
    <p>Font: Neue Haas Unica Pro Bold</p>
    <p>Size: 18px</p>
    <p>Line Height: normal</p>
    <p>Styles: Uppercase, Bold, Underline</p>
  </div>
);

export const Paragraph = () => (
  <div>
    <p>Paragraph Text</p>
    <br />
    <p>Font: NeueHaasUnicaW1G-Regular</p>
    <p>Size: 18pt</p>
    <p>Line Height: 22pt</p>
  </div>
);

export const SmallText = () => (
  <div>
    <small>Small text</small>
    <br />
    <br />
    <small>Font: NeueHaasUnicaW1G-Regular</small>
    <br />
    <small>Size: 16pt</small>
    <br />
    <small>Line Height: 20pt</small>
  </div>
);

export const BodyLarge = () => (
  <div>
    <p className="body-large-lg"> 17th Street Distributing </p>
    <p className="body-large-md"> 17th Street Distributing </p>
    <p className="body-large-sm"> 17th Street Distributing </p>
    <br />
    <br />
    <p className="body-large-light-lg"> 17th Street Distributing </p>
    <p className="body-large-light-md"> 17th Street Distributing </p>
    <p className="body-large-light-sm"> 17th Street Distributing </p>
  </div>
);

export const BodyMedium = () => (
  <div>
    <p className="body-medium-lg"> Plaid Checking </p>
    <p className="body-medium-md"> Plaid Checking </p>
    <p className="body-medium-sm"> Plaid Checking </p>
    <br />
    <br />
    <p className="body-medium-light-lg"> Plaid Checking </p>
    <p className="body-medium-light-md"> Plaid Checking </p>
    <p className="body-medium-light-sm"> Plaid Checking </p>
    <br />
    <br />
    <p className="body-medium-secondary-lg"> Add Permanent Deduction or Earning </p>
    <p className="body-medium-secondary-md"> Add Permanent Deduction or Earning </p>
    <p className="body-medium-secondary-sm"> Add Permanent Deduction or Earning </p>
  </div>
);

export const BodyRegular = () => (
  <div>
    <p className="body-regular-lg"> Mark Thompson, Steve Harris </p>
    <p className="body-regular-md"> Mark Thompson, Steve Harris </p>
    <p className="body-regular-sm"> Mark Thompson, Steve Harris </p>
    <br />
    <br />
    <p className="body-regular-light-lg"> Mark Thompson, Steve Harris </p>
    <p className="body-regular-light-md"> Mark Thompson, Steve Harris </p>
    <p className="body-regular-light-sm"> Mark Thompson, Steve Harris </p>
    <br />
    <br />
    <p className="body-regular-text">Please confirm that the list above contains all accounts RSI would need access to for this banking instittution.</p>
  </div>
);

export const BodySmall = () => (
  <div>
    <p className="body-small-lg"> Ideal Cost, Budget Year, Budget Name </p>
    <p className="body-small-md"> Ideal Cost, Budget Year, Budget Name </p>
    <p className="body-small-sm"> Ideal Cost, Budget Year, Budget Name </p>
    <br />
    <br />
    <p className="body-small-light-lg"> Ideal Cost, Budget Year, Budget Name </p>
    <p className="body-small-light-md"> Ideal Cost, Budget Year, Budget Name </p>
    <p className="body-small-light-sm"> Ideal Cost, Budget Year, Budget Name </p>
    <br />
    <br />
    <p className="body-small-text">Please confirm that the list above contains all accounts RSI would need access to for this banking instittution.</p>
  </div>
);

export const BodyExtraSmall = () => (
  <div>
    <p className="body-extra-small-lg"> Accounts Payable, Payroll, Users </p>
    <p className="body-extra-small-md"> Accounts Payable, Payroll, Users </p>
    <p className="body-small-sm"> Accounts Payable, Payroll, Users </p>
    <br />
    <br />
    <p className="body-extra-small-light-lg"> Accounts Payable, Payroll, Users </p>
    <p className="body-extra-small-light-md"> Accounts Payable, Payroll, Users </p>
    <p className="body-extra-small-light-sm"> Accounts Payable, Payroll, Users </p>
    <br />
    <br />
    <p className="body-extra-small-text">Please confirm that the list above contains all accounts RSI would need access to for this banking instittution.</p>
  </div>
);