import React from 'react';
import { contacts } from '../../models/contacts.class';
import ContactComponent from '../pure/contact';


const ContactList = () => {

    const contact_list = new contacts('Engelhard', 'Pacheco', 'Engelhard25@hotmail.com', true);

    return (
        <div>
            <div>
                <h1>Contact</h1>
            </div>
            <ContactComponent contacts={contact_list}></ContactComponent>
        </div>
    );
};



export default ContactList;
