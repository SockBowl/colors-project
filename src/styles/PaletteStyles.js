import sizes from './sizes';

const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  colors: {
    height: '90%'
  },
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    backgroundColor: 'black',
    cursor: 'pointer',
    marginBottom: '-4px',
    '& a': {
      color: 'white',
      width: '100px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-15px',
      textAlign: 'center',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.3)',
      lineHeight: '30px',
      textTransform: 'uppercase',
      textDecoration: 'none',
      border: 'none',
      opacity: '1'
    },
    [sizes.down('lg')]: {
      width: '75%',
      height: '33.3333%'
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '20%'
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '10%'
    }
  }
};

export default styles;
