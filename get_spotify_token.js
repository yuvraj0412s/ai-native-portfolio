const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const redirect_uri = 'https://www.yuvis.me/callback';

rl.question('1. Paste your SPOTIFY_CLIENT_ID: ', (clientId) => {
  rl.question('2. Paste your SPOTIFY_CLIENT_SECRET: ', (clientSecret) => {
    clientId = clientId.trim();
    clientSecret = clientSecret.trim();

    const scope = 'user-read-currently-playing user-read-recently-played';
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${encodeURIComponent(scope)}`;

    console.log('\n=============================================');
    console.log('🔗 CLICK THIS LINK TO AUTHORIZE YOUR APP:');
    console.log(authUrl);
    console.log('=============================================\n');
    console.log('After authorizing, you will be redirected to a page that says "Not Found" or "Site cannot be reached". THAT IS OKAY!');
    console.log('Look at the URL in your browser. It will look like this:');
    console.log('https://www.yuvis.me/callback?code=AQD_YOUR_CODE_HERE...');

    rl.question('\n3. Paste the entire CODE from the URL here: ', async (code) => {
      code = code.trim();

      const authOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
        },
        body: new URLSearchParams({
          code: code,
          redirect_uri: redirect_uri,
          grant_type: 'authorization_code'
        })
      };

      try {
        const response = await fetch('https://accounts.spotify.com/api/token', authOptions);
        const data = await response.json();
        
        if (data.refresh_token) {
          console.log('\n✅ SUCCESS! Here is your Refresh Token:\n');
          console.log(data.refresh_token);
          console.log('\nCopy this and add it as SPOTIFY_REFRESH_TOKEN in Vercel!');
        } else {
          console.error('\n❌ ERROR:', data);
        }
      } catch (e) {
        console.error('Fetch error:', e);
      }
      
      rl.close();
    });
  });
});
