import React from "react";
import ReactDOM from "react-dom";
import App from "components/weather";
import { shallow } from 'enzyme';
import { fetchWeather } from 'api/weather';


describe('React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<App />);
   });
});