import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AlertComponent } from './alert.component';

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