import React from 'react';
import ReactDOM from 'react-dom';
import { isTSAnyKeyword } from '@babel/types';

import RegisterTopics from '../components/Student/RegisterTopics';



it('renders without error', () => {
    const element = document.createElement('div');
    ReactDOM.render(<RegisterTopics></RegisterTopics>, element)
  });