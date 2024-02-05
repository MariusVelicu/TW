# Subject 1 (2.5 pts)
# Topic: Javascript

# Given the following function `objectMap(o, f)` where:
- `o` is an object;
- `f` is a function;
- The function must return a new object which represents the result of applying `f` to each property of `o`;
- Its behavior is similar to `Array.map`

# Detailed points:
- `o` is an `object`. If any other type is passed an `Error` with the message `First input should be an object` is thrown; (0.5 pts)
- `f` is a function. If any other type is passed an `Error` with the message `Second input should be a function` is thrown; (0.5 pts)
- The function returns an empty object if `o` is an empty object; (0.5 pts)
- The function returns a correct result if all the values of  `o` are primitive; (0.5 pts)
- The function returns a correct result if not all the values of  `o` are primitive. (0.5 pts)
