import React from 'react';
import { Container, List } from './StopWatch.stylde';
import AddForm from 'components/AddForm';
import StopWatchItem from 'components/StopWatchItem';
import { useSelector } from 'react-redux';
import { getItems } from 'redux/stopWatchSlice';

const StopWatch = () => {
  const items = useSelector(getItems);

  return (
    <Container>
      <h1>tracker</h1>
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
