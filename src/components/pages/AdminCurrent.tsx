import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { observer } from "mobx-react";
import { toJS } from "mobx";

import Inner from "../../styles/Inner";
import theme from "../../styles/theme";

import AdminApplicantStore from "../../stores/AdminApplicantStore";
import requestHeaders from "../../utils/getToken";
import { AdminRecentApplicant1 } from "../../models/adminMainMenu";
import { ApplicationsAdmin } from "../../config";

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
`;

const Applicant = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0px;
  height: 82px;
  border: none;
  border-radius: 16px;
  background: ${theme.color.white};
  cursor: pointer;

  &:hover {
    background-color: ${theme.color.greyLight1};
  }
`;

const TitleWrap = styled.div`
  position: relative;
  margin-left: 24px;
  font-size: 12px;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${theme.color.grey2};
`;

const Name = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;
`;

const ContentWrap = styled.div`
  margin-right: 24px;
  font-size: 12px;
  font-weight: 400;
  color: ${theme.color.black};
  line-height: 20px;
  span {
    margin: 0px 8px 0px 8px;
    color: ${theme.color.grey1};
  }
`;

const Career = styled.div`
  text-align: right; 
  }
`;

const Email = styled.div`
  font-size: 12px;
`;

const Label2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0;
  width: 38px;
  height: 18px;
  border-radius: 100px;
  background-color: ${theme.color.red2};

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

const AdminCurrent = observer((): JSX.Element => {
  const { setApplicant } = AdminApplicantStore;

  const { pathname } = useLocation();
  const { ApplicantList } = AdminApplicantStore;

  useEffect(() => {
    fetch(`${ApplicationsAdmin}/recent`, {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setApplicant(data.results);
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
            최근 지원자
          </Heading2>
        </Wrap>
        {toJS(ApplicantList).map((data: AdminRecentApplicant1) => {
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

export default AdminCurrent;
