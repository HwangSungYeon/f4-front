import api from './api-folderbase';
export const searchApi = {
  searchKeyword: ({ user }) => {
    const headers = {
      Accept: '*/*',
      Authorization: `${user.AccessToken}`,
      'Access-Key-Id': `${user.Credentials.AccessKeyId}`,
      'Secret-Key': `${user.Credentials.SecretKey}`,
      'Session-Token': `${user.Credentials.SessionToken}`,
      'ID-Token': `${user.IdToken}`,
      'Access-Control-Allow-Origin': true,
    };
    return api.get(`/search/keyword/`, {
      headers,
      params: {
        user_id: 'front_test30', //임시
        keyword: 'test', //임시
      },
    });
  },
  searchHashTag: ({ user }) => {
    const headers = {
      Accept: '*/*',
      Authorization: `${user.AccessToken}`,
      'Access-Key-Id': `${user.Credentials.AccessKeyId}`,
      'Secret-Key': `${user.Credentials.SecretKey}`,
      'Session-Token': `${user.Credentials.SessionToken}`,
      'ID-Token': `${user.IdToken}`,
      'Access-Control-Allow-Origin': true,
    };
    return api.get(`/search/hashtag/`, {
      headers,
      params: {
        user_id: 'test', //임시
        keyword: '#골든_리트리버', //임시
      },
    });
  },
  searchPeople: ({ user }) => {
    const headers = {
      Accept: '*/*',
      Authorization: `${user.AccessToken}`,
      'Access-Key-Id': `${user.Credentials.AccessKeyId}`,
      'Secret-Key': `${user.Credentials.SecretKey}`,
      'Session-Token': `${user.Credentials.SessionToken}`,
      'ID-Token': `${user.IdToken}`,
      'Access-Control-Allow-Origin': true,
    };
    return api.get(`/search/people/`, {
      headers,
      params: {
        user_id: 'test', //임시
        groupName: '테스트', //임시
      },
    });
  },
};
