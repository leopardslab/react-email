import TestComponent from './TestComponent';

declare var require: any
var React = require('react');


export default {
    title: "TestComponent"
};

export const Primary = () => <TestComponent theme="primary" />;

export const Secondary = () => <TestComponent theme="secondary" />;