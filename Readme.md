
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

### modal(options)

  Possible options are:

  - `title` title of the modal
  - `message` message to show

### Modal#show()

  Show the modal.

### Modal#hide()

  Hide the modal.

### Modal#toggle()

  Toggle the status.

## License

  MIT
