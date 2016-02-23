import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ascii-spinner', 'Integration | Component | ascii spinner', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{ascii-spinner}}`);
  assert.equal(this.$().text().trim(), '');
  assert.ok(this.$().find('.ascii-spinner'));
});
