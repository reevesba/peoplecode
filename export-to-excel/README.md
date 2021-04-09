# Export Data to Excel on FieldChange Event

There are two primary pieces to this puzzle; an IScript and FieldChange PeopleCode object. The field change event constructs the Excel file and saves it to the application server. Before it exits, this PeopleCode calls an IScript which opens the spreadsheet from the application server and posts it to the webpage. This will trigger the download. 