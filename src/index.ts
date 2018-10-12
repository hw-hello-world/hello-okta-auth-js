
import OktaAuth = require('@okta/okta-auth-js');

var config = {
    issuer: 'https://hw.trexcloud.com/oauth2/default',
    clientId: '0oa2lbz1s8e77z4gQ0g7',
};
var authClient = new OktaAuth(config);
authClient.token.verify
function component() {
    let element = document.createElement('button');

    element.innerText = 'Hello Okta';
    element.onclick = () => {
        authClient.token.getWithRedirect();
    }
    return element;
}

authClient.token.parseFromUrl()
.then(function(tokenOrTokens) {
  console.log(tokenOrTokens)
})
.catch(function(err) {
    console.warn(err)
});

document.body.appendChild(component());
