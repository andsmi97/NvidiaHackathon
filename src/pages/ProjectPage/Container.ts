import { connect } from "react-redux";
import PersonPage from "./Page";

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

const PersonPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonPage);

export default PersonPageContainer;
