import api from './api-folderbase';
export const hashTagApi = {
  setHashTag: ({ user, hash_tag }) => {
    const headers = {
      Accept: '*/*',
      Authorization: `${user.AccessToken}`,
      'Access-Key-Id': `${user.Credentials.AccessKeyId}`,
      'Secret-Key': `${user.Credentials.SecretKey}`,
      'Session-Token': `${user.Credentials.SessionToken}`,
      'ID-Token': `${user.IdToken}`,
      'Access-Control-Allow-Origin': true,
    };

    const file_id = 5; //임시

    return api.put(
      `/files/${file_id}/hashTag`,
      {
        user_id: 'test', //임시
        hash_tag: hash_tag,
      },
      { headers },
    );
  },
  getHashTag: ({ user }) => {
    const headers = {
      Accept: '*/*',
      Authorization: `${user.AccessToken}`,
      'Access-Key-Id': `${user.Credentials.AccessKeyId}`,
      'Secret-Key': `${user.Credentials.SecretKey}`,
      'Session-Token': `${user.Credentials.SessionToken}`,
      'ID-Token': `${user.IdToken}`,
      'Access-Control-Allow-Origin': true,
    };

    const file_id = 5;

    return api.post(
      `/files/${file_id}/hashTag`,
      {
        user_id: 'test',
      },
      { headers },
    );
  },
};
