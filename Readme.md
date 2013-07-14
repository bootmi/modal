
# modal

  Streamlined, but flexible, dialog prompts with the minimum required
  functionality and smart defaults.

## Installation

  Install with [component(1)](http://component.io):

    $ component install bootmi/modal

## Events

  - `show` This event fires immediately when the show instance method
    is called.
  - `hide` This event is fired immediately when the hide instance
    method has been called.
  - `shown` This event is fired when the modal has been made visible
    to the user (will wait for css transitions to complete).
  - `hidden` This event is fired when the modal has finished being
    hidden from the user (will wait for css transitions to complete).

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
