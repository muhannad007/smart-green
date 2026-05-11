# Waste Monitor

## Waste containers monitoring web app

An IOT system for sanitation workers to monitor waste containers around a city and connect them to each other, built with React as the frontend backbone and C++ for hardware programming.1000

The app has two main pages:

### Dashboard

The dashboard is mainly a tracking page for notifcations and latest statistics of waste containers, a notification pops up if a container has been filled, the user (sanitation worker) would be notified and ordered head up to that filled container with his sanitation vechile, the shortest path would be provided and drawn on the map in the "World" page.

### World:

The world page is basically a map page, dropped in via the help of react-mapbox-gl library, it shows the locations of every container on the map and the path between the latest filled up one and the worker's garbage truck. The map also provides an "add container" functionality, it allows the user to install a new container to any location he wants on the map.
