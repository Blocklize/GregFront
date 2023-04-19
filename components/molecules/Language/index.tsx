import React from 'react';

import { useRouter } from 'next/router';

import Styles from './styles.module.scss'

export default function Language () {
    const router = useRouter();

    const { locale } = router;

    const changeLanguage = (e: any) => {
        const locale = e.target.value;

        router.push('/', '/', { locale })
    }
    return (
        <select
            defaultValue={locale}
            onChange={changeLanguage}
            className={Styles.select}
        >
            <option value="pt">PT</option>
            <option value="en">EN</option>
        </select>
    )
}