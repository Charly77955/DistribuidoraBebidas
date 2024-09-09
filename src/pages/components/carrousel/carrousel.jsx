import React, {useState,useEffect} from 'react'
import { db } from '../../components/firebase/firebaseConfig';
import OwlCarousel from 'react-owl-carousel';

export default function Carrousel() {
    const [elements, setElements] = useState([]);

  useEffect(() => {
    db.collection('promociones').get().then(querySnapshot => {
      const elements = querySnapshot.docs.map(doc => doc.data());
      setElements(elements);
    });
  }, []);

  return (
    <div>
    <OwlCarousel
      className="owl-theme"
      loop={true}
      margin={10}
      nav={true}
      items={7}
    >
      {elements.map((element, index) => (
        <div key={index} className="item">
          <h2>{element.nombre}</h2>
          <p>{element.precio}</p>
          <img src={element.imagen} alt=""/>
        </div>
      ))}
    </OwlCarousel>
    </div>
  );
  
}
