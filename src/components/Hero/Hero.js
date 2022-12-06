import React from 'react';

import {
    Section,
    SectionText,
    SectionTitle,
} from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <>
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    {props.title}
                </SectionTitle>
                <img src="/images/cat.jpg" style={{ width: 500 }} />
            </LeftSection>
        </Section>
    </>
);

export default Hero;
