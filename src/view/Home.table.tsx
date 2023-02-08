import { Card, Table } from '@mantine/core';

import { Locale } from 'src/locales';
import { Post } from 'src/model';

import { useStyle } from './Home.style';

interface BalanceDetailFormProps {
  data: Post[] | undefined;
}

const BalanceTable = (props: BalanceDetailFormProps) => {
  const { classes } = useStyle();
  const { t } = Locale();

  const tableHeader = (header: string[]) => {
    return (
      <thead>
        <tr color='primary'>
          {header?.map((item: string) => (
            <th key={'TableHeader' + item} style={{ textAlign: 'center' }}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  const tableBody = () => {
    return props.data?.map((item, index) => (
      <tr color='light' key={index}>
        {[item.id, item.userId, item.title, item.body].map((item: string) => (
          <td key={item} className={classes.textCenter}>
            <div className='small text-medium-emphasis'>{item}</div>
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <Card
      shadow='sm'
      p='lg'
      radius='md'
      withBorder
      className={classes.card}
      key={'BalanceCard'}
    >
      <Card.Section key={'headerSection'}>
        <Table
          horizontalSpacing='xs'
          verticalSpacing='xs'
          striped
          highlightOnHover
          key={'viewTable'}
        >
          {tableHeader([
            t('app.table.header.id'),
            t('app.table.header.userid'),
            t('app.table.header.title'),
            t('app.table.header.body'),
          ])}
          <tbody key={'mainBody'}>{tableBody()}</tbody>
        </Table>
      </Card.Section>
    </Card>
  );
};

export default BalanceTable;
