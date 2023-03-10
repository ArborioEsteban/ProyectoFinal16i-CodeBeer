import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import axios from "../../api/axios";
import ItemsTableItem from "./ItemsTableItem";

import "./ItemsTable.css";

const ItemsTable = (props) => {
  const { setModifyingItem } = props;

  const [items, SetItems] = useState([]);

  useEffect(() => {
    const itemsFetch = async (e) => {
      const data = await axios().get(`/products`);
      SetItems(data.data);
    };
    itemsFetch();
  }, []);

  return (
    <Table responsive className="mt-3 bg-dark text-white rounded">
      <thead>
        <tr className="text-center">
          <th>Nombre</th>
          <th>Precio</th>
          <th>Imagen</th>
          <th>Descripcion</th>
          <th>Categoria</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {items.map((elemento) => {
          return (
            <ItemsTableItem
              key={elemento.productID}
              {...elemento}
              setModifyingItem={setModifyingItem}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

export default ItemsTable;
