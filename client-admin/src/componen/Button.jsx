export const Button = ({ eventKlik, statusnyaApa }) => {
    return (
      <button onClick={eventKlik}>
        {statusnyaApa === false ? <>Add New</> : <>Close</>}
      </button>
    );
  };
  