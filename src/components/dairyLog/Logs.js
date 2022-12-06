import React from 'react';

import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img,
} from './LogsStyles';
import {
    Section,
    SectionDivider,
    SectionTitle,
} from '../../styles/GlobalComponents';
import { logs } from '../../constants/constants';

const Logs = () => (
    <Section nopadding id="logs">
        <SectionDivider />
        <GridContainer>
            {logs.map((p, i) => {
                return (
                    <BlogCard key={i}>
                        <Img src={p.image} />
                        <TitleContent>
                            <HeaderThree title>{p.title}</HeaderThree>
                            <Hr />
                        </TitleContent>
                        <CardInfo className="card-info">
                            {p.description1}
                            <br></br>
                            <br></br>
                            {p.description2}
                        </CardInfo>
                        {/* <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div> */}
                        <UtilityList></UtilityList>
                    </BlogCard>
                );
            })}
        </GridContainer>
    </Section>
);

export default Logs;
