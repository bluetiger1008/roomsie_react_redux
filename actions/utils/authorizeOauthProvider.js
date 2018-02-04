import queryString from 'query-string';
import OauthModal from 'actions/utils/oauthModal';

const getOauthUrl = (provider, scope) => {
  switch (provider) {
    case 'facebook': {
      if (scope === undefined) {
        scope = 'public_profile,email,user_birthday';
      }

      const query = queryString.stringify({
        client_id: window.FACEBOOK_CLIENT_ID,
        redirect_uri: getRedirectUrl('facebook'),
        response_type: 'code',
        scope
      });

      return `https://www.facebook.com/v2.11/dialog/oauth?${query}`;
    }
    case 'google': {
      if (scope === undefined) {
        scope =
          'profile email https://www.googleapis.com/auth/user.birthday.read';
      }

      const query = queryString.stringify({
        client_id: window.GOOGLE_CLIENT_ID,
        redirect_uri: getRedirectUrl('google'),
        response_type: 'code',
        scope
      });

      return `https://accounts.google.com/o/oauth2/v2/auth?${query}`;
    }
  }
};

const getRedirectUrl = provider => {
  switch (provider) {
    case 'google':
      return window.GOOGLE_REDIRECT_URL;
    case 'facebook':
      return window.FACEBOOK_REDIRECT_URL;
  }
};

const authorizeOauthProvider = (provider, successCallback, scope) => {
  const oauthUrl = getOauthUrl(provider, scope);
  const redirectUrl = getRedirectUrl(provider);
  let oauthModal = new OauthModal(oauthUrl, redirectUrl);

  oauthModal.authorize(successCallback);
};

export default authorizeOauthProvider;
