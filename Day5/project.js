
const contacts = [
  { name: "John Doe", phone: "123-456-7890", email: "john@example.com" },
  { name: "Jane Doe", phone: "987-654-3210", email: "jane@example.com" }
];


function displayContact(contact) {
  console.log(`Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
}


function showContact({ name, phone, email }) {
  console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
}


console.log(contacts[0].name); 
console.log(contacts[0]['email']); 


contacts.forEach(displayContact);


function addContacts(...newContacts) {
  contacts.push(...newContacts);
}
addContacts({ name: "Bob Smith", phone: "555-123-4567", email: "bob@example.com" });


const moreContacts = [{ name: "Alice", phone: "111-222-3333", email: "alice@example.com" }];
const allContacts = [...contacts, ...moreContacts];


const display = displayContact;
display.call(null, contacts[0]); 
display.apply(null, [contacts[0]]); 
const boundDisplay = display.bind(null, contacts[0]);
boundDisplay(); 