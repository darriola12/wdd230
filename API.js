window.onload = function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        document.getElementById('postTitle').textContent = data.title;
        document.getElementById('postBody').textContent = data.body;
      })
      .catch(error => console.error('Error fetching data:', error));
};