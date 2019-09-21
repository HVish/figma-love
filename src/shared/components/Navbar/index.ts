import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Dispatch } from 'redux';

import { RootState } from 'store/app/types';
import { getIsNavOpen } from 'store/app/selectors';
import { toggleNavBar } from 'store/app/actions';
import Navbar from './Navbar';

const mapStateToProps = ({ app }: RootState) => ({
    isOpen: getIsNavOpen({ app }),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onToggle: (isOpen?: boolean) => dispatch(toggleNavBar(isOpen)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(Navbar));
