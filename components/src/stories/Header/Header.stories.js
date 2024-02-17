import { Header } from './Header';

export default {
  title: 'COMPONENTS/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: 'Drex',
    },
  },
};

export const LoggedOut = {};
