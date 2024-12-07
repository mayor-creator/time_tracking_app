import ellipsisImage from "../assets/images/icon-ellipsis.svg";

export function Card({ data }) {
  const weeklyData = data.timeframes.weekly;

  return (
    <>
      <div>
        <div>
          <div>
            <p>{data.title}</p>
            <img src={ellipsisImage} alt="ellipsis icon" />
          </div>
          <div>
            {Object.values(weeklyData).map((values, index) => (
              <p key={index}>{values}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes;
