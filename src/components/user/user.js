import styled from 'styled-components';
import AsideNavbar from '../../components/asidenav/AsideNavbar';
import React, { useState } from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import DataTable from 'components/content/DataTable';
import 'react-pro-sidebar/dist/css/styles.css';
import * as s from './user.styles';
import { useAuth } from 'context/auth';
import { useDrive } from 'context/drive';
import { fileApi } from 'api/api-file';
import { searchApi } from 'api/api-search';
import { peopleApi } from 'api/api-people';
import { hashTagApi } from 'api/api-hashtag';
import CreateFolderModal from '../modal/CreateFolderModal';
import Button from '../../components/common/Button';
import { Dropdown, DropdownButton, SplitButton, ButtonGroup, ListGroup } from 'react-bootstrap';
import Card from '../../components/card/card';

const Wrapper = styled.div`
  display: flex;
  position: sticky;
  flex-direction: column;
  column: 100%;
`;
const Users = () => {
  const { authTokens } = useAuth();
  const { drive, setDrive } = useDrive();

  // 현재 위치의 폴더 id
  const [currentFolder, setCurrentFolder] = useState(authTokens.User.root_id);
  const [newFolderName, setNewFolderName] = useState(null);
  const [createFolderModal, setCreateFolderModal] = useState(false);
  const [createFileModal, setCreateFileModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [hashTagField, setHashTagField] = useState(null);

  const fileChangedHandler = (event) => {
    const file = event.target.files;
    console.log('ss', file);
    setSelectedFile(file);
  };

  const openInNewTab = (url) => {
    const win = window.open(url, '_blank');
    win.focus();
  };

  const create = () => setCreateFolderModal(true);
  const createFolder = async () => {
    let result = null;
    try {
      result = await fileApi.createFolder({
        user: authTokens,
        parent_id: currentFolder,
        user_id: authTokens.User.id,
        newFolderName,
      });
    } catch (error) {
      console.log(error);
    } finally {
      console.log(result.data);
      setDrive([...drive, { id: drive.length, ...result.data }]);
    }
  };

  const createFile = async () => {
    console.log('craetefile');
    let result = null;
    try {
      result = await fileApi.uploadFile({
        user: authTokens,
        file: selectedFile,
      });
    } catch (error) {
      console.log(error);
    } finally {
      if (result) {
        console.log('file result', result);
      }
    }
  };

  const downloadFile = async () => {
    event.preventDefault();
    let result = null;
    try {
      result = await fileApi.downloadFile({
        user: authTokens,
      });
    } catch (error) {
      console.log(error);
    } finally {
      if (result) {
        console.log('download result', result.data);
        openInNewTab(result.data);
      }
    }
  };

  const searchByKeyword = async () => {
    event.preventDefault();

    let result = null;
    try {
      result = await searchApi.searchKeyword({
        user: authTokens,
      });
    } catch (error) {
      console.log(error);
    } finally {
      if (result) {
        console.log('result', result);
      }
    }
  };

  const searchByHashtag = async () => {
    event.preventDefault();

    let result = null;
    try {
      result = await searchApi.searchHashTag({
        user: authTokens,
      });
    } catch (error) {
      console.log(error);
    } finally {
      if (result) {
        console.log('result', result);
      }
    }
  };

  const searchByPeople = async () => {
    event.preventDefault();

    let result = null;
    try {
      result = await searchApi.searchPeople({
        user: authTokens,
      });
    } catch (error) {
      console.log(error);
    } finally {
      if (result) {
        console.log('result', result);
      }
    }
  };

  const uploadFace = async () => {
    event.preventDefault();

    let result = null;
    try {
      result = await peopleApi.uploadFace({
        user: authTokens,
      });
    } catch (error) {
      console.log(error);
    } finally {
      if (result) {
        console.log('result', result);
      }
    }
  };

  const getFaceGroup = async () => {
    event.preventDefault();

    let result = null;
    try {
      result = await peopleApi.getFaceGroup({
        user: authTokens,
      });
    } catch (error) {
      console.log(error);
    } finally {
      if (result) {
        console.log('result', result);
      }
    }
  };

  const setGroupName = async () => {
    event.preventDefault();

    let result = null;
    try {
      result = await peopleApi.setGroupName({
        user: authTokens,
      });
    } catch (error) {
      console.log(error);
    } finally {
      if (result) {
        console.log('result', result);
      }
    }
  };

  const getFaceGroupDetail = async () => {
    event.preventDefault();

    let result = null;
    try {
      result = await peopleApi.getFaceGroupDetail({
        user: authTokens,
      });
    } catch (error) {
      console.log(error);
    } finally {
      if (result) {
        console.log('result', result);
      }
    }
  };

  const setHashTag = async () => {
    event.preventDefault();

    let result = null;
    try {
      result = await hashTagApi.setHashTag({
        user: authTokens,
        hash_tag: hashTagField,
      });
    } catch (error) {
      console.log(error);
    } finally {
      if (result) {
        console.log('result', result);
      }
    }
  };

  const getHashTag = async () => {
    event.preventDefault();

    let result = null;
    try {
      result = await hashTagApi.getHashTag({
        user: authTokens,
      });
    } catch (error) {
      console.log(error);
    } finally {
      if (result) {
        console.log('result', result);
        setHashTagField(result.data.recommend);
      }
    }
  };

  return (
    <Wrapper>
      <s.UserAside>
        <s.UserWrapper>
          <Button onClick={create}>폴더생성</Button>
          <Button onClick={() => setCreateFileModal(true)}>파일업로드</Button>
          {/* <s.DropdownWrapper>
            <div className="mb-2">
              {[DropdownButton].map((DropdownType, variant) => (
                <DropdownType
                  as={ButtonGroup}
                  key={variant}
                  menuAlign={{ lg: 'left' }}
                  id={`dropdown-variants-${variant}`}
                  variant="secondary"
                  size="lg"
                  title="새로 만들기"
                >
                  <Dropdown.Item eventKey="1">폴더 생성</Dropdown.Item>
                  <Dropdown.Item eventKey="2">파일 업로드</Dropdown.Item>
                  {/* <Dropdown.Divider />
                <Dropdown.Item eventKey="4">대시</Dropdown.Item> }
                </DropdownType>
              ))}
            </div>
          </s.DropdownWrapper> */}
          <AsideNavbar />
        </s.UserWrapper>
      </s.UserAside>
      <s.UserWrapper>
        <s.UserContainer>
          {createFileModal ? (
            <CreateFolderModal
              open={createFileModal}
              close={() => setCreateFileModal(false)}
              header="파일 생성"
              buttonText={'업로드'}
              onClick={createFile}
            >
              <input type="file" onChange={fileChangedHandler} />
            </CreateFolderModal>
          ) : null}
          {createFolderModal ? (
            <CreateFolderModal
              open={createFolderModal}
              close={() => setCreateFolderModal(false)}
              header="폴더 생성"
              buttonText={'생성'}
              onClick={createFolder}
            >
              <input
                type="text"
                placeholder="폴더명"
                onChange={(e) => setNewFolderName(e.target.value)}
              />
            </CreateFolderModal>
          ) : null}
          <s.UserTitle>내 드라이브</s.UserTitle>
          <s.UserSearchForm>
            <s.UserSearchInput
              name="search"
              id="search"
              type="search"
              placeholder="드라이브에서 검색"
            />
            <s.UserSearchBtn>검색</s.UserSearchBtn>
          </s.UserSearchForm>
        </s.UserContainer>
        <s.UserContainer>
          <s.UserContainer>
            <Card></Card>
          </s.UserContainer>
        </s.UserContainer>
        <DataTable />
        <s.UserWrapper>
          <s.UserContainer>{/* <UserSubTitle>클라우드 자료</UserSubTitle> */}</s.UserContainer>
        </s.UserWrapper>
      </s.UserWrapper>
    </Wrapper>
  );
};
export default Users;
