import { FunctionComponent } from 'react';
import { Card } from '@common/components/card/card.component';
import { Spacer } from '@common/components/spacer/spacer.component';
import { withStandardAnimation } from '@common/hocs/standart-animation.hoc';
import { Article } from '@layouts/article/article.component';
import slugify from 'slugify';

import { useWorksService } from '../../contexts/works/works.service';

import {
  GridContainer,
  LinkWrapper,
  SectionContainer,
  SubTitle,
  Title,
} from './works.styles';

const WorksPage: FunctionComponent = () => {
  const worksService = useWorksService();

  return (
    <Article>
      <header>
        <Title>My Works</Title>
      </header>
      <Spacer size={5} />

      <SectionContainer>
        <SubTitle>Javascript / TS / React</SubTitle>
        <Spacer size={6} />

        <GridContainer>
          {worksService.works.map(({ title, ...props }) => (
            <LinkWrapper
              key={title}
              to={slugify(title, {
                lower: true,
              })}
            >
              <Card title={title} {...props} />
            </LinkWrapper>
          ))}
        </GridContainer>
      </SectionContainer>
    </Article>
  );
};

export default withStandardAnimation(WorksPage);
