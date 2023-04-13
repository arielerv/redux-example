import {useEffect} from 'react';
import {fetchCarsRequest, cleanStore} from 'state/cars/reducer';
import {connect} from 'react-redux';
import {selectCars, selectLoading} from 'state/cars/selector';

const Cars = ({onMount, unMount, cars, isLoading}) => {
  useEffect(() => {
    onMount();
    return () => unMount();
  }, []);

  return (
    <div className="container">
      {isLoading && <p>Cargando</p>}
      {cars && (
        <table className="styled-table">
          <caption>Listado de autos</caption>
          <thead>
            <tr>
              <td>Marca</td>
              <td>Modelo</td>
              <td>Año</td>
            </tr>
          </thead>
          <tbody>
            {cars.map(car => (
              <tr key={car.id}>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default connect(state => ({cars: selectCars(state), isLoading: selectLoading(state)}), {
  onMount: fetchCarsRequest,
  unMount: cleanStore,
})(Cars);
