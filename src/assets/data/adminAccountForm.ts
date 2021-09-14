const AdminDataForm = {
  accountInput: {
    item: [
      {
        id: 0,
        title: "이름",
        name: "title",
        placeholder: "이름",
        itemWidth: 120,
      },
      {
        id: 1,
        title: "아이디",
        name: "id",
        placeholder: "아이디",
        itemWidth: 240,
      },
      {
        id: 2,
        title: "비밀번호",
        name: "password",
        placeholder: "비밀번호",
        itemWidth: 240,
      },
    ],
    account: [
      { id: 0, userName: "김명성", email: "sstaar91", password: "2%wpaae" },
      { id: 1, userName: "고유영", email: "goyuyoung", password: "2%wpaae" },
    ],
  },
  notificationInput: {
    item: [
      {
        id: 0,
        title: "제목",
        name: "title",
        placeholder: "제목",
        itemWidth: 980,
      },
    ],
  },
  NotificationUploadBtn: {
    data: [
      { id: 0, title: "경력", itemWidth: 124 },
      { id: 1, title: "형태", itemWidth: 148 },
      { id: 2, title: "마감일", itemWidth: 180 },
      { id: 3, title: "직종", itemWidth: 192 },
    ],
  },
};

export default AdminDataForm;
