import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
import css from "./style.css";
import "./style.css";

const productList = getProductList(20);

renderGoodsList(productList);