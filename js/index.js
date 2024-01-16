addEventListener('DOMContentLoaded', () => {
    const formContainer = document.querySelector('#create-monster')
    const form = document.createElement('form');

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Name');

    const ageInput = document.createElement('input');
    ageInput.setAttribute('type', 'text');
    ageInput.setAttribute('placeholder', 'Age');

    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('placeholder', 'Description');

    const createButton = document.createElement('button');
    createButton.textContent = 'Create Monster';

    form.appendChild(nameInput);
    form.appendChild(ageInput);
    form.appendChild(descriptionInput);
    form.appendChild(createButton);

    const monsterListContainer = document.getElementById('monster-container')

    formContainer.appendChild(form);
    createButton.addEventListener('click', event => {
        event.preventDefault();

        const name = nameInput.value;
        const age = ageInput.value;
        const description = descriptionInput.value;

        fetch('http://localhost:3000/monsters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, age, description }),
            })
            .then(response => response.json())
            .then(data => {})
            .catch(error => {
            console.error('Error:', error);
            });

            fetch('http://localhost:3000/monsters')
            .then(response => response.json())
            .then(data => {
                monsterListContainer.innerHTML = ''
                data.forEach(monster => {
                    const monsterElement =document.createElement('div')
                    monsterElement.textContent = `Name: ${monster.name}, Age: ${monster.age}, Description: ${monster.description}`
                    monsterListContainer.appendChild(monsterElement)
                })
            })
            .catch(error => {
                console.error('Error:', error);
            });
        })
    })