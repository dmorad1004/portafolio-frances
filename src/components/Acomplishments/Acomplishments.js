import React from 'react';

import {
    Section,
    SectionDivider,
    SectionTitle,
} from '../../styles/GlobalComponents';
import { Img } from '../Projects/ProjectsStyles';
// import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

// const data = [
//     { number: 20, text: 'Open Source Projects' },
//     { number: 1000, text: 'Students' },
//     { number: 1900, text: 'Github Followers' },
//     { number: 5000, text: 'Github Stars' },
// ];

const Acomplishments = () => (
    <Section>
        <SectionTitle>Personal Achievements</SectionTitle>
        <Img src="https://media2.giphy.com/media/5x89XRx3sBZFC/giphy.gif?cid=790b761167575154f9579be9b62fec0e723664efdb3086e0&rid=giphy.gif&ct=g" />
    </Section>
);

export default Acomplishments;
