import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Alert',
};

export const Default = () =>
  hbs`
    <Alert @heading="Hello world"/>
  `;

export const withBody = () =>
  hbs`
    <Alert
      @heading="Hello world"
      @body="More information..."
    />
  `;

export const Themes = () =>
  hbs`
    {{#each (array "info" "warning" "danger" "success") as |theme|}}
      <Alert
        class="mb-6"
        @heading={{theme}}
        @type={{theme}}
      />
    {{/each}}
  `;
