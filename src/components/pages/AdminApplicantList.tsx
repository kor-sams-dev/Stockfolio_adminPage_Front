import { useEffect, useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { useLocation, useParams, Link } from "react-router-dom";

import theme from "../../styles/theme";
import Inner from "../../styles/Inner";
import requestHeaders from "../../utils/getToken";
import { ApplicationsAdmin } from "../../config";

import { AdminRecentApplicant1 } from "../../models/adminMainMenu";
import { IDProp } from "../../models/applyInterfaces";

import Heading2 from "../UI/atoms/texts/Heading2";

const AdminBox = styled.section`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  background: ${theme.color.white};
  padding-top: 80px;
`;

const Wrap = styled.div`
  padding: 40px 0px;
  display: flex;
`;

const Title = styled.div`
  color: ${theme.color.mainDeep};
  margin-left: 258px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const Applicant = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;
  background: ${theme.color.white};
  border-radius: 16px;
  cursor: pointer;
  height: 82px;
  margin: 16px 0px;

  &:hover {
    background-color: ${theme.color.greyLight1};
  }
`;

const TitleWrap = styled.div`
  font-size: 12px;
  margin-left: 24px;
  position: relative;
`;

const Name = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;
`;

const ContentWrap = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${theme.color.black};
  margin-right: 24px;
  line-height: 20px;
  span {
    margin: 0px 8px 0px 8px;
    color: ${theme.color.grey1};
  }
`;

const Career = styled.div`
  text-align: right;
`;

const Email = styled.div`
  font-size: 12px;
`;

const Label2 = styled.div`
  background-color: ${theme.color.red2};
  width: 38px;
  height: 18px;
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0;

  span {
    font-size: 12px;
    font-weight: 700;
    color: ${theme.color.white};
  }
`;

const NameWrap = styled.div`
  display: flex;
  align-items: center;
`;

const AdminApplicantList = observer((): JSX.Element => {
  const { pathname } = useLocation();
  const params: IDProp = useParams();
  const [applicantlist, setapplicantlist] = useState([]);
  const [fristapplicant, setfristapplicant] = useState({
    recruit_id: 0,
    created_at: "",
    user_name: "",
    user_email: "",
    user_phoneNumber: "",
    career_type: [""],
    position_title: [""],
    log: true,
  });

  useEffect(() => {
    fetch(`${ApplicationsAdmin}/recruits/${params.id}`, {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setapplicantlist(data.results);
        setfristapplicant(data.results[0]);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <AdminBox>
      <Inner size="narrow">
        <Wrap>
          <Heading2
            fontColor={theme.color.black}
            fontSize={24}
            fontWeight={700}
          >
            지원자 리스트({applicantlist.length})
          </Heading2>
          <Title>{fristapplicant.position_title}</Title>
        </Wrap>
        {applicantlist.map((data: AdminRecentApplicant1) => {
          return (
            <Applicant
              key={data.created_at}
              to={`/admin/applicant/${data.application_id}`}
            >
              <TitleWrap>
                {pathname === "/admin/current" && (
                  <Title>{data.position_title} 채용</Title>
                )}
                <NameWrap>
                  <Name>{data.user_name}</Name>
                  {data.log ? null : (
                    <Label2>
                      <span>new</span>
                    </Label2>
                  )}
                </NameWrap>
              </TitleWrap>
              <ContentWrap>
                <Career>
                  {data.career_type.length === 0 ? "신입" : data.career_type}
                  &nbsp;
                  {data.career_date.replace("0년", "")}
                  <span>|</span> {data.created_at.substr(0, 10)}
                </Career>
                <Email>
                  {data.user_email} <span>|</span> {data.user_phoneNumber}
                </Email>
              </ContentWrap>
            </Applicant>
          );
        })}
      </Inner>
    </AdminBox>
  );
});

export default AdminApplicantList;
