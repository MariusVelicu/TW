# Subiectul 1 (2.5 pts)
# Tematica: Javascript

# Avand urmatoarea functie `function updateProperty(arr, prop, f)` unde:
- `arr` este un array de obiecte;
- `prop` este un string;
- `f` este o funcție;
- Functia trebuie sa inlocuiasca valoarea proprietăților `prop` ale obiectelor din `arr` cu valoarea rezultată din aplicarea funcției `f` la valoarea proprietății `prop`.

# Punctaj defalcat:
- `arr` trebuie sa fie un array. Daca alt tip este pasat ca si parametru aruncati `Error` cu mesajul `First input should be an array`; (0.5 pts)
- Fiecare element din `arr` trebuie sa fie un obiect. Daca alt tip este pasat ca  parametru aruncati `Error` cu mesajul `Each element should be an object`; (0.5 pts)
- `prop` trebuie sa fie un `string` sau un `String`. Daca alt tip este pasat ca si parametru aruncati  `Error` cu mesajul `Second input should be a string`; (0.5 pts)
- `f` trebuie sa fie o funcție. Daca alt tip este pasat ca si parametru aruncati  `Error` cu mesajul `Third input should be a function`; (0.5 pts)
- `f` trebuie să returneze rezultatul corect. (0.5 pts)