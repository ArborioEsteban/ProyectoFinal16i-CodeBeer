import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ItemsForm from './Form/ItemsForm';
import ItemsTable from './Table/ItemsTable';

const AdminView = () => {
  const [modifyingItem,setModifyingItem] = useState(null);

  return (
    <Container className='mt-5'>
      <hr className='mt-5'></hr>
      <div className='text-white mt-5'>

      </div>
        <hr />
        <h1 className='text-white mt-4'>Panel de Admin</h1> 
        <hr />
      <ItemsForm modifyingItem={modifyingItem} />
      <ItemsTable setModifyingItem={setModifyingItem}/>
    </Container>
  );
};

export default AdminView