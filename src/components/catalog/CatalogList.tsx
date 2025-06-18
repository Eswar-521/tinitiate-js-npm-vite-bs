import React from "react";
import { Table } from "react-bootstrap";

interface CatalogItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface Props {
  data: CatalogItem[];
}

const CatalogList: React.FC<Props> = ({ data }) => {
  return (
    <Table striped bordered hover className="mt-3">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>
              <img src={item.image} alt={item.name} width="50" />
            </td>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CatalogList;
