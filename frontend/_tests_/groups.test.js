import React from 'react';
import ReactDOM from 'react-dom';
import { isTSAnyKeyword } from '@babel/types';


test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });