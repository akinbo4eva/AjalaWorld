/* eslint-disable react/prop-types */

import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

function CityList({ isLoading, cities }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="add your first city by clicking on the map" />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;