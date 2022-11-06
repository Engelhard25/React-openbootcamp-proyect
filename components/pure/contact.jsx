import React from 'react'
import PropTypes from 'prop-types'
import { contacts } from '../../models/contacts.class'
import Status from './contact-status'

function ContactComponent({ contacts }) {

  return (
    <div>
        <p>
            Name: { contacts.name }
        </p> 
        <p>
            Lastname: { contacts.lastname }
        </p>
        <p>
            E-mail: { contacts.email }
        </p>
        <Status></Status>
    </div>
  )
}

ContactComponent.propTypes = {
    contacts: PropTypes.instanceOf(contacts)
}

export default ContactComponent