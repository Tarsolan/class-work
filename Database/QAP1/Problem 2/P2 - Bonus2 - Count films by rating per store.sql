-- Shows the count of films in stock at each location, grouped together by rating
SELECT city AS location, rating, COUNT(rating) AS total_ratings  FROM store
JOIN inventory ON store.store_id = inventory.store_id
JOIN film ON inventory.film_id = film.film_id
JOIN address ON store.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
WHERE rating='G'
GROUP BY store.store_id, city.city_id, rating
ORDER BY store.store_id, total_ratings ASC;