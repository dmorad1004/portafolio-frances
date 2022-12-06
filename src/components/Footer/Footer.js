import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>appelez</LinkTitle>
                    <LinkItem href="tel:314-343-3432">666</LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Courrier électronique</LinkTitle>
                    <LinkItem href="mailto:contact@jsmastery.com">
                        dmorad@unal.edu.co
                    </LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>Accepter l'absurdité de la vie</Slogan>
                </CompanyContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
