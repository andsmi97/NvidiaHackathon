import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { history, AppStateType } from "./redux/store";
import NotFound from "./pages/NotFound/Container";
import Welcome from "./pages/Welcome/Container";
// import SignIn from "./pages/SignIn/Container";
import { currentUser } from "./firebase/firestoreQueries";
import PersonPageContainer from "./pages/PersonPage/Container";
import ProjectPageContainer from "./pages/ProjectPage/Container";
const mapStateToProps = (state: AppStateType) => ({
  currentUser: state.common.currentUser,
});

const Router = () => {
  if (currentUser) {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" render={() => <Welcome />} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    );
  }
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {/* <Route exact path="/" render={() => <SignIn />} /> */}
        <Route exact path="/" render={() => <ProjectPageContainer />} />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  );
};

export default connect(mapStateToProps)(Router);
