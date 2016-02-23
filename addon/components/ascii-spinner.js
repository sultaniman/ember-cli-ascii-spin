import Ember from 'ember';
import layout from '../templates/components/ascii-spinner';
import spinners from '../spinners';


const {on, run, get, set} = Ember;


export default Ember.Component.extend({
  layout,
  tagName: 'span',
  classNames: ['ascii-spinner'],

  // Options
  timer: null,
  counter: 0,
  spinner: 'braille',
  interval: 150,
  custom: null,

  initializeSpinner: on('didInsertElement', function() {
    run.later(this, this.startSpinner);
  }),

  destroySpinner: on('willDestroyElement', function() {
    clearInterval(get(this, 'timer'));
  }),

  /*
   * Start spinning
   */
  startSpinner() {
    let spinner = this.getSpinner();
    let interval = get(this, 'interval');

    let timer = setInterval(() => {
      this.updateSpinner.apply(this, [spinner]);
    }, interval);

    set(this, 'timer', timer);
  },

  /*
   * Update screen and increment counter
   */
  updateSpinner(spinner) {
    let counter = get(this, 'counter');

    if (counter > spinner.length - 1) {
      set(this, 'counter', 0);
    }

    if (spinner[counter - 1]) {
      this.$().text(spinner[counter - 1].trim());
    }

    this.incrementProperty('counter');
  },

  /*
   * Returns spinner sequence if custom
   * spinner specified custom spinner returned
   */
  getSpinner() {
    let custom = get(this, 'custom');
    let spinner = spinners[get(this, 'spinner')];

    if (custom) {
      return custom.split(' ');
    }

    return spinner;
  }
});
