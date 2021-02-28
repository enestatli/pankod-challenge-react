interface Props {}

export const Card = (props: Props) => {
  return (
    <div className="card">
      <div className="hero">
        <img
          src="https://images.unsplash.com/photo-1614435082296-ef0cbdb16b70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="series-card"
        />
      </div>
      <div className="details">
        <p>Series</p>
      </div>
      {/* <div className="cardDetails">
        <p>Series</p>
      </div> */}
    </div>
  );
};
