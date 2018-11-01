
var qrcodeAddress = new QRCode(document.getElementById("qrcodeAddress"),{width: 120,height: 120});
var qrcodeSecret = new QRCode(document.getElementById("qrcodeSecret"),{width: 120, height: 120});

newripple();

function newripple() {
  document.getElementById("testnet").innerHTML = "Amount added";
  var api = new ripple.RippleAPI();
  var account = api.generateAddress();
  document.getElementById("address").innerHTML = account.address;
  document.getElementById("secret").innerHTML = account.secret;
  qrcodeAddress.makeCode(account.address);
  qrcodeSecret.makeCode(account.secret);
}

function newtest() {
      document.getElementById("testnet").innerHTML = "TESTNET Balance: 10,000 XRP";
      document.getElementById("secret").innerHTML = "waiting...";
      document.getElementById("address").innerHTML = "waiting...";
      qrcodeAddress.makeCode('');
      qrcodeSecret.makeCode('');

  var xhttp = new XMLHttpRequest();
  var account;
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      account = JSON.parse(this.responseText).account;
      document.getElementById("secret").innerHTML = account.secret;
      document.getElementById("address").innerHTML = account.address;
      qrcodeAddress.makeCode(account.address);
      qrcodeSecret.makeCode(account.secret);
      
    }
  };
  xhttp.open("POST", "https://faucet.altnet.rippletest.net/accounts", true);
  xhttp.send();
}

