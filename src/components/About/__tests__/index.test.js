import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //renders About test
    //First Test - Baseline to verify that component is rendering
    it('renders', () => {
        render(<About />);
      });
    //Second Test - test case - to compare snapshots of the DOM - enabled by JEST
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
      });
})