[Return to ReadMe file](README.md)

## Testing Table of Contents

### 1. [Code Validation](#code-validation)

### 2. [User Story Testing](#user-story-testing)

- [First Time Visitor Goals Testing](#first-time-visitor-goals-testing)
    
- [Returning Visitor Goals Testing](#returning-visitor-goals-testing)

- [Frequent Visitor Goals Testing](#frequent-visitor-goals-testing)

### 3. [Browser Compatibility and Device Responsiveness Testing](#browser-compatibility-and-device-responsiveness-testing)

### 4. [Google Lighthouse Testing](#google-lighthouse-testing)

### 5. [Further Testing](#further-testing)

### 6. [Bugs](#bugs)

### Code Validation

Throughout this project all code has been regularly ran through HTML, CSS and Javascript validators to ensure there are no errors within the code. See below screenshots of all validated
and passed code. Outlined for each page is the decision why the warnings present have not been corrected.

#### [CSS Validation](testing/css-valid.png)

- The majority of warnings present relate to unknown prefix vendors that have been added by [Autoprefixer](https://autoprefixer.github.io/) to increase cross browser compatibility. These 
warnings have not been corrected due to this know being a necessary practice.

- Another warning present relates to some buttons on the website having the same border colour as background colour. This is due to the hover effect added to these elements that cause the 
background colour to be removed upon hover, so for aesthetic purposes the border colour needs to be present when this happens.

#### [HTML Validation](testing/html-valid.png)

- No warnings present for any html pages within this project.

#### Javascript validation

#### [Script.js](testing/script.js-valid-png)

- The undefined variables in this file that cause warnings have not been altered as they are correctly used however, JSHint does not recognise them.
    - 'AOS' is the necessary code for the animate on scroll library used.
    - The '$' is used inline with correct JQuery syntax, however, JSHint has not been told that JQuery is being used hence this warning.
    - 'emailjs' is the necessary code to allow the forms within the website to send emails as instructed.

- The unused variables in this file that cause warnings have not been altered as these variables are called within the HTML files and are necessary 
for the code to correctly work.
    - 'changeText' and 'defaultText' are called in the index.html page when the user hovers over the carousel destination/attraction heading.
    - 'subMail' is called on the newsletter form to correctly action and use the emailJS application.

#### [flights.js](testing/flights-valid/flights-valid-2.png) & [south-flights.js](testing/flights-valid/flights-valid.png)

- Both files show no warnings or errors present.

#### [maps-new.js](testing/maps-valid/maps-ni-valid.png) & [south-maps.js](testing/maps-valid/maps-si-valid.png)

- Both files show the same warnings regarding undefined variables all of which are caused from using necessary syntax to correctly use the Google maps API, these are 'map' and 'google'.
- Both files show the same warnings regarding unused variables which are caused from using necessary syntax to correctly place Google map markers on the API, this is 'marker'.

#### [email.js](testing/email-valid.png)

- The undefined variables in this file that cause warnings have not been altered as they are correctly used however, JSHint does not recognise them.
    - 'emailjs' is the necessary code to allow the forms within the website to send emails as instructed.

- The unused variables in this file that cause warnings have not been altered as these variables are called within the contact.html file.
    - 'sendMail' is called on the contact form to correctly action and use the emailJS application.

[Back to Testing Table of Contents](#testing-table-of-contents)