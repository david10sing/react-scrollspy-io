import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollspyIO from '../react-scrollspy-io';
import SpyOn from '../components/spyOn';
import Spy, { SpyItem } from '../components/spy';

export default {
  title: 'React Scrollspy IO',
  component: ScrollspyIO,
} as Meta;

export const Example = () => {
  const handleOnChange = (e: IntersectionObserverEntry) => {
    // console.log(e);
  };

  const ObserverProps = {
    rootMargin: '-10% 0px -80% 0px',
    onChange: handleOnChange,
  };

  return (
    <ScrollspyIO ObserverProps={ObserverProps}>
      <Container fluid>
        <Row>
          <Col md='2'>
            <Spy top={20}>
              <SpyItem target='section1'>Section 1</SpyItem>
              <SpyItem target='section2'>Section 2</SpyItem>
              <SpyItem target='section3'>Section 3</SpyItem>
            </Spy>
          </Col>
          <Col>
            <section id='section1'>
              <h1>Section 1</h1>
              <SpyOn id='section1'>
                <p>
                  Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt
                  sint. Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non
                  duis. Elit culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit
                  officia reprehenderit ad sit ea laboris non in dolore.
                </p>
              </SpyOn>
              <p>
                Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt sint.
                Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non duis. Elit
                culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit officia
                reprehenderit ad sit ea laboris non in dolore.
              </p>
              <SpyOn id='section1'>
                <p>
                  Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt
                  sint. Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non
                  duis. Elit culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit
                  officia reprehenderit ad sit ea laboris non in dolore.
                </p>
              </SpyOn>
              <p>
                Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt sint.
                Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non duis. Elit
                culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit officia
                reprehenderit ad sit ea laboris non in dolore.
              </p>
            </section>

            <section id='section2'>
              <SpyOn id='section2'>
                <h1>Section 2</h1>
              </SpyOn>
              <p>
                Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt sint.
                Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non duis. Elit
                culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit officia
                reprehenderit ad sit ea laboris non in dolore.
              </p>
              <p>
                Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt sint.
                Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non duis. Elit
                culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit officia
                reprehenderit ad sit ea laboris non in dolore.
              </p>
              <p>
                Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt sint.
                Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non duis. Elit
                culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit officia
                reprehenderit ad sit ea laboris non in dolore.
              </p>
              <p>
                Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt sint.
                Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non duis. Elit
                culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit officia
                reprehenderit ad sit ea laboris non in dolore.
              </p>
              <p>
                Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt sint.
                Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non duis. Elit
                culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit officia
                reprehenderit ad sit ea laboris non in dolore.
              </p>
              <p>
                Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt sint.
                Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non duis. Elit
                culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit officia
                reprehenderit ad sit ea laboris non in dolore.
              </p>
            </section>

            <SpyOn id='section3'>
              <section id='section3'>
                <h1>Section 3</h1>
                <p>
                  Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt
                  sint. Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non
                  duis. Elit culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit
                  officia reprehenderit ad sit ea laboris non in dolore.
                </p>
                <p>
                  Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt
                  sint. Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non
                  duis. Elit culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit
                  officia reprehenderit ad sit ea laboris non in dolore.
                </p>
                <p>
                  Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt
                  sint. Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non
                  duis. Elit culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit
                  officia reprehenderit ad sit ea laboris non in dolore.
                </p>
                <p>
                  Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt
                  sint. Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non
                  duis. Elit culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit
                  officia reprehenderit ad sit ea laboris non in dolore.
                </p>
                <p>
                  Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt
                  sint. Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non
                  duis. Elit culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit
                  officia reprehenderit ad sit ea laboris non in dolore.
                </p>
                <p>
                  Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt
                  sint. Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non
                  duis. Elit culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit
                  officia reprehenderit ad sit ea laboris non in dolore.
                </p>
                <p>
                  Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt
                  sint. Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non
                  duis. Elit culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit
                  officia reprehenderit ad sit ea laboris non in dolore.
                </p>
                <p>
                  Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt
                  sint. Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non
                  duis. Elit culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit
                  officia reprehenderit ad sit ea laboris non in dolore.
                </p>
                <p>
                  Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt
                  sint. Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non
                  duis. Elit culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit
                  officia reprehenderit ad sit ea laboris non in dolore.
                </p>
                <p>
                  Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt
                  sint. Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non
                  duis. Elit culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit
                  officia reprehenderit ad sit ea laboris non in dolore.
                </p>
                <p>
                  Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt
                  sint. Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non
                  duis. Elit culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit
                  officia reprehenderit ad sit ea laboris non in dolore.
                </p>
                <p>
                  Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt
                  sint. Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non
                  duis. Elit culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit
                  officia reprehenderit ad sit ea laboris non in dolore.
                </p>
                <p>
                  Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt
                  sint. Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non
                  duis. Elit culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit
                  officia reprehenderit ad sit ea laboris non in dolore.
                </p>
                <p>
                  Id dolore sunt id aute pariatur aute velit ad nisi culpa in. Consectetur amet aliqua cupidatat ea anim labore deserunt
                  sint. Fugiat deserunt excepteur exercitation consectetur consectetur quis non in pariatur ut nisi. Ad ipsum minim non
                  duis. Elit culpa ullamco dolor ipsum sit. Anim irure amet cupidatat mollit est laborum. Cillum exercitation fugiat elit
                  officia reprehenderit ad sit ea laboris non in dolore.
                </p>
              </section>
            </SpyOn>
          </Col>
        </Row>
      </Container>
    </ScrollspyIO>
  );
};
