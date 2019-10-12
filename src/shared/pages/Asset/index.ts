import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import { RootState } from 'store/app/types';
import { getAssetPageMode } from 'store/app/selectors';
import Asset from './Asset';

const mapStateToProps = ({ app }: RootState) => ({
    mode: getAssetPageMode({ app }),
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(Asset));
