import React from "react";
import { DropDown, DropDownWithoutInput } from "components";
import { useStyles } from "./styles";

export const Conatiner = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = React.useState<String>("2");

  const changeTab = (tab: String) => {
    tab !== activeTab && setActiveTab(tab);
  };

  return (
    <div className={classes.container}>
      <p>Lobox Dropdown Task</p>
      <div className={classes.tabs}>
        <span
          className={activeTab === "1" ? "active" : ""}
          onClick={() => changeTab("1")}
        >
          Without Input
        </span>
        <span
          className={activeTab === "2" ? "active" : ""}
          onClick={() => changeTab("2")}
        >
          With Input
        </span>
      </div>
      {activeTab === "1" && (
        <DropDownWithoutInput
          items={["Education🎼", "Art🍊", "Sport👛", "Games🏰", "Health👇"]}
        />
      )}
      {activeTab === "2" && (
        <DropDown
          items={["Education🎼", "Art🍊", "Sport👛", "Games🏰", "Health👇"]}
        />
      )}
    </div>
  );
};
