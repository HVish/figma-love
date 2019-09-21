import { useState, useCallback } from 'react';
import { withTranslation } from 'react-i18next';
import Search from './Search';

export const useSearch = () => {
    const [value, setValue] = useState('');

    const onChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        setValue((e.target as HTMLInputElement).value);
    }, []);

    const onCancel = useCallback(() => setValue(''), []);

    return { value, onChange, onCancel };
};

export default withTranslation()(Search);
