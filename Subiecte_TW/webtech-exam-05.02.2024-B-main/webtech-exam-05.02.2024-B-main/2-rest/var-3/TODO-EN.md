# Subject 2 (2.5 pts)
# Topic: REST

# Given the application `app` fill in the  `GET` method to `/people` to support a simple paging mechanism (paging parameters are `page` and `pageSize`):

# Detailed points
- If a request is sent without any paging parameter, the server will respond with a code of `200` and a response body containing all the records; (0.5 pts)
- If an invalid page is sent (which cannot be converted to number) the server will respond with `{"message": "page should be a number"}`. The response code will be `400`; (0.5 pts)
- If a valid page is sent without a page size, the server will respond with a body containing all the records on that page and assume that the page size is 10. Codul de răspuns va fi: `200`; (0.5 pts)
- If an invalid page size is sent, the server will respond with  `{"message": "page size should be a number"}`. The response code will be `400`; (0.5 pts)
- If valid page size and page are sent the server will respond with a code of `200` and will send all the records on the specified page. (0.5 pts)