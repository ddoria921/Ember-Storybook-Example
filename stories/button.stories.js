import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
};

export const Default = () => (
  hbs`
    <div class="m-4">
      <Button>Default</Button>
    </div>
  `
);

export const Secondary = () => (
  hbs`
    <div class="m-4">
      <button class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" type="button">
        Secondary Button
      </button>
    </div>
  `
);

export const withClick = () => ({
  template: hbs`
    <div class="m-4">
      <p class="mb-2">Check the Actions addon tab after clicking on the button.</p>
      <Button @onClick={{this.onClick}}>
        Click Here
      </Button>
    </div>
  `,
  context: {
    onClick: action('onClick'),
  }
})
