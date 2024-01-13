import React, { useState } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useUserContext } from '../UserContext';
import { useTranslation } from 'react-i18next';

export default function GoBackButton  (props) {
    const { t } = useTranslation();

    const { language } = useUserContext();

    const navigateBack = () => {
       props.navigateBack()
    }

    return (
        <div arie-labe={'press To go back'}className={`goBackButton`} onClick={()=>navigateBack()}>
            <ArrowBackIcon alt='arrow back icon' />
            {/* <span>{t('Back')}</span> */}
        </div>
    )
}