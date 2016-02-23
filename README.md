# ember-cli-ascii-spin

This is a simple Ember addon with ASCII spinners.

## Installation

* `ember-cli-ascii-spin`

## Available spinners

```ascii
braille_dots - ⠁ ⠂ ⠄ ⡀ ⢀ ⠠ ⠐ ⠈
braille - ⠋ ⠙ ⠹ ⠸ ⠼ ⠴ ⠦ ⠧ ⠇ ⠏
strokes - \ | / -
balls - ◐ ◓ ◑ ◒
pattern_block - ▤ ▧ ▥ ▨
blocks - ▉ ▊ ▋ ▌ ▍ ▎ ▏ ▎ ▍ ▌ ▋ ▊ ▉
arrows - ← ↖ ↑ ↗ → ↘ ↓ ↙
eye - ◡◡ ⊙⊙ ◠◠
bars - ▁ ▂ ▃ ▄ ▅ ▆ ▇ █ ▇ ▆ ▅ ▄ ▃
```

[screenshot.png](screenshot.png).

## Usage

```hbs
{{!-- Simple usage --}}
{{ascii-spinner default_spinner='braille_dots' default_interval=100}}

{{!-- With custom --}}
{{ascii-spinner custom_spinner='⠁ ⠂ ⠄ ⡀ ⢀ ⠠ ⠐ ⠈'}}
```

## Options
`default_spinner` - default spinner `default:braille`,
`default_interval` - update interval (in milliseconds) `default: 150`,
`custom_spinner` - custom spinner definition (put spaces between each element)
```
