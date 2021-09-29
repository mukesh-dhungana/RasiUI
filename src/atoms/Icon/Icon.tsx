import React, {
  CSSProperties,
  ReactElement,
} from 'react';
import { ReactSVG } from 'react-svg';

const sizes = {
  tiny: '1.125rem',
  small: '0.75rem',
  medium: '3rem',
  large: '4rem',
};

const colors = {
  primary: '#921B6B',
  'primary-75': '#AD5490',
  'primary-50': '#C98DB5',
  'primary-25': '#E3C6DA',
  'primary-10': '#F5E9F1',
  'primary-5': '#F9F3F7',
  secondary: '#6611D2',
  'secondary-75': '#8C4DDD',
  'secondary-50': '#B388E9',
  'secondary-25': '#D8C3F3',
  'secondary-10': '#F0E8FB',
  'secondary-5': '#F7F3FC',
  tertiary: '#F87B17',
  'tertiary-75': '#FA9C51',
  'tertiary-50': '#FCBD8B',
  'tertiary-25': '#FDDEC5',
  'tertiary-10': '#FFF2E8',
  'tertiary-5': '#FEF8F3',
  quaternary: '#1B1E20',
  'quaternary-75': '#545658',
  'quaternary-50': '#8D8F90',
  'quaternary-25': '#C6C6C7',
  'quaternary-10': '#E9E9E9',
  'quaternary-5': '#F3F3F4',
  green: '#39A148',
  'green-75': '#6BB976',
  'green-50': '#9DD1A4',
  'green-25': '#CDE7D1',
  'green-10': '#ECF6ED',
  'green-5': '#F5FAF6',
  red: '#F40B0B',
  'red-75': '#F74848',
  'red-50': '#FA8585',
  'red-25': '#FCC2C2',
  'red-10': '#FEE7E7',
  'red-5': '#FEF2F2',
  'gray-100': '#FFFFFF',
  'gray-200': '#F6F6F6',
  'gray-300': '#959595',
  'gray-400': '#404040',
};

export type IconProps = {
  /**
   * Name of the SVG icon
   */
  name: string;

  /**
   * Optional fill color - default is same as our primary color
   */
  stroke?: 'primary' | 'primary-75' | 'primary-50' | 'primary-25' | 'primary-10' | 'primary-5' |
  'secondary' | 'secondary-75' | 'secondary-50' | 'secondary-25' | 'secondary-10' | 'secondary-5' |
  'tertiary' | 'tertiary-75' | 'tertiary-50' | 'tertiary-25' | 'tertiary-10' | 'tertiary-5' |
  'quaternary' | 'quaternary-75' | 'quaternary-50' | 'quaternary-25' | 'quaternary-10' | 'quaternary-5' |
  'green' | 'green-75' | 'green-50' | 'green-25' | 'green-10' | 'green-5' |
  'red' | 'red-75' | 'red-50' | 'red-25' | 'red-10' | 'red-5' |
  'gray-100' | 'gray-200' | 'gray-300' | 'gray-400' | 'none';
  /**
   * size of icon, defaults to tiny
   */
  size?: 'tiny' | 'small' | 'medium' | 'large';

  /**
   * Optional CSS class
   */
  className?: string;

  fill?: string;

  /**
   * Optional style object
   */
  style?: CSSProperties;

  /**
   * optional alternative icon source if not using one from the icon library
   * Overrides name as the source of the icon if provided
   */
  altSrc?: string;

  /**
   * Accessibility title
   */
  a11yTitle?: string;

  /**
   * Accessibility description
   */
  a11yDescription?: string;
};

function Icon({
  name,
  stroke = 'primary',
  className = '',
  altSrc = '',
  size = 'tiny',
  a11yTitle,
  fill = "gray-100",
  a11yDescription,
  ...others
}: IconProps): ReactElement {
  const beforeInjection = (svg: SVGElement): void => {
    const dimensions = sizes[size];

    // restrict stroke options to only allowed set of colors for maintaining color consistency
    // across the board
    const _stroke = colors[stroke];

    /* eslint-disable no-param-reassign */
    svg.style.width = dimensions;
    svg.style.height = dimensions;
    svg.style.stroke = _stroke;
    svg.style.boxShadow = className == 'icon-active' ? `0 8px 16px ${colors['secondary-25']}` : '';
    svg.style.fill = colors[fill];
    /* eslint-enable no-param-reassign */

    if (a11yDescription) {
      const ariaDesc = document.createElement('desc');
      ariaDesc.innerHTML = a11yDescription;
      svg.prepend(ariaDesc);
    }

    if (a11yTitle) {
      const ariaTitle = document.createElement('title');
      ariaTitle.innerHTML = a11yTitle;
      svg.prepend(ariaTitle);
    }
  };

  const src = altSrc.length ? altSrc : `https://s3.us-east-2.amazonaws.com/cdn.kripeshbista.com/icons/v1_library/${name}.svg`;
  return (
    <ReactSVG
      beforeInjection={beforeInjection}
      className={className}
      wrapper="span"
      aria-hidden={!a11yTitle}
      src={src}
      role="img"
      {...others}
    />
  );
}

export default Icon;
