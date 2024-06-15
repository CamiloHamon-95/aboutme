import { ReactComponent as IconLight } from './light-mode.svg';
import { ReactComponent as IconDark } from './dark-mode.svg';
import { ReactComponent as IconGitHub } from './github.svg';
import { ReactComponent as IconLinkedIn } from './linked.svg';
import { ReactComponent as IconYouTube } from './youtube.svg';
import { ReactComponent as IconCv } from './curriculum-vitae.svg';
import { ReactComponent as IconMenu } from './menu.svg';
import { ReactComponent as IconX } from './delete.svg';
import React from 'react';
import './TodoIcon.css';

const iconTypes = {
  'light-mode': () => <IconLight className="Icon-svg" />,
  'dark-mode': () => <IconDark className="Icon-svg" />,
  'github': () => <IconGitHub className="Icon-svg" />,
  'linkedin': () => <IconLinkedIn className="Icon-svg" />,
  'youtube': () => <IconYouTube className="Icon-svg" />,
  'cv': () => <IconCv className="Icon-svg" />,
  'menu': () => <IconMenu className="Icon-svg svg-menu-x" />,
  'x': () => <IconX className="Icon-svg svg-menu-x" />
};

function TodoIcon({ type }) {

  return (
    iconTypes[type]()
  )
}

export { TodoIcon };