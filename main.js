
let cardsWrapper = document.querySelector('#cardsWrapper');

let showContactsBtn = document.querySelector('#showContactsBtn');

let addContactBtn = document.querySelector('#addContactBtn');

let remuveContactBtn = document.querySelector('#remuveContactBtn');

let nameInput = document.querySelector('#nameInput');
let numberInput = document.querySelector('#numberInput');

const RUBRICA = {
    contacts: [
        { name: 'Davide', number: 32457754 },
        { name: 'Filippo', number: 654345667 },
        { name: 'Cristina', number: 876765436 },
    ],

    showContacts: function () {
        cardsWrapper.innerHTML = '';
        this.contacts.forEach((contatto) => {
            let div = document.createElement('div');
            div.classList.add('col-12', 'col-lg-8', 'my-3');
            div.innerHTML = `
                <div class="card-custom">
                  <p class="m-0">${contatto.name}</p>
                  <p class="m-0">${contatto.number}</p>
                  <i class="fa-solid fa-trash-can fa-2x icon"></i>
                </div>`;
            cardsWrapper.appendChild(div);
        });
        let icons = document.querySelectorAll('.icon');
        icons.forEach((icona, i)=>{
            icona.addEventListener('click', ()=>{
                let iconName = this.contacts[i].name;
                this.removeContact(iconName);
            });

        })
    },

    addcontact: function (newName, newNumber) {
        this.contacts.push({ name: newName, number: newNumber });
        this.showContacts();
    },
    removeContact : function (removedName) {

        let names = this.contacts.map((contatto) => contatto.name.toLocaleLowerCase());

        let index = names.indexOf(removedName.toLocaleLowerCase());
        if (index > -1) {
            this.contacts.splice(index, 1);
            this.showContacts();
            showContactsBtn.innerHTML = 'nascondi rubrica';
        } else {
            alert('contatto non presente in rubrica');
        }
    },
};
let confirm = false;

remuveContactBtn.addEventListener('click', () => {
    RUBRICA.removeContact('nameInput.value');
    confirm = true;
    nameInput.value = '';
});



/* let confirm = false; */

addContactBtn.addEventListener('click', () => {
    if (nameInput.value != '' && numberInput != '') {
        RUBRICA.addcontact(nameInput.value, numberInput.value);
        confirm = true;
        showContactsBtn.innerHTML = 'nascondi rubrica';
        nameInput.value = '';
        numberInput.value = '';
    } else {
        alert('attenzione, devi inserire un nome e un numero')
    }

});


showContactsBtn.addEventListener('click', () => {
    if (confirm == false) {
        RUBRICA.showContacts();
        confirm = true;
        showContactsBtn.innerHTML = "nascondi rubrica";
    } else {
        cardsWrapper.innerHTML = '';
        confirm = false;
        showContactsBtn.innerHTML = "mostra rubrica";

    }

});



