# React Scrollspy IO

Package created to provide a way to create a scrollspy which uses intersection observer to determine which section in the navigation menu should be higlighted.

It also allows you to scroll to the desired section.

## Getting started

```plaintext
npm install --save react-scrollspy-io
```

## Usage

To see how to use this component, run `yarn storybook` or look at the stories to understand how to use it.

You can also enable the **intersection-observer-debugger** in `react-scrollspy-io.tsx` to debug the position of the intersection observer.

```typescriptreact
import React, { ReactElement } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollspyIO from '../react-scrollspy-io';
import SpyOn from '../components/spyOn';
import Spy, { SpyItem } from '../components/spy';

export const Example = () => {
  const handleOnChange = e => {
    console.log(e);
  };

  const ObserverProps = {
    rootMargin: '-10% 0px -80% 0px',
    onChange: handleOnChange,
  };

  return (
    <ScrollspyIO initialActiveId='section1' ObserverProps={ObserverProps}>
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
              </section>
            </SpyOn>
          </Col>
        </Row>
      </Container>
    </ScrollspyIO>
  );
};
```

As you can see, you can have multiple `SpyOn` components with the same `id` to fine tune the control of when you want the `Spy` and `SpyItem` component to show as active.

## Caveats

IntersectionObserver is not supported by all browsers.

More information is available [here](https://github.com/researchgate/react-intersection-observer#intersectionobservers-browser-support)