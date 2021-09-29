import React from "react";
import styled from "styled-components";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";

import Inner from "../../styles/Inner";
import theme from "../../styles/theme";
import AdminDataForm from "../../assets/data/adminAccountForm";

import { NotificationUrl } from "../../config";
import {
  DropdownStore,
  selectNotificationData,
} from "../../stores/AdminNotificationStore";
import requestHeaders from "../../utils/getToken";

import Heading2 from "../UI/atoms/texts/Heading2";
import AdminInput from "../UI/atoms/inputs/AdminInput";
import AdminBtn from "../UI/atoms/buttons/AdminBtn";

const Box = styled.section`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background: ${theme.color.white};
  padding-top: 100px;

  h3 {
    margin: 15px 0;
    font-weight: 700;
  }

  ul {
    li {
      padding: 10px 0px;
      list-style: inside;
      margin-left: 10px;
      line-height: 0.6;
      font-size: 14px;
      font-weight: 400;
    }
  }

  ol {
    li {
      padding-top: 10px;
      list-style: decimal;
      margin-left: 30px;
      line-height: 1.5;
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

const DropdownSection = styled.section`
  display: flex;
  justify-content: flex-start;
  margin: 24px 0 24px 10px;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitBtn = styled.button`
  margin: 40px 0;
  padding: 16px;
  width: 312px;
  border-radius: 10px;
  background-color: ${theme.color.mainDeep};
  color: white;
  cursor: pointer;
`;

const AdminNotiUpload = observer((): JSX.Element => {
  const history = useHistory();
  const { setDescription } = DropdownStore;
  const addNoti = () => {
    fetch(NotificationUrl, {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(selectNotificationData),
    })
      .then(res => res.json())
      .then(data => {
        console.log("결과", data);
        if (data.message === "SUCCESS") {
          alert("공고 등록이 완료되었습니다.");
          history.push("/admin/notification");
        } else {
          alert("공고 내용을 확인해주세요.");
        }
      });
  };

  const { setTitle } = DropdownStore;
  const writeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  return (
    <Box>
      <Inner size="wide">
        <HeaderWrap>
          <Heading2 fontWeight={700} fontSize={24}>
            새로운 공고 올리기
          </Heading2>
        </HeaderWrap>
        <AdminInput
          item={AdminDataForm.notificationInput.item[0]}
          onChange={writeTitle}
        />
        <DropdownSection>
          {AdminDataForm.NotificationUploadDropdown.data.map(item => {
            return <AdminBtn item={item} key={item.id} />;
          })}
        </DropdownSection>
        <CKEditor
          editor={ClassicEditor}
          config={{
            placeholder: "내용을 작성해 주세요",
            toolbar: {
              items: [
                "heading",
                "|",
                "bold",
                "italic",
                "link",
                "bulletedList",
                "numberedList",
                "imageUpload",
                "blockQuote",
                "insertTable",
                "mediaEmbed",
                "undo",
                "redo",
              ],
            },
            image: {
              toolbar: [
                "imageStyle:full",
                "imageStyle:side",
                "|",
                "imageTextAlternative",
              ],
            },
            heading: {
              options: [
                {
                  model: "heading1",
                  view: "h1",
                  title: "헤더1",
                  class: "ck-heading_heading1",
                },
                {
                  model: "heading2",
                  view: "h2",
                  title: "헤더2",
                  class: "ck-heading_heading2",
                },
                {
                  model: "heading3",
                  view: "h3",
                  title: "헤더3",
                  class: "ck-heading_heading3",
                },
                {
                  model: "paragraph",
                  title: "내용",
                  class: "ck-heading_paragraph",
                },
              ],
            },
          }}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            setDescription(data);
          }}
          onInit={(editor: any) => {
            editor.editing.view.change((writer: any) => {
              writer.setStyle(
                "height",
                "400px",
                editor.editing.view.document.getRoot()
              );
            });
          }}
        />
        <BtnWrap>
          <SubmitBtn onClick={addNoti}>올리기</SubmitBtn>
        </BtnWrap>
      </Inner>
    </Box>
  );
});

export default AdminNotiUpload;
