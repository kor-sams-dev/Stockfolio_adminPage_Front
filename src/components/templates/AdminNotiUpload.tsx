import React from "react";
import styled from "styled-components";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { observer } from "mobx-react";
import Inner from "../../styles/Inner";
import Heading2 from "../UI/atoms/texts/Heading2";
import AdminInput from "../UI/atoms/inputs/AdminInput";
import AdminBtn from "../UI/atoms/buttons/AdminBtn";

import theme from "../../styles/theme";
import AdminDataForm from "../../assets/data/adminAccountForm";

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
`;

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

const DropdownSection = styled.section`
  margin: 24px 0 24px 10px;
  display: flex;
  justify-content: flex-start;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitBtn = styled.button`
  margin: 40px 0;
  padding: 16px;
  background-color: ${theme.color.mainDeep};
  color: white;
  width: 312px;
  border-radius: 10px;
  cursor: pointer;
`;

const AdminNotiUpload = observer((): JSX.Element => {
  return (
    <Box>
      <Inner size="wide">
        <HeaderWrap>
          <Heading2 fontWeight={700} fontSize={24}>
            새로운 공고 올리기
          </Heading2>
        </HeaderWrap>
        <AdminInput item={AdminDataForm.notificationInput.item[0]} />
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
          <SubmitBtn>올리기</SubmitBtn>
        </BtnWrap>
      </Inner>
    </Box>
  );
});

export default AdminNotiUpload;
