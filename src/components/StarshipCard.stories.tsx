import { Meta, StoryObj } from '@storybook/react';
import { StarshipCard } from './StarshipCard';

type StarshipCardProps = {
  name: string;
  model: string;
};

const meta: Meta<typeof StarshipCard> = {
  title: 'Components/StarshipCard',
  component: StarshipCard,    
  tags: ['autodocs'],              
};

export default meta;

type Story = StoryObj<typeof StarshipCard>;

export const Default: Story = {
  args: {
    name: 'Millennium Falcon',
    model: 'YT-1300 light freighter',
  },
};
