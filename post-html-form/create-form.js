<script type="text/javascript">
function postForm() {
    const SCHOOLID = '0000';

    // collected values
    var userId = document.getElementById('USERID');
    var email = document.getElementById('EMAIL');

    // create form
    var myForm = document.createElement('form');
    myForm.id = 'my-form';
    myForm.name = 'myForm';
    myForm.method = 'post';
    myForm.action = 'https://someurl.com';

    var userIdInput = document.createElement('input');
    userIdInput.type = 'hidden';
    userIdInput.name = 'userid';
    userIdInput.value = userId ? userId.innerText : ' ';
    myForm.appendChild(userIdInput);

    var schoolIdInput = document.createElement('input');
    schoolIdInput.type = 'hidden';
    schoolIdInput.name = 'schoolid';
    schoolIdInput.value = SCHOOLID ? SCHOOLID : ' ';
    myForm.appendChild(schoolIdInput);

    var emailInput = document.createElement('input');
    emailInput.type = 'hidden';
    emailInput.name = 'email';
    emailInput.value = email ? email.innerText : ' ';
    myForm.appendChild(emailInput); 

    // submit form 
    document.getElementsByTagName('body')[0].appendChild(myForm); 
    myForm.submit();
};

postForm();
</script>
