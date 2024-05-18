
// import { fn } from '@storybook/test';
import { action } from '@storybook/addon-actions';
import TextField from './TextField';
import './TextField.css'
import { ColorControl } from '@storybook/blocks';

export default {
  title: 'atoms/TextField',
  component: TextField,
  // decorators: [
  //   (Story) => (
  //     <div style={{ margin: '5em' }}>
  //       {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
  //       <Story />
  //     </div>
  //   ),
  // ],
  parameters:{
    layout: 'centered'
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        size: ['small', 'medium', 'large'],
      },
    },
  },
  value:{
    control : 'Color'
  },
  args: { onClick: action() },
};

const Template = (args) => <TextField {...args} />;

export const Small = Template.bind({});
Small.args = {
  placeholder: 'Enter UserName',
  value: '',
  onChange: action('Text changed'),
  size: 'Small',
};

export const Medium = Template.bind({});
Medium.args = {
  placeholder: 'Enter UserName',
  value: '',
  onChange: action('Text changed'),
  size: 'Medium',
};

export const Large = Template.bind({});
Large.args = {
  placeholder: 'Enter UserName',
  value:'',
  onChange: action('Text changed'),
  size: 'Large',
};