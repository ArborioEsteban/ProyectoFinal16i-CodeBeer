import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ItemsForm from './Form/ItemsForm';
import ItemsTable from './Table/ItemsTable';

const AdminView = () => {
  const [modifyingItem,setModifyingItem] = useState(null);

  return (
    <Container className='my-5'>
      <h1 className='text-white'>Panel de Admin</h1>
      <hr />
      <ItemsForm modifyingItem={modifyingItem} />
      <ItemsTable setModifyingItem={setModifyingItem}/>
    </Container>
  );
};

export default AdminView