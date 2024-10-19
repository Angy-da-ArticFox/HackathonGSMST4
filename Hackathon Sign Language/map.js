function findRoute() {
    const start = document.getElementById("start").value;
    const destination = document.getElementById("destination").value;
    const stairsAllowed = document.querySelector('input[name="stairs"]:checked').value;

    // Define possible routes
    const routes = {
        'front-door': { 'cafeteria': 'Go left and head to the Cafeteria' },
        'cafeteria': { 'front-door': 'Go straight and exit at the front door' },
        'mlh': { 'llh': 'Go downstairs to LLH' },
        'llh': { 'mlh': 'Go upstairs to MLH' },
        'downstairs': { 'llh': 'Head to LLH from the downstairs area' }
    };

    let result = '';

    // Logic to determine the route
    if (start === destination) {
        result = "You're already at your destination!";
    } else if (stairsAllowed === 'no' && (start === 'mlh' || destination === 'mlh')) {
        result = "Stairs are required to reach MLH. Please allow stairs to take this route.";
    } else if (routes[start] && routes[start][destination]) {
        result = routes[start][destination];
    } else {
        result = "No direct route available. Please reconsider your path.";
    }

    // Display the result
    document.getElementById("route-output").innerText = result;
}
