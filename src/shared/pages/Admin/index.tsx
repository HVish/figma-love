import React, { useState, useCallback } from 'react';
import { ReactComponent as FigmaLoveLogo } from 'shared/assets/figma-love-logo.svg';
import Search from 'components/Search';
import Checkbox from 'components/Checkbox';
import FlatButton from 'components/FlatButton';
import css from './Admin.module.css';

const Admin = () => {
    const [search, setSearch] = useState('');
    const [selectAll, setSelectAll] = useState(false);

    const onSelectAllChange = useCallback(() => {
        setSelectAll(!selectAll);
    }, [selectAll]);

    const onSearchChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        setSearch((e.target as HTMLInputElement).value);
    }, []);

    return (
        <div className={css.admin}>
            <header>
                <div className={css.headerWrapper}>
                    <div className={css.headerContent}>
                        <FigmaLoveLogo className={css.logo} />
                        <span className={css.count}>24 assets</span>
                    </div>
                    <div className={css.headerContent}>
                        <button className={css.addNewButton}>Add new</button>
                        <Search value={search} placeholder="Search" onChange={onSearchChange} />
                    </div>
                </div>
            </header>
            <main className={css.main}>
                <table className={css.table}>
                    <thead>
                        <tr>
                            <th className={css.center}>
                                <Checkbox checked={selectAll} onChange={onSelectAllChange} />
                            </th>
                            <th>title</th>
                            <th>category</th>
                            <th>date added</th>
                            <th>views</th>
                            <th className={css.right} /> {/* actions */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={css.center}>
                                <Checkbox checked={selectAll} onChange={onSelectAllChange} />
                            </td>
                            <td className={css['no-alpha']}>Material Design 1.0</td>
                            <td>UI Kit</td>
                            <td>Jul 17, 2019</td>
                            <td>1500</td>
                            <td className={css.right}>
                                <FlatButton>Edit</FlatButton>
                                <FlatButton type="danger">Delete</FlatButton>
                            </td>
                        </tr>
                        <tr>
                            <td className={css.center}>
                                <Checkbox checked={selectAll} onChange={onSelectAllChange} />
                            </td>
                            <td className={css['no-alpha']}>iOS app icon template</td>
                            <td>iOS app</td>
                            <td>Jul 17, 2019</td>
                            <td>1500</td>
                            <td className={css.right}>
                                <FlatButton>Edit</FlatButton>
                                <FlatButton type="danger">Delete</FlatButton>
                            </td>
                        </tr>
                        <tr>
                            <td className={css.center}>
                                <Checkbox checked={selectAll} onChange={onSelectAllChange} />
                            </td>
                            <td className={css['no-alpha']}>Chrome 70 UI for Windows</td>
                            <td>UI Kit</td>
                            <td>Jul 17, 2019</td>
                            <td>1500</td>
                            <td className={css.right}>
                                <FlatButton>Edit</FlatButton>
                                <FlatButton type="danger">Delete</FlatButton>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <footer>footer</footer>
        </div>
    );
};

export default Admin;
