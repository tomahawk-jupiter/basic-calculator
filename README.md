# Calculator
A basic calculator project.

### Things to improve:

1. The Back, CE, C buttons all just act as reset at the moment.

  a. CE should clear digits just entered.

  b. Back should clear just one digit.

2. I might change one of these buttons into an on/off instead.

3. Include keyboard inputs.

4. Set style dimensions using CSS calc so they reference the container, this will allow everything to be set by changing just one or two values.

### Useful things I learnt

Stop text highlighting when clicking on text CSS:

    user-select: none;

Mouse finger pointer CSS:

    cursor: pointer;

make calculations within CSS:

    calc(10px + 20px);

Convert number string to number with unary operator plus:

    let num = '10';
    typeof(num);    // string
    typeof(+num);   // number
