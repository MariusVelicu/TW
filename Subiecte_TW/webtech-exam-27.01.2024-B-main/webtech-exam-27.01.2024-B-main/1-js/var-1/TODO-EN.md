# Subject 1 (2.5 pts)
# Topic: Javascript

# Given the following function `function updateProperty(arr, prop, f)` where:
- `arr` is an array of objects;
- `prop` is a string;
- `f` is a function;
- The function must replace the value of the `prop` property of all elements in `arr` with the value obtained by applying `f` to the value of prop `prop`.

# Detailed points:
- `arr` must be an array. If any other type is supplied an `Error` with the message `First input should be an array` should be thrown; (0.5 pts)
- Each element of `arr` must be an object. If any other type is supplied  an `Error` with the message `Each element should be an object` should be thrown; (0.5 pts)
- `prop` must be a `string` or a `String`.  If any other type is supplied an  `Error` with the message `Second input should be a string` should be thrown; (0.5 pts)
- `f` must be a function. If any other type is supplied `Error` with the message `Third input should be a function` should be thrown; (0.5 pts)
- `f` must return the correct result. (0.5 pts)