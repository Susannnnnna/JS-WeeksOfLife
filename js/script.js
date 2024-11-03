function generateCalendar() {
    const dobInput = document.getElementById("dob").value;
    const lifeExpectancy = parseInt(document.getElementById("lifeExpectancy").value);
    const gridContainer = document.getElementById("grid-container");

    // Clear previous grid
    gridContainer.innerHTML = "";

    // Validate inputs
    if (!dobInput || isNaN(lifeExpectancy) || lifeExpectancy <= 0) {
        alert("Please enter a valid date of birth and life expectancy.");
        return;
    }

    // Calculate the number of weeks lived and remaining
    const dob = new Date(dobInput);
    const today = new Date();
    const ageInWeeks = Math.floor((today - dob) / (1000 * 60 * 60 * 24 * 7));
    const totalWeeks = lifeExpectancy * 52;

    // Generate week squares
    for (let i = 0; i < totalWeeks; i++) {
        const weekSquare = document.createElement("div");
        weekSquare.classList.add("week-square");

        // Past weeks in faded red, future weeks in green
        if (i < ageInWeeks) {
            weekSquare.classList.add("past");
        } else {
            weekSquare.classList.add("future");
        }
        gridContainer.appendChild(weekSquare);
    }

    // Scroll to grid
    gridContainer.scrollIntoView({ behavior: "smooth" });
}
