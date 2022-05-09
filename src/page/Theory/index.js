import React, { useMemo, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { First, Second, Fifth, Fourth, Third, Sixth, Seventh } from "./Item";
import { MainLayout } from "../../components/layout";
import { THEORY_MENU } from "../../utils/const";

import "./style.scss";

function Theory() {
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
      case 3:
        return <Fourth />;
      case 4:
        return <Fifth />;
      case 5:
        return <Sixth />;
      case 6:
        return <Seventh />;
    }
  }, [activeMenu]);

  return (
    <MainLayout>
      <div className="theory">
        <div className="theory__body">
          <div className="nav">
            <List>
              {THEORY_MENU?.map((item, index) => (
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
            <h2 className="content__title">{THEORY_MENU[activeMenu]}</h2>
            {renderContent}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Theory;
