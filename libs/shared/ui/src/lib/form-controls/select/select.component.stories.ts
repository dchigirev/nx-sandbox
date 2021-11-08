import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SelectComponent } from './select.component';

export default {
  title: 'SelectComponent',
  component: SelectComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<SelectComponent>;

const Template: Story<SelectComponent> = (args: SelectComponent) => ({
  component: SelectComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}