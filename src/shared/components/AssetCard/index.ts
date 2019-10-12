import { withTranslation } from 'react-i18next';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { PageMode, RootState } from 'store/app/types';
import { setAssetPageMode } from 'store/app/actions';
import { getAssetPageMode } from 'store/app/selectors';
import AssetCard from './AssetCard';

const mapStateToProps = ({ app }: RootState) => ({
    assetPageMode: getAssetPageMode({ app }),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setAssetPageMode: (mode: PageMode) => dispatch(setAssetPageMode(mode)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(AssetCard));
