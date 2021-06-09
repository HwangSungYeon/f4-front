import api from './api-folderbase';
export const peopleApi = {
  makeCollection: ({ user, user_id }) => {
    const headers = {
      Accept: '*/*',
      'Content-type': 'application/x-www-form-urlencoded',
      Authorization: `${user.AccessToken}`,
      'Access-Key-Id': `${user.Credentials.AccessKeyId}`,
      'Secret-Key': `${user.Credentials.SecretKey}`,
      'Session-Token': `${user.Credentials.SessionToken}`,
      'ID-Token': `${user.IdToken}`,
      'Access-Control-Allow-Origin': true,
    };
    return api.post(
      '/people/collections/',
      {
        user_id: user_id,
      },
      { headers },
    );
  },
  uploadFace: ({ user }) => {
    const headers = {
      Accept: '*/*',
      'Content-type': 'application/json',
      Authorization: `${user.AccessToken}`,
      'Access-Key-Id': `${user.Credentials.AccessKeyId}`,
      'Secret-Key': `${user.Credentials.SecretKey}`,
      'Session-Token': `${user.Credentials.SessionToken}`,
      'ID-Token': `${user.IdToken}`,
      'Access-Control-Allow-Origin': true,
    };
    return api.post(
      '/people/faces/',
      {
        user_id: 'test', //임시
        file_id: '1', //임시
      },
      { headers },
    );
  },
  getFaceGroup: ({ user }) => {
    const headers = {
      Accept: '*/*',
      Authorization: `${user.AccessToken}`,
      'Access-Key-Id': `${user.Credentials.AccessKeyId}`,
      'Secret-Key': `${user.Credentials.SecretKey}`,
      'Session-Token': `${user.Credentials.SessionToken}`,
      'ID-Token': `${user.IdToken}`,
      'Access-Control-Allow-Origin': true,
    };
    return api.get(`/people/face_groups/`, {
      headers,
      params: {
        user_id: 'test', //임시
      },
    });
  },
  setGroupName: ({ user }) => {
    const headers = {
      Accept: '*/*',
      'Content-type': 'application/json',
      Authorization: `${user.AccessToken}`,
      'Access-Key-Id': `${user.Credentials.AccessKeyId}`,
      'Secret-Key': `${user.Credentials.SecretKey}`,
      'Session-Token': `${user.Credentials.SessionToken}`,
      'ID-Token': `${user.IdToken}`,
      'Access-Control-Allow-Origin': true,
    };
    return api.put(
      '/people/face_groups/',
      {
        user_id: 'test', //임시
        group_id: 'test210609193301883637', //임시
        display_name: '테스트테스트', //임시
      },
      { headers },
    );
  },
  getFaceGroupDetail: ({ user }) => {
    const headers = {
      Accept: '*/*',
      Authorization: `${user.AccessToken}`,
      'Access-Key-Id': `${user.Credentials.AccessKeyId}`,
      'Secret-Key': `${user.Credentials.SecretKey}`,
      'Session-Token': `${user.Credentials.SessionToken}`,
      'ID-Token': `${user.IdToken}`,
      'Access-Control-Allow-Origin': true,
    };
    return api.get(`/people/group_detail/`, {
      headers,
      params: {
        user_id: 'test', //임시
        group_id: 'test210609193301883637', //임시
      },
    });
  },
};
