# Subiectul 1 (2.5 pts)
# Tematica: Javascript

# Avand urmatoarea functie `objectMap(o, f)` unde:
- `o` este un obiect;
- `f` este o funcție;
- Functia trebuie să returneze un nou obiect care reprezintă rezultatul aplicării funcției `f` la fiecare proprietate a obiectului `o`;
- Comportamentul funcției este similar cu `Array.map`

# Puctaj defalcat:
- `o` este de tip `object`. Daca alt tip este pasat ca si parametru aruncati `Error` cu mesajul `First input should be an object`; (0.5 pts)
- `f` trebuie să fie o funcție. Dacă alt tip este pasat ca parametru aruncati `Error` cu mesajul `Second input should be a function`; (0.5 pts)
- Funcția trebuie să returneze un obiect vid dacă `o` este un obiect vid; (0.5 pts)
- Funcția returnează un obiect contruit corect pentru cazul în care valorile tuturor cheilor obiectului `o` sunt primitive; (0.5 pts)
- Funcția returnează un obiect contruit corect pentru cazul în care valorile cheilor obiectului `o` nu sunt primitive; (0.5 pts)