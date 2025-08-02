const toggleTheme=document.getElementById("toggleTheme");

const rootHtml = document.documentElement

function changeTheme(){
    const currentTheme = rootHtml.getAttribute("data-theme")

    if(currentTheme === "light") rootHtml.setAttribute("data-theme", "dark")
    else rootHtml.setAttribute("data-theme", "light")

    toggleTheme.classList.toggle("bi-moon")
    toggleTheme.classList.toggle("bi-sun")
}

toggleTheme.addEventListener("click", changeTheme);