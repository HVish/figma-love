import React from 'react';
import { WithTranslation } from 'react-i18next';
import Modal, { Props as ReactModalProps } from 'react-modal';

import { ReactComponent as CrossIcon } from 'shared/assets/cross.svg';
import './Dialog.scss';

export interface Props extends WithTranslation, ReactModalProps {
    children?: React.ReactNode;
}

const Dialog = ({ children, ...props }: Props) => {
    return (
        <Modal
            portalClassName="modal-portal"
            htmlOpenClassName="modal__html--open"
            bodyOpenClassName="modal__body--open"
            className={{
                base: 'modal',
                beforeClose: 'modal--before-close',
                afterOpen: 'modal--after-open',
            }}
            overlayClassName={{
                base: 'modal__overlay',
                beforeClose: 'modal__overlay--before-close',
                afterOpen: 'modal__overlay--after-open',
            }}
            closeTimeoutMS={350}
            {...props}
        >
            <button className="modal__close" onClick={props.onRequestClose}>
                <CrossIcon />
            </button>
            {children}
        </Modal>
    );
};

export default Dialog;
