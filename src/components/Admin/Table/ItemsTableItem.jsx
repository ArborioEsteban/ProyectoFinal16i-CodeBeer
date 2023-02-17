

const ItemsTableItem = (props) => {
    const {id,name,price,image,description}= props;

  return ( <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{price}</td>
    <td>
        <img src={image} className='imgTable' alt={name}/>
    </td>
    <td>{description}</td>
   
  </tr>
  )
}

export default ItemsTableItem