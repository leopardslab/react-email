import { CSSClasses, makeStyles } from './makeStyles';

const style1: CSSClasses = {
  root: {
    margin: '10px',
    padding: '10px',
  },
};

const style2: CSSClasses = {
  hello: {
    backgroundColor: 'red',
    borderRadius: '5px',
  },
  root: {
    padding: '50px',
    color: 'red',
  },
};

const expectedStyle: CSSClasses = {
  root: {
    margin: '10px',
    padding: '50px',
    color: 'red',
  },
  hello: {
    backgroundColor: 'red',
    borderRadius: '5px',
  },
};

describe('makeStyles tests', () => {
  test('using makeStyles and useStyles with style1 and style2 should return expectedStyle', () => {
    const useStyles = makeStyles(style1);
    const style = useStyles(style2);

    expect(style).toEqual(expectedStyle);
  });
});
