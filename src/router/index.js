import React from "react";
import { Switch, Route } from "react-router-dom";

import { BLOG_LINK, MAIN_LINK, TESTS_LINK, THEORY_LINK } from "./links";
import { Main, Blog, Tests, Theory } from "../page";

function MainRoute() {
  return (
    <Switch>
      <Route exact path={MAIN_LINK} component={Main} />
      <Route exact path={BLOG_LINK} component={Blog} />
      <Route exact path={TESTS_LINK} component={Tests} />
      <Route exact path={THEORY_LINK} component={Theory} />
    </Switch>
  );
}

export default MainRoute;
