// src/components/EmailButton.js

import React from 'react';
import { functions } from '../firebase';  // Import functions from firebase.js
import { httpsCallable } from 'firebase/functions';

const EmailButton = () => {
  const sendEmails = async () => {
    const sendEmailsFunction = httpsCallable('sendEmails');
    try {
      const result = await sendEmailsFunction();
      console.log(result.data);  // { success: true }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  function handleClick() {
    sendEmails();
    alert('You have sent emails to all customers!');
  }

  return (
    <button onClick={handleClick}>Send Emails</button>
  );
};

export default EmailButton;

