# Subiect 2 (2.5 pts)
# TOPIC: REST

# Given the application `app` implement the `DELETE` method at the address `/people`. The method deletes a series of records based on ids send as query parameters

- If an empty request body has been sent, the response will be a json with the following format: `{"message": "nothing to delete"}`. The response code will be: `400`; (0.5 pts)
- If the ids sent as parameters cannot be converted to truncated numbers the response will be: `{"message": "at least some ids are non numeric"}`. The response code will be: `400`; (0.5 pts)
- The request works with an id. The response will be an array of objects of the following structure `[{"id": 1, "status": "deleted"}]`. The response code will be: `202`; (0.5 pts)
- The request works with multiple existing ids. The response will be an array of objects of the following structure `[{"id": 1, "status": "deleted"}, {"id": 2, "status": "deleted"}]`. The response code will be: `202`;(0.5 pts)
- The request works with multiple ids, some existing, some not.  The response will be an array of objects of the following structure `[{"id": 1, "status": "deleted"}, {"id": 11, "status": "not found"}]`. The response code will be: `202`;(0.5 pts)