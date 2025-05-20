function Newsitems({ src, url, title, description }) {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src}
        style={{ height: "200px", width: "325px" }}
        className="card-img-top"
        alt="News Image"
      />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-tex">{description}</p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default Newsitems;
