import React from 'react';
import { Container, List, Title } from './StopWatch.stylde';
import AddForm from 'components/AddForm';
import StopWatchItem from 'components/StopWatchItem';
import { useSelector } from 'react-redux';
import { getItems } from 'redux/stopWatchSlice';

const StopWatch = () => {
  const items = useSelector(getItems);

  return (
    <Container>
      <Title>tracker</Title>
      <AddForm />
      <List>
        {items.map(item => (
          <StopWatchItem key={item.id} item={item} />
        ))}
      </List>
    </Container>
  );
};

export default StopWatch;
