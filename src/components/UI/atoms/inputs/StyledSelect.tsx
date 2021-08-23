import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import {
  IEducationAttrs,
  IItemProps,
} from "../../../../models/ApplicationInterfaces";
import { ISelectListItem } from "../../../../models/InputsInterfaces";
import { ApplicationActions } from "../../../../stores/ApplicationStore";
import RootStore from "../../../../stores/RootStore";
import { SelectActions } from "../../../../stores/SelectStore";
import theme from "../../../../styles/theme";

const { SelectStore, ApplicationStore } = RootStore();

interface StyleProps {
  quantity?: number;
  itemWidth?: number;
  isSelected?: string | null;
}

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  width: ${({ itemWidth }: StyleProps) => `${itemWidth}%`};
`;

const Title = styled.span`
  font-size: 14px;
  line-height: 22px;
  color: ${theme.color.descMedium};
  font-weight: 700;
`;

const SelectSection = styled.div`
  position: relative;
  margin-top: 6px;
  padding: 16px;
  height: 54px;
  background: url("./images/selectArrow.png") no-repeat,
    ${theme.color.greyLight1};
  background-position: 90% 50%;
  border-radius: 8px;
  font-size: 14px;
  color: ${theme.color.black};
  cursor: pointer;
`;

const SelectedOption = styled.span`
  display: inline-block;
  margin-top: 3px;
  color: ${({ isSelected }: StyleProps) =>
    isSelected ? theme.color.black : theme.color.grey1};
`;

const OptionList = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 8px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
  z-index: 999;
`;

const Option = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background: ${theme.color.white};
  font-size: 12px;
  color: ${theme.color.black};
  cursor: pointer;
  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

interface IAddProps {
  item: IItemProps;
}

const StyledSelect = observer(({ item }: IAddProps): JSX.Element => {
  return (
    <Box itemWidth={item.itemWidth}>
      <Title>{item.title}</Title>
      <SelectSection
        data-name={item.name}
        onClick={() =>
          SelectActions.setIsListOn(item.name as keyof ISelectListItem)
        }
      >
        <SelectedOption
          isSelected={
            ApplicationStore.education[item.name as keyof IEducationAttrs]
          }
        >
          {ApplicationStore.education[item.name as keyof IEducationAttrs] ||
            item.placeholder}
        </SelectedOption>
        {SelectStore.isListOn[item.name as keyof ISelectListItem] && (
          <OptionList>
            {item.options &&
              item.options.map(option => (
                <Option
                  onClick={() =>
                    ApplicationActions.setSelectValue(
                      item.name as keyof IEducationAttrs,
                      option
                    )
                  }
                  key={option}
                >
                  {option}
                </Option>
              ))}
          </OptionList>
        )}
      </SelectSection>
    </Box>
  );
});

export default StyledSelect;
