# ember-cli-ascii-spin

This is a simple Ember addon with ASCII spinners.

## Installation

```sh
$ ember install ember-cli-ascii-spin
```

## Available spinners

```ascii
braille-dots - ⠁ ⠂ ⠄ ⡀ ⢀ ⠠ ⠐ ⠈
braille - ⠋ ⠙ ⠹ ⠸ ⠼ ⠴ ⠦ ⠧ ⠇ ⠏
strokes - \ | / -
balls - ◐ ◓ ◑ ◒
pattern-block - ▤ ▧ ▥ ▨
blocks - ▉ ▊ ▋ ▌ ▍ ▎ ▏ ▎ ▍ ▌ ▋ ▊ ▉
arrows - ← ↖ ↑ ↗ → ↘ ↓ ↙
eye - ◡◡ ⊙⊙ ◠◠
bars - ▁ ▂ ▃ ▄ ▅ ▆ ▇ █ ▇ ▆ ▅ ▄ ▃
```

![spinners](https://raw.githubusercontent.com/imanhodjaev/ember-cli-ascii-spin/master/screenshot.png)

## Usage

```hbs
{{!-- Simple usage --}}
{{ascii-spinner spinner='braille_dots' interval=100}}

{{!-- With custom --}}
{{ascii-spinner spinner='⠁ ⠂ ⠄ ⡀ ⢀ ⠠ ⠐ ⠈'}}
```

## Options
* `spinner` - default spinner `default:braille`,
* `interval` - update interval (in milliseconds) `default: 150`,
* `custom` - custom spinner definition (put spaces between each element)
