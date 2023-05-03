import sizes from './sizes';
import bg from './bg.svg';

const styles = {
  '@global': {
    '.fade-exit': {
      opacity: 1
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out'
    }
  },
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'scroll',
    scrollbarWidth: 'none',
    backgroundColor: '#0f26aa',
    backgroundImage: `url(${bg})`
    /* background by SVGBackgrounds.com */
  },
  heading: {
    fontSize: '2rem'
  },
  container: {
    width: '45%',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [sizes.down('xxl')]: {
      width: '50%'
    },
    [sizes.down('xl')]: {
      width: '60%'
    },
    [sizes.down('lg')]: {
      width: '80%'
    },
    [sizes.down('xs')]: {
      width: '70%'
    }
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    '& a': {
      color: 'white'
    }
  },
  palettes: {
    boxSizing: 'border-box',
    padding: '5px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '2.5rem',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)'
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1.5rem'
    }
  }
};

export default styles;
