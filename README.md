# Calculator

A basic calculator using vanilla javascript.

[Live Demo](https://tomahawk-jupiter.github.io/calculator/)

The keyboard can be used to input calculations aswell as the onscreen buttons.

## Useful Concepts / Methods

- [DOM Element Selection](#dom-element-selection)
- [Event Listeners](#event-listeners)
- [ForEach](#foreach)
- [Regex](#regex)
- [Unary Plus](#unary-plus)
- [CSS Variables](#css-variables)
- [CSS Calculation](#css-calculation)

### DOM Element Selection

Select DOM elements with `querySelector()` (single) and `querySelectorAll()` (multiple).

### Event Listeners

Add event listeners for keyboard or click events with `addEventListener()`.

### ForEach

Iterate over a nodeList with `forEach()` to add event listeners to all the elements. A node list is returned by `querySelectorAll()`. Its a bit like an array but not exactly the same.

### Regex

Theres an example of using Regular Expressions in `index.js`. This is used to match characters.

### Unary Plus (+)

Can be used to attempt to convert a value to a number. eg:

    const num = '5';

    console.log(+num);
    // converts the string '5' to the number 5.

This can also used on these and other values:

    console.log(+true);
    // ouput: 1

    console.log(+false);
    // output: 0

    console.log(+'hello');
    // ouput: NaN

### CSS Variables

Theres an example of using CSS variables in styles.css. They must be defined within the scope of where they will be used. Use the `:root` selector for the top level:

    :root {
      --white-color: 'white';
    }

    .my-element {
      color: var(--white;color);
    }

### CSS Calculation

You can make calculations in CSS. This can be combined with CSS variables:

    .my-element {
      width: calc(var(--container-width) / 4)
    }

I didn't use this in my code, but its a useful thing to know.

[Page top](#calculator)
