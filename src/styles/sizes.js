const sizes = {
  up() {},

  down(size) {
    const sizes = {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1800px',
      xxl: '2200px'
    };
    return `@media (max-width: ${sizes[size]})`;
  }
};

export default sizes;
