import React from 'react';

const EmailButton = () => {
  const handleEmailClick = () => {
    const subject = 'Subject of the email';
    const body = 'Body of the email';

    const mailtoLink = `mailto:info@civillabs.com?subject=${subject}&body=${body}`;

    window.open(mailtoLink);
  };

  return (
    <button onClick={handleEmailClick}>
      Send Email
    </button>
  );
};

export default EmailButton;
