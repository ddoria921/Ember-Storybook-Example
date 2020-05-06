import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Card',
};

export const Default = () => (
  hbs`
    <div class="m-4">
      <Card>
        This is what an empty card looks like
      </Card>
    </div>
  `
);
