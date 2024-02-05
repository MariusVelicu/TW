# Subject 1 (2.5 pts)
# Topic: Javascript

# Given the following function `function generator(initialState)` where:
- `initialState` is an object;
- The function must return an anonymous function `function (prop, value)` which modifieds  `initialState` updating the property `prop` to the value `value`

# Punctaj defalcat:
- `initialState` must be an object. If another type is passed an  `Error` with the message `First input should be an object` must be thrown; (0.5 pts)
- The `generator` function must return a function; (0.5 pts)
- The function supports state management for multiple objects; (0.5 pts)
- The function successfully modifies state for primitive values; (0.5 pts)
- The function successfully modifies state for values of type object. (0.5 pts)