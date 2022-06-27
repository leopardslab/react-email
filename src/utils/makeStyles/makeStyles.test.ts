import { CSSClasses, makeStyles } from './makeStyles';

const style1: CSSClasses = {
  root: {
    margin: '10px',
    padding: '10px',
  },
  text: {
    textAlign: 'center',
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
  text: {
    textAlign: 'center',
  },
};

describe('makeStyles tests', () => {
  test('using makeStyles and useStyles with style1 and style2 should return expectedStyle', () => {
    const useStyles = makeStyles(style1);
    const modifiedStyle1 = useStyles({ classes: style2 });
    const modifiedStyle2 = useStyles();

    expect(modifiedStyle1).toEqual(expectedStyle);
    expect(modifiedStyle2).toEqual(style1);
  });
});
