import React from "react";
import styled, { css } from "styled-components";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { Link, useLocation } from "react-router-dom";
import AdminDescMain from "../UI/organisms/AdminDescMain";

import theme from "../../styles/theme";

import RootStore from "../../stores/RootStore";
import { MenuProps, ClickProps } from "../../models/applyInterfaces";

const DescWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const RecruitList = styled.ul`
  width: 180px;
`;

const RecruitHeadline = styled.h2`
  color: ${theme.color.black};
  font-size: 14px;
  font-weight: 700;
`;

const RecruitDeadline = styled.span`
  color: ${theme.color.grey2};
  font-size: 12px;
  font-weight: 400;
`;

const RecruitCard = styled(Link)`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-bottom: 12px;
  padding: 16px;
  width: 180px;
  height: 88px;
  border-radius: 16px;
  background-color: ${theme.color.greyLight1};
  cursor: pointer;

  ${({ isActive }: ClickProps) =>
    isActive
      ? css`
          background-color: ${theme.color.lilacLight};

          ${RecruitHeadline} {
            color: ${theme.color.main};
          }

          ${RecruitDeadline} {
            color: ${theme.color.lilac};
          }
        `
      : ""}

  &:hover {
    background-color: ${theme.color.lilacLight};
  }

  &:hover ${RecruitHeadline} {
    color: ${theme.color.main};
  }

  &:hover ${RecruitDeadline} {
    color: ${theme.color.lilac};
  }
`;

const AdminDesc = observer((): any => {
  const { ApplyMenuStore } = RootStore();
  const { setSelectedContent } = ApplyMenuStore;
  const location = useLocation();
  const { AdminApplyMenuStore } = RootStore();
  const { adminviewContent } = AdminApplyMenuStore;

  return (
    <>
      <DescWrapper>
        <aside>
          <RecruitList>
            {toJS(adminviewContent).map((li: MenuProps) => (
              <RecruitCard
                to={`/admin/apply/${li.id}`}
                key={li.id}
                onClick={() => setSelectedContent(li)}
                isActive={location.pathname === `/admin/apply/${li.id}`}
              >
                <RecruitHeadline>{li.position_title}</RecruitHeadline>
                <RecruitDeadline>{li.deadline}까지</RecruitDeadline>
              </RecruitCard>
            ))}
          </RecruitList>
        </aside>
        <AdminDescMain />
      </DescWrapper>
    </>
  );
});

export default AdminDesc;
