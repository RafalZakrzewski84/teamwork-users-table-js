import commonStyles from './constants/commonStyles';

const styles = {
  container: {
    ...commonStyles.flexContainer,
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    '& h1': {
      fontSize: '3rem',
      marginBottom: commonStyles.spaces.medium,
    },
    '& p': {
      fontSize: '1rem',
      marginBottom: commonStyles.spaces.small,
    },
  },
};

export default styles;
