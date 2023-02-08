import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';
import React from 'react';

const RegistrationAlert = (props: {
  visible: boolean;
  setVisible: () => void;
  message: string;
  title: string;
  className: string;
}) => {
  return (
    <>
      {props.visible ? (
        <Alert
          icon={<IconAlertCircle size={16} />}
          title={props.title}
          onClose={props.setVisible}
          className={props.className}
        >
          {props.message}
        </Alert>
      ) : null}
    </>
  );
};

export default React.memo(RegistrationAlert);
