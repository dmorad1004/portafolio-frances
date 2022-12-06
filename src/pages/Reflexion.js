import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Logs from '../components/dairyLog/Logs';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projets';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section, SectionDivider } from '../styles/GlobalComponents';

const Reflexion = () => {
    return (
        <Layout>
            <Section grid>
                <Hero title={'Réflexion'} />
                <BgAnimation />

                <SectionDivider />
            </Section>

            <Logs />
        </Layout>
    );
};

export default Reflexion;
