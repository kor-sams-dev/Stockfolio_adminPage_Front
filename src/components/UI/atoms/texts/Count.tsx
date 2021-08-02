import React from "react";
import { inject, observer } from "mobx-react";
import { ChildrenPropsType } from "../ChildrenPropsType";
import CountStore from "../../../../stores/TestStore";

interface CountProps {
  stores?: StoreType;
}

interface StoreType {
  CountStore: CountStore;
}

const Count = inject("stores")(
  observer(({ stores }: CountProps) => {
    const { count, handleCount } = stores!.CountStore;

    return <div>{count}</div>;
  })
);

export default Count;
