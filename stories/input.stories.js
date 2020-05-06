import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Input',
};

export const Default = () => (
  hbs`
    <div class="m-4">
      <Input placeholder="name"/>
    </div>
  `
);

export const withLabel = () => (
  hbs`
    <div class="m-4">
      <Input @label="Name" placeholder="Steve"/>
    </div>
  `
);
