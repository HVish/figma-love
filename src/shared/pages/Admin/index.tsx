import React, { useState, useCallback } from 'react';
import Select from 'react-select';
import Creatable from 'react-select/creatable';
import cn from 'classnames';

import { ReactComponent as LeftChevron } from 'shared/assets/chevron-left.svg';
import { ReactComponent as RightChevron } from 'shared/assets/chevron-right.svg';
import { ReactComponent as FigmaLoveLogo } from 'shared/assets/figma-love-logo.svg';

import Search, { useSearch } from 'components/Search';
import Checkbox from 'components/Checkbox';
import FlatButton from 'components/FlatButton';
import Dialog from 'components/Dialog';
import ImageUploader from 'components/ImageUploader';
import styles from './Admin.module.scss';

type OptionType = { label: string; value: string };

const Admin = () => {
    const [selectAll, setSelectAll] = useState(false);
    const [isCreateAssestDialogOpen, setIsCreateAssestDialogOpen] = useState(false);

    const { value: search, onChange: setSearch, onCancel: cancelSearch } = useSearch();

    const perPageOptions: OptionType[] = [
        {
            label: '10',
            value: '10',
        },
        {
            label: '20',
            value: '20',
        },
        {
            label: '50',
            value: '50',
        },
    ];
    const [perPage, setPerPage] = useState(perPageOptions[0]);

    const categoriesOption: OptionType[] = [
        {
            label: 'UI kit',
            value: 'ui_kit',
        },
        {
            label: 'Material',
            value: 'material',
        },
    ];
    const [categories, setCategories] = useState<OptionType[]>([]);

    const onSelectAllChange = useCallback(() => {
        setSelectAll(!selectAll);
    }, [selectAll]);

    const onPerPageChange = useCallback((value) => {
        setPerPage(value);
    }, []);

    const toggleCreateAssestDialog = useCallback(() => {
        setIsCreateAssestDialogOpen(!isCreateAssestDialogOpen);
    }, [isCreateAssestDialogOpen]);

    const onCategoriesChange = useCallback((value) => {
        setCategories(value);
    }, []);

    return (
        <div className={styles.admin}>
            <header className={styles.header}>
                <div className={styles.header__wrapper}>
                    <div className={styles.header__item}>
                        <FigmaLoveLogo className={styles.logo} />
                        <span className={styles.count}>24 assets</span>
                    </div>
                    <div className={styles.header__item}>
                        <button
                            className={cn('cta-button', styles['add-new-button'])}
                            onClick={toggleCreateAssestDialog}
                        >
                            Add new
                        </button>
                        <Search
                            value={search}
                            placeholder="Search"
                            onChange={setSearch}
                            onCancel={cancelSearch}
                            className={styles.admin__search}
                        />
                        <Dialog
                            isOpen={isCreateAssestDialogOpen}
                            onRequestClose={toggleCreateAssestDialog}
                            contentLabel="Creat Assest Modal"
                        >
                            <div className={styles['create-asset']}>
                                <h2 className={styles['create-asset__title']}>Add new asset</h2>
                                <form className={styles['create-asset__form']}>
                                    <input className="input" type="text" placeholder="Title" />
                                    <textarea
                                        className="input"
                                        rows={4}
                                        placeholder="Description"
                                    />
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="SEO keywords"
                                    />
                                    <input className="input" type="text" placeholder="Asset URL" />
                                    <input className="input" type="text" placeholder="SEO slug" />
                                    <div className={styles['create-asset__row']}>
                                        <ImageUploader />
                                        <Creatable
                                            isMulti
                                            menuPlacement="top"
                                            classNamePrefix="select"
                                            className={cn(
                                                'select',
                                                styles['create-asset__category']
                                            )}
                                            placeholder="Category"
                                            onChange={onCategoriesChange}
                                            value={categories}
                                            options={categoriesOption}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className={cn(
                                            'cta-button',
                                            'cta-button--lg',
                                            styles['create-asset__submit']
                                        )}
                                    >
                                        Publish
                                    </button>
                                </form>
                            </div>
                        </Dialog>
                    </div>
                </div>
            </header>
            <main className={styles.main}>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="center">
                                <Checkbox checked={selectAll} onChange={onSelectAllChange} />
                            </th>
                            <th>title</th>
                            <th>category</th>
                            <th>date added</th>
                            <th>views</th>
                            <th className="right" /> {/* actions */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="center">
                                <Checkbox checked={selectAll} onChange={onSelectAllChange} />
                            </td>
                            <td className="no-alpha">Material Design 1.0</td>
                            <td>UI Kit</td>
                            <td>Jul 17, 2019</td>
                            <td>1500</td>
                            <td className="right">
                                <FlatButton>Edit</FlatButton>
                                <FlatButton type="danger">Delete</FlatButton>
                            </td>
                        </tr>
                        <tr>
                            <td className="center">
                                <Checkbox checked={selectAll} onChange={onSelectAllChange} />
                            </td>
                            <td className="no-alpha">iOS app icon template</td>
                            <td>iOS app</td>
                            <td>Jul 17, 2019</td>
                            <td>1500</td>
                            <td className="right">
                                <FlatButton>Edit</FlatButton>
                                <FlatButton type="danger">Delete</FlatButton>
                            </td>
                        </tr>
                        <tr>
                            <td className="center">
                                <Checkbox checked={selectAll} onChange={onSelectAllChange} />
                            </td>
                            <td className="no-alpha">Chrome 70 UI for Windows</td>
                            <td>UI Kit</td>
                            <td>Jul 17, 2019</td>
                            <td>1500</td>
                            <td className="right">
                                <FlatButton>Edit</FlatButton>
                                <FlatButton type="danger">Delete</FlatButton>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <footer className="table__footer">
                <div className={styles['rows-per-page']}>
                    <span>Rows per page:</span>
                    <Select
                        isSearchable={false}
                        menuPlacement="auto"
                        value={perPage}
                        options={perPageOptions}
                        onChange={onPerPageChange}
                        classNamePrefix="select-dropdown"
                        className="select-dropdown"
                    />
                </div>
                <div className={styles['page-info']}>1-20 of 24</div>
                <div className={styles['page-navigations']}>
                    <FlatButton>
                        <LeftChevron />
                    </FlatButton>
                    <FlatButton>
                        <RightChevron />
                    </FlatButton>
                </div>
            </footer>
        </div>
    );
};

export default Admin;
