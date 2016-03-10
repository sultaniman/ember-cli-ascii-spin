# ember-cli-ascii-spin

This is a simple Ember addon with ASCII spinners.


## Installation

```sh
$ ember install ember-cli-ascii-spin
```

## Available spinners
I decided to use spinners from [cli-spinners](https://github.com/sindresorhus/cli-spinners) by [@sindresorhus](https://github.com/sindresorhus/)

![spinners](https://github.com/imanhodjaev/ember-cli-ascii-spin/raw/master/samples.gif)
![spinners](https://github.com/sindresorhus/cli-spinners/raw/master/screenshot.gif)

## Usage

```hbs
{{!-- Simple usage --}}
{{ascii-spinner spinner='dots' interval=100}}

{{!-- With custom --}}
{{ascii-spinner custom='⠁ ⠂ ⠄ ⡀ ⢀ ⠠ ⠐ ⠈'}}
```

## Options
* `spinner` - default spinner `default: dots`,
* `interval` - update interval (in milliseconds) `default: 150`,
* `custom` - custom spinner definition (put spaces between each element) `format: '⠁ ⠂ ⠄ ⡀ ⢀ ⠠ ⠐ ⠈'`
