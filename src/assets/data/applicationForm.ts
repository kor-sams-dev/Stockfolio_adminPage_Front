const applicationForm = [
  {
    basicInfo: {
      isRequired: true,
      title: "기본 정보",
      desc: "지원자님의 개인정보는 채용 담당자만 볼 수 있습니다.",
      item: [
        {
          name: "userName",
          type: "text",
          placeholder: "이름을 입력해주세요",
          title: "이름",
        },
        {
          name: "email",
          type: "email",
          placeholder: "이메일을 입력해주세요",
          title: "이메일",
        },
        {
          name: "phoneNumber",
          type: "number",
          placeholder: "전화번호를 입력해주세요",
          title: "전화번호",
        },
      ],
    },
    career: {
      isRequired: true,
      title: "경력사항",
      desc: "아르바이트 및 증빙이 불가능한 경력만 있을 경우 [경력없음]을 체크해주세요.",
      item: [
        {
          name: "companyName",
          type: "text",
          placeholder: "회사명을 입력해주세요.",
          title: "회사명",
        },
        {
          name: "companyName",
          type: "text",
          placeholder: "직급을 입력해주세요.",
          title: "직급",
        },
        {
          name: "companyName",
          type: "text",
          placeholder: "입사일",
          title: "입사",
        },
        {
          name: "companyName",
          type: "text",
          placeholder: "퇴사일",
          title: "퇴사",
        },
        {
          name: "companyName",
          type: "text",
          placeholder: "담당업무를 입력해주세요.",
          title: "담당업무",
        },
      ],
    },
    project: {
      isRequired: true,
      title: "프로젝트 수행이력",
      desc: "프로젝트 수행이력이 없는 지원자는 [수행이력 없음]을 체크해주세요.",
      item: [
        {
          name: "projectName",
          type: "text",
          placeholder: "프로젝트명을 입력해주세요.",
          title: "프로젝트명",
        },
        {
          name: "association",
          type: "text",
          placeholder: "소속기관명을 입력해주세요.",
          title: "소속기관명",
        },
        {
          name: "startDate",
          type: "date",
          placeholder: "시작일",
          title: "시작",
        },
        {
          name: "endDate",
          type: "date",
          placeholder: "종료일",
          title: "종료",
        },
        {
          name: "mainStack",
          type: "text",
          placeholder: "주 사용 기술을 입력해주세요.",
          title: "주 사용 기술",
        },
        {
          name: "projectInfo",
          type: "text",
          placeholder: "프로젝트 내용을 입력해주세요.",
          title: "프로젝트에 대한 소개와 본인이 수행한 역할을 작성해주세요.",
        },
      ],
    },
    introduction: {
      isRequired: false,
      title: "자기소개",
      desc: "자신을 솔직하게 과감없이 2000자 내외로 소개해주세요.",
      item: [
        {
          name: "aboutMe",
          type: "text",
          placeholder: "자기소개를 해주세요.",
          title: "자기소개",
        },
      ],
    },
    portfolio: {
      isRequired: true,
      title: "포트폴리오",
      desc: "포트폴리오 파일은 1개만 첨부됩니다. 복수 파일을 올리실 경우 압축하여 올려주세요. 또한 용량이 200MB보다 클 경우 클라우드 공유 URL 링크를 추가해주세요.",
      item: [
        {
          name: "portfolioFile",
          type: "file",
          placeholder: "첨부파일을 업로드해주세요.",
          title: "첨부파일",
        },
        {
          name: "portfolioUrl",
          type: "url",
          placeholder: "URL을 입력해주세요.",
          title: "URL",
        },
      ],
    },
    education: {
      isRequired: false,
      title: "학력정보",
      desc: "최종적으로 졸업한 학력만 입력해주세요.",
      item: [
        {
          name: "background",
          type: "select",
          placeholder: "최종학력",
          title: "학력",
        },
        {
          name: "schoolName",
          type: "text",
          placeholder: "학교명을 입력해주세요.",
          title: "학교명",
        },
        {
          name: "major",
          type: "text",
          placeholder: "전공을 입력해주세요.",
          title: "전공",
        },
        {
          name: "grade",
          type: "text",
          placeholder: "최종학점을 입력해주세요.",
          title: "학점",
        },
        {
          name: "enrollDate",
          type: "date",
          placeholder: "입학일을 입력해주세요.",
          title: "입학",
        },
        {
          name: "graduateDate",
          type: "date",
          placeholder: "졸업일을 입력해주세요.",
          title: "졸업",
        },
        {
          name: "graduateState",
          type: "select",
          placeholder: "졸업상태",
          title: "졸업상태",
        },
      ],
    },
  },
];

export default applicationForm;
