import { PageSection, SectionTitle } from './Section.styled';

export const Section = ({ children, title }) => {
  return (
    <PageSection>
      {title && <SectionTitle>{title}</SectionTitle>}

      {children}
    </PageSection>
  );
};
