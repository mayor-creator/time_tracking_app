export function Information({ infoData }) {
  return (
    <>
      <div>
        <p>{`${infoData.current}hrs`}</p>
        <p>{`Last Week - ${infoData.previous}hrs`}</p>
      </div>
    </>
  );
}

Information.propTypes;
