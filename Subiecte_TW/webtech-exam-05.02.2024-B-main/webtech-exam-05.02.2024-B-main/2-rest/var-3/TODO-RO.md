# Subiect 2 (2.5 pts)
# Tematică: REST

# Dată fiind aplicația `app` completați metoda `GET` la adresa `/people` pentru a suporta un mecanism simplu de paginare (parametrii de paginare sunt `page` și `pageNo`):

# Punctaj defalcat
- Dacă s-a trimis o cerere fără niciun parametru de paginare, serverul va răspunde cu un cod de `200` și va trimite un corp de răspuns care cuprinde toate înregistrările; (0.5 pts)
- Dacă se trimite o pagină invalidă (care nu poate fi convertită la număr) serverul va răspunde cu `{"message": "page should be a number"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Dacă se trimite o pagină validă și nicio mărime de pagină serverul va răspunde cu înregistările din pagina respectivă cu o mărime default de 10 elemente pe pagină. Codul de răspuns va fi: `200`; (0.5 pts)
- Dacă se trimite o mărime de pagină invalidă (care nu poate fi convertită la număr) serverul va răspunde cu `{"message": "page size should be a number"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Dacă se trimit o pagină și o mărime de pagină valide, serverul va răspunde cu codul `200` și va trimite lista tuturor înregistărilor din pagina respectivă. (0.5 pts)