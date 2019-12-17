<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/hmac-sha256.min.js"></script>
<script type="text/javascript">
    function genHash() {
        const ID = '0000';
        const KEY = '000000000000000000000000000000';
	var userId = document.getElementById('USERID');
	var time = new Date().getTime();

	var signature = CryptoJS.HmacSHA256(userId.innerText + ID + time, KEY);
    };

    genHash();
</script>
