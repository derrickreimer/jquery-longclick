# Longclick

A jQuery plugin for long button clicks. Extracted from
[Codetree](https://codetree.com), inspired by UI patterns found
in [Zapier](https://zapier.com).

## Usage

Some buttons lead to particularly destructive actions (like the classic "Delete"
button). One common way to help users avoid accidentally perform a destructive
action is to prompt them with an "Are you sure?" dialog box.

This plugin helps you employ an alternative strategy: the long button click.
When a user pushes down on a long click button, this plugin can automatically
swap out the button text for something like "Hold to delete...". If the user
continues to hold down the button for a set duration of time (default of 1
second), then a `longclick` event will be fired.

```javascript
$("#delete-button").longclick({
  holdText: "Hold to delete...",  // default: "Hold..."
  duration: 1000                  // default: 1000
}).on("longclick", function() {
  // do something
})
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
