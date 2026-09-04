const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call, debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

const courseContainer = document.querySelector("#course-container");
const creditTotal = document.querySelector("#credit-total");

const allButton = document.querySelector("#all-courses");
const wddButton = document.querySelector("#wdd-courses");
const cseButton = document.querySelector("#cse-courses");


function displayCourses(courseList) {
    courseContainer.innerHTML = "";

    courseList.forEach((course) => {
        const card = document.createElement("article");

        card.classList.add("course-card");

        if (course.completed) {
            card.classList.add("completed");
        } else {
            card.classList.add("in-progress");
        }

        const title = document.createElement("h3");
        title.textContent = `${course.subject} ${course.number}`;

        const courseName = document.createElement("p");
        courseName.innerHTML = `<strong>${course.title}</strong>`;

        const description = document.createElement("p");
        description.textContent = course.description;

        const credits = document.createElement("p");
        credits.textContent = `Credits: ${course.credits}`;

        const technology = document.createElement("p");
        technology.textContent = `Technology: ${course.technology.join(", ")}`;

        const status = document.createElement("p");
        status.classList.add("course-status");

        if (course.completed) {
            status.textContent = "✓ Completed";
        } else {
            status.textContent = "Currently Studying";
        }

        card.appendChild(title);
        card.appendChild(courseName);
        card.appendChild(description);
        card.appendChild(credits);
        card.appendChild(technology);
        card.appendChild(status);

        courseContainer.appendChild(card);
    });

    const totalCredits = courseList.reduce(
        (total, course) => total + course.credits,
        0
    );

    creditTotal.textContent = totalCredits;
}


function setActiveButton(activeButton) {
    document.querySelectorAll(".filter-button").forEach((button) => {
        button.classList.remove("active-filter");
    });

    activeButton.classList.add("active-filter");
}


allButton.addEventListener("click", () => {
    displayCourses(courses);
    setActiveButton(allButton);
});


wddButton.addEventListener("click", () => {
    const wddCourses = courses.filter(
        (course) => course.subject === "WDD"
    );

    displayCourses(wddCourses);
    setActiveButton(wddButton);
});


cseButton.addEventListener("click", () => {
    const cseCourses = courses.filter(
        (course) => course.subject === "CSE"
    );

    displayCourses(cseCourses);
    setActiveButton(cseButton);
});


displayCourses(courses);