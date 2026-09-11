const userData = [
    {
        name: "Kwi",
        age: 20,
        email: "kwi@gmail.com"
    },
    {
        name: "Pich",
        age: 19,
        email: "pich@gmail.com"
    },
    {
        name: "Lee",
        age: 20,
        email: "lee@gmail.com"
    },
    {
        name: "Sen",
        age: 20,
        email: "sen@gmail.com"
    },
    {
        name: "Panha",
        age: 13,
        email: "panha@gmail.com"
    },
    {
        name: "toro",
        age: 24,
        email: "toro@gmail.com"
    },
    {
        name: "dara",
        age: 17,
        email: "dara@gmail.com"
    },
    {
        name: "kanha",
        age: 21,
        email: "kanha@gmail.com"
    },

    {
        name: "Houy",
        age: 29,
        email: "houy@gmail.com"
    },
    {
        name: "Tola",
        age: 9,
        email: "tola@gmail.com"
    },

    {
        name: "Lyka",
        age: 24,
        email: "lyka@gmail.com"
    },
    {
        name: "somnang",
        age: 20,
        email: "somnang@gmail.com"
    },
    {
        name: "Navy",
        age: 25,
        email: "navy@gmail.com"
    },
    {
        name: "Bunleng",
        age: 22,
        email: "bunleng@gmail.com"
    },
    {
        name: "Soknai",
        age: 21,
        email: "soknai@gmail.com"
    },
    {
        name: "Chrea",
        age: 44,
        email: "chrea@gmail.com"
    }
];

const container = document.querySelector(".container");

const allUsers = userData.map( (user) => {
    return `
        <div class="card">
            <h3>${user.name}</h3>
            <p>${user.age} years old</p>
            <span>${user.email}</span>
        </div>
    `;
}).join("");

container.innerHTML = allUsers;
