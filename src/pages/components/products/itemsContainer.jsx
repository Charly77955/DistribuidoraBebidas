// ProductsList.js
import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../products/productosStyles.css";

export default function ItemsContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosRef = collection(db, "bebidas");
    getDocs(productosRef).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  return (
    <div className="d-flex">
      <>
        {productos.map((item, i) => (
          <div  key={i} className="productosCards">
            <Card style={{ width: 150, height: 150 }}>
              <Card.Img variant="top" src={item.imagen} />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.precio}</Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </>
    </div>
  );
}
