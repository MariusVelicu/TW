# Subiect 2 (2.5 pts)
# Tematică: REST

# Dată fiind aplicația `app` completați metoda `GET` la adresa `/people` pentru a suporta un mecanism simplu de filtrare:

# Punctaj defalcat
- Dacă s-a trimis o cerere fără niciun filtru, serverul va răspunde cu un cod de `200` și va trimite un corp de răspuns care cuprinde toate înregistrările; (0.5 pts)
- Dacă se trimite un filtru cu valoare vidă serverul va răspunde cu `{"message": "one of the filter keys is not defined"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Dacă se trimite un filtru valid, serverul va răspunde cu codul `200` și va trimite lista tuturor înregistărilor care respectă filtrul; (0.5 pts)
- Un filtru lowercase funcționează și pentru valori uppercase; (0.5 pts)
- Mecanismul de filtrare funcționează cu filtre multiple. (0.5 pts)