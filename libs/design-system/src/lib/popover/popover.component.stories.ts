import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PopoverComponent } from './popover.component';
import { userEvent, within } from '@storybook/testing-library';

export default {
  title: 'Components/Popover',
  component: PopoverComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<PopoverComponent>;

const Template: Story<PopoverComponent> = (args: PopoverComponent) => ({
  props: args,
});


export const Popover = Template.bind({});
Popover.args = {
}

Popover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  await button.click()
};