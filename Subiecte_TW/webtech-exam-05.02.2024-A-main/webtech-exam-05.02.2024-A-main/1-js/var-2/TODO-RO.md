# Subiectul 1 (2.5 pts)
# Tematica: Javascript

# Avand urmatoarea functie `function generator(initialState)` unde:
- `initialState` este un obiect;
- Functia trebuie sa returneze o funcție anonimă `function (prop, value)` care modifică `initialState` actualizând valoarea proprietății `prop` la valoarea `value`

# Punctaj defalcat:
- `initialState` trebuie sa fie un obiect. Daca alt tip este pasat ca parametru aruncati `Error` cu mesajul `First input should be an object`; (0.5 pts)
- Funcția `generator` trebuie să returneze o funcție; (0.5 pts)
- Funcția suportă managementul stării pentru obiecte multiple; (0.5 pts)
- Funcția modifică cu succes starea pentru valori primitive; (0.5 pts)
- Funcția modifică cu succes starea pentru valori de tip obiect. (0.5 pts)