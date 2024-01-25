import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lng = searchParams.get("lng");
  const lat = searchParams.get("lat");

  return (
    <div className={styles.mapContainer}>
      <h1>
        lng:{lng} lat:{lat}
      </h1>
      <button onClick={() => setSearchParams({ lat: 20, lng: 50 })}>
        click
      </button>
    </div>
  );
}

export default Map;
