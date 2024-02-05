# Subject 2 (2.5 pts)
# Topic: REST

# Given the application `app` fill in the  `GET` method to `/people` to support a simple filtering mechanism:

# Detailed points
- If the request does not specify a filter, the server will answer with a code of `200` and with a reponse body containing all the records; (0.5 pts)
- If a filter key is present but the filter is empty, the server will answer with `{"message": "one of the filter keys is not defined"}`. The response code will be: `400`; (0.5 pts)
- If a valid filter is sent, the server will respond with a `200` code and will send all mathing records; (0.5 pts)
- A lowercase filter works for uppecase values; (0.5 pts)
- Filtering works with multiple fields. (0.5 pts)