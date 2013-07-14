
# modal

  Streamlined, but flexible, dialog prompts with the minimum required
  functionality and smart defaults.

## Installation

  Install with [component(1)](http://component.io):

    $ component install bootmi/modal

## Events

  - `show` the dialog is shown
  - `hide` the dialog is hidden
  - `escape` the dialog was closed via the escape key
  - `close` the dialog was closed via the close button

## API

### Modal(options)

  Possible options are:

  - `title` title of the dialog
  - `message` message to show

### Dialog#show()

  Show the dialog.

### Dialog#hide([ms])

  Hide the dialog immediately or wait `ms`.

### Dialog#addClass(name)

  Add class `name`, useful for styling dialogs differently.

## License

  MIT
