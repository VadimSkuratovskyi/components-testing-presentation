import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AlertComponent } from './alert.component';
import { userEvent, within } from '@storybook/testing-library';

export default {
  title: 'Components/Alert',
  component: AlertComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<AlertComponent>;

const Template: Story<AlertComponent> = (args: AlertComponent) => ({
  props: args,
});


export const Alert = Template.bind({});
Alert.args = {
}

Alert.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getAllByRole('button');
  await userEvent.click(button[1]);
};