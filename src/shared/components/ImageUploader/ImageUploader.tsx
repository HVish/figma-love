import React, { useState, useCallback, ChangeEvent, createRef } from 'react';
import { WithTranslation } from 'react-i18next';

import styles from './ImageUploader.module.scss';

export interface Props extends WithTranslation {
    buttonLabel?: string;
}

const ImageUploader = ({ buttonLabel = 'Select image' }: Props) => {
    const [url, setUrl] = useState('');
    const fileInput = createRef<HTMLInputElement>();

    const readURL = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const input = event.target;
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target) {
                    setUrl(e.target.result as string);
                }
            };
            reader.readAsDataURL(input.files[0]);
        }
    }, []);

    const onSelectFileClick = useCallback(() => {
        if (fileInput.current) {
            fileInput.current.click();
        }
    }, [fileInput]);

    return (
        <div className={styles['image-uploader']}>
            <input
                className={styles['image-uploader__input']}
                type="file"
                ref={fileInput}
                onChange={readURL}
            />
            <button
                className={styles['image-uploader__upload-button']}
                type="button"
                onClick={onSelectFileClick}
            >
                {buttonLabel}
            </button>
            <img className={styles['image-uploader__preview']} src={url} alt="" />
        </div>
    );
};

export default ImageUploader;
