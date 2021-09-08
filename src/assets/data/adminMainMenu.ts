const adminMainMenu = {
  data: {
    menu: [
      {
        Id: 0,
        context: "오늘의 지원자",
        number: 5,
      },
      {
        Id: 1,
        context: "진행중인 공고",
        number: 12,
      },
      {
        Id: 2,
        context: "새로 등록된 공고",
        number: 4,
      },
      {
        Id: 3,
        context: "곧 마감 될 공고",
        number: 7,
      },
    ],
    applicant: [
      {
        idx: 1,
        label: "신입",
        developer: "front-end developer ",
        career: "경력10년",
        date: "2021-06-21",
        number: 2,
      },
      {
        idx: 2,
        label: "경력",
        developer: "back-end developer",
        career: "경력5년",
        date: "2021-06-02",
        number: 4,
      },
    ],
    notice: [
      { idx: 0, title: "김명성", Id: "sstaar91", password: "2%wpaae" },
      { idx: 1, title: "고유영", Id: "goyuyoung", password: "2%wpaae" },
    ],
  },
};

export default adminMainMenu;
