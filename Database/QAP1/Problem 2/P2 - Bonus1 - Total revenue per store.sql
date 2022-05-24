-- Shows the total revenue of each store, as well as the name of the staff memeber that works there
SELECT store.store_id, staff.first_name || ' ' || staff.last_name employee_name, city, SUM(amount) total_revenue FROM store
JOIN staff ON store.store_id = staff.store_id
JOIN payment ON staff.staff_id = payment.staff_id
JOIN address ON store.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
GROUP BY store.store_id, employee_name, city
ORDER BY total_revenue DESC;