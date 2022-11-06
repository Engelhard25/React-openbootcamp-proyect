export class contacts {
    name = '';
    lastname = '';
    email = '';
    online = true;

    constructor (name, lastname, email, online) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.online = online;
    }
}