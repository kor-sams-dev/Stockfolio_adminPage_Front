const AdminDefaultNotiForm = {
  basicForm:
    "<h3>담당업무</h3><li> </li><li> </li><h3>자격 요건</h3><li> </li><li> </li><h3>우대 사항</h3><li> </li><li> </li>",
  configData: {
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
  },
};

export default AdminDefaultNotiForm;
