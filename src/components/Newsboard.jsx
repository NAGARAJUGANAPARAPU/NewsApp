import { useState, useEffect } from "react";
import Newsitems from "./Newsitems"; // Ensure you have this component created
import axios from "axios";

function Newsboard({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
      );

      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false); // Done loading whether success or fail
    }
  };
  useEffect(() => {
    fetchNews();
  }, [category]);

  return (
    <div className="container my-4">
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <Newsitems
                src={article.urlToImage}
                url={article.url}
                title={article.title}
                description={article.description}
              />
              {/* <Newsitems
                src={article.urlToImage || "fallback-image.jpg"}
                url={article.url}
                title={article.title || "No Title"}
                description={article.description || "No description available."}
              /> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Newsboard;
