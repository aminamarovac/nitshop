import React from "react";
import SimplifiedDiv from "../../Components/SimplifiedDiv/SimplifiedDiv";
import Carousel from "../../Components/Carousel/Carousel";
import { articles } from "../ArticlesHomePage/ArticlesHomePage";
import ArticleCard from "../ArticleCard/ArticleCard";

const styles = {
  articleCardHolder: {
    padding: 20,
  },
};
const SuggestedCarousel = () => {
  return (
    <SimplifiedDiv>
      <Carousel
        showIndicators={false}
        showStatus={false}
        infiniteLoop
        interval={1000}
        swipeable
        centerMode
        centerSlidePercentage={33}
      >
        {articles.map((article, index) =>(
            <SimplifiedDiv style={styles.articleCardHolder}>
              <ArticleCard
                key={index}
                title={article.title}
                image={article.image}
                description={article.description}
                price={article.price}
              />
            </SimplifiedDiv>
          ))}
      </Carousel>
    </SimplifiedDiv>
  );
};

export default SuggestedCarousel;
