import { useLocalStorage } from '@mantine/hooks';

const Toggle = () => {
  const [toggle, settoggle] = useLocalStorage<boolean>({
    key: 'toggle',
    defaultValue: true,
    getInitialValueInEffect: true,
  });

  const getToggle = () => {
    return toggle;
  };

  const setToggle = (status: boolean) => {
    settoggle(status);
  };

  return {
    getToggle,
    setToggle,
  };
};

export default Toggle;
