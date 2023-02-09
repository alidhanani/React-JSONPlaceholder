import { createStyles } from '@mantine/core';

export const useStyle = createStyles(() => {
  return {
    textCenter: { textAlign: 'center' },
    card: {
      marginTop: '30px',
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    form: {
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    buttonGroup: {
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingRight: '100px',
    },
  };
});
