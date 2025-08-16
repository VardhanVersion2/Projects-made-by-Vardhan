// Project used to Demonstrate the use of Array functions and also some dom (basics like onclick events...)
//This project gives a real taste what a practical use of array functions and the usecases are used 
// I am able to learn the true usecases of the programming when DOM Meets Arrayfunctions...

//NOTE --> BASICS OF FUCNTIONS ARROW FUNC. LITERAL BASICS OF DOM and query selectors should be pre- equisites...


let movies = []; // took an  empty array...

const movieInput  = document.getElementById("movieInput");
const addBtn       = document.getElementById("addBtn");
const sortBtn       = document.getElementById("sortBtn");
const filterSelect  = document.getElementById("filterSelect");
const movieList   = document.getElementById("movieList");

// Render Movies
function renderMovies(filter = "all")
// will also be targeting in last...
 {
  movieList.innerHTML = "";   //list empty kar liya.


  movies
    .filter(m => filter === "all" || m.watched === (filter === "watched"))

    //yaha maine all lagaya hai //Agar filter "all" hai → saari movies aa jayengi.

// Agar "watched" hai → sirf wo movies jisme m.watched === true.



    .forEach((movie, index) => {
      const li = document.createElement("li");


      li.textContent = movie.name + (movie.watched ? " ✅" : " ❌");//ternary used...

      // Watched toggle button
      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = "Toggle";
      toggleBtn.onclick = () => {

        movie.watched = !movie.watched;//True ko false karr deta hai ye...

        renderMovies(filterSelect.value);

      };

      // Delete button
      const delBtn = document.createElement("button");
      delBtn.textContent = "Remove this movie...";
      delBtn.onclick = () => {
        movies.splice(index, 1);
        renderMovies(filterSelect.value);
      };

      li.appendChild(toggleBtn);
      li.appendChild(delBtn);
      movieList.appendChild(li);

      // appended the toggle and delete also lists...
    });
}

// Add Movie
addBtn.onclick = () => {
  const name = movieInput.value.trim();
  if (name) {
    movies.push({ name, watched: false });
    movieInput.value = "";
    renderMovies(filterSelect.value);
  }
};

//Sort Movies
sortBtn.onclick = () => {
  movies.sort((a, b) => a.name.localeCompare(b.name));
  renderMovies(filterSelect.value);
};

// Filter Change...

filterSelect.onchange = e => renderMovies(e.target.value);

// First Render
renderMovies();
