# Posting an HTML Form from PeopleCode
This is one simple way to make third party integrations. It can be used to pass parameters to a third party when transferring out of the PeopleSoft system. For example, if the user is transferring to a payment system, input fields like address or name can be prepopulated using the passed parameters.

### JavaScript Object
This object creates a straighforward HTML form. Values are collected from the client or hardcoded in. Once the form values are collected, the form is appended to the DOM and submitted. 

### PeopleCode Object
This piece is very simple. It grabs the HTML object created in the previous step and assigns it to an HTMLAREA field on the page. This happens on a field change event (e.g. when selecting some button). 
