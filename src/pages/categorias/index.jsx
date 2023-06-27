import { Table } from "react-bootstrap";
function Categorias() {
    return (
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Descripcion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Ropa</td>
          <td>camisas, camisetas, pantalones</td> 
        </tr>
        <tr>
          <td>2</td>
          <td>Calzado</td>
          <td>tenis, sport, formal</td> 
        </tr>
        <tr>
          <td>3</td>
          <td> Tecnologia </td>
          <td> Computadores, televisores</td>
        </tr>
      </tbody>
    </Table>
      );
}

export default Categorias;