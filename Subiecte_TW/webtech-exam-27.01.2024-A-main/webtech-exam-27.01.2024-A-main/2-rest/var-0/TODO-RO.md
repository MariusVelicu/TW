# Subiect 2 (2.5 pts)
# Tematica: REST

# Dată fiind aplicația `app` completați metoda `DELETE` la adresa `/people`. Metoda șterge o serie de înregistrări pe baza unor id-uri trimise ca query parameters

- Dacă s-a trimis un request cu un corp gol , se va returna un json cu următorul format: `{"message": "nothing to delete"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Dacă s-au trimis parametri care nu pot fi convertiți la un număr trunchiat se va răspunde cu: `{"message": "at least some ids are non numeric"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Cererea funcționază cu un id. Răspunsul va fi un array de obiecte cu de forma `[{"id": 1, "status": "deleted"}]`. Codul de răspuns va fi: `202`; (0.5 pts)
- Cererea funcționază cu id-uri existente multiple. Răspunsul va fi un array de obiecte cu de forma `[{"id": 1, "status": "deleted"}, {"id": 2, "status": "deleted"}]`. Codul de răspuns va fi: `202`;(0.5 pts)
- Cererea funcționază cu id-uri  multiple dintre care unele există, unele nu. Răspunsul va fi un array de obiecte cu de forma `[{"id": 1, "status": "deleted"}, {"id": 11, "status": "not found"}]`. Codul de răspuns va fi: `202`;(0.5 pts)