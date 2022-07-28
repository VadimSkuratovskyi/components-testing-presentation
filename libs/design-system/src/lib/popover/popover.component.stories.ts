import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PopoverComponent } from './popover.component';

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