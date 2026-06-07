# React Hook Form Registration Form

## Description

This project is a User Registration Form built using React and React Hook Form. The application demonstrates form validation, password verification, local storage draft saving, loading states, and form reset functionality without managing form inputs through React useState.

## Features

* Full Name validation (required, minimum 3 characters)
* Email validation using regular expressions
* Password strength validation
* Confirm Password matching validation
* Role selection validation
* Terms and Conditions acceptance validation
* Auto-focus on the Full Name field
* Draft saving using localStorage
* Automatic restoration of saved drafts
* Loading state during form submission
* Form reset after successful submission

## Technologies Used

* React
* React Hook Form
* JavaScript
* HTML
* CSS
* Vite

## Installation

1. Clone the repository:

git clone <repository-url>

2. Navigate to the project folder:

cd react-hook-form-registration

3. Install dependencies:

npm install

4. Start the development server:

npm run dev

## How to Use

1. Fill out all required fields.
2. Ensure the password meets security requirements.
3. Confirm the password matches.
4. Select a role.
5. Accept the Terms and Conditions.
6. Click Register.
7. The form will display a loading state and simulate a 2-second API request.
8. Upon successful submission, the form will reset and clear any saved draft data.

## Author

Michael Tamirat
