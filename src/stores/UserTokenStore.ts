import { action, observable } from "mobx";
import { TokenProps } from "../models/applyInterfaces";

export const UserTokenStore: TokenProps = observable({
  access_token: "",
  is_applied: false,
});

export const HandleToken = observable({
  setUserToken: action((data: TokenProps) => {
    UserTokenStore.access_token = data.access_token;
    UserTokenStore.is_applied = data.is_applied;
  }),
  getUserToken: action(() => {
    return UserTokenStore.access_token;
  }),
});
