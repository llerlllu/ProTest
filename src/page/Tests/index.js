import React, { useMemo, useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

import { MainLayout } from "../../components/layout";
import { First, Third, Second } from "./Test";
import { TESTS_MENU } from "../../utils/const";

import "./style.scss";

function Tests() {
  const [activeMenu, setActiveMenu] = useState(0);

  const onClickItemMenu = (index) => {
    setActiveMenu(index);
  };

  const renderContent = useMemo(() => {
    switch (activeMenu) {
      case 0:
        return <First />;
      case 1:
        return <Second />;
      case 2:
        return <Third />;
    }
  }, [activeMenu]);

  return (
    <MainLayout>
      <div className="tests">
        <div className="tests__body">
          <div className="nav">
            <List>
              {TESTS_MENU?.map((item, index) => (
                <ListItem
                  disablePadding
                  onClick={() => onClickItemMenu(index)}
                  key={item}
                >
                  <ListItemButton>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
          <div className="content">
            <h2 className="content__title">{TESTS_MENU[activeMenu]}</h2>
            {renderContent}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Tests;
