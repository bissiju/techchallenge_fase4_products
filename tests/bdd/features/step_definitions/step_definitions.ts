// eslint-disable-next-line unused-imports/no-unused-imports
import { Given, Then, When } from "@cucumber/cucumber";
import assert from "assert";
import dotenv from "dotenv";

dotenv.config();
const url_endpoint = "http://localhost:3002/api";

let response: any;
let categoryId: string;
let productId: string;

//////////////////////// Create a category
Given("the system is ok", function () {
  return true;
});

When("sending a request to the creation api", async function () {
  response = await fetch(`${url_endpoint}/product/category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "bdd_test",
    }),
  });
});

Then("it should return the created category", async function () {
  const respBody = await response.json();
  categoryId = respBody?.message?.id;
  assert.equal(respBody?.message?.name, "bdd_test");
});


//////////////////////// List categories
Given("there is at least one category created", function () {
  assert.equal(categoryId?.length > 0, true);
});

When("sending a request to fetch the list", async function () {
  response = await fetch(`${url_endpoint}/product/category`);
});

Then("it should return the list of categories", async function () {
  const respBody = await response.json();
  const hasCategories = respBody.categories.length > 0;
  assert.equal(hasCategories, true);
});

//////////////////////// Fetch a category
When("sending a request to fetch the category", async function () {
  response = await fetch(`${url_endpoint}/product/category/${categoryId}`);
});

Then("it should return the category", async function () {
  const respBody = await response.json();
  assert.equal(respBody.category.id, categoryId);
});

//////////////////////// Edit a category
When("sending a request to modify the category", async function () {
  response = await fetch(`${url_endpoint}/product/category/${categoryId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "category_modified",
    }),
  });
});

Then("it should return the modified category", async function () {
  const respBody = await response.json();
  assert.equal(respBody?.message?.name, "category_modified");
});

//////////////////////// Delete a category
When("sending a request to delete the category", async function () {
  response = await fetch(`${url_endpoint}/product/category/${categoryId}`, {
    method: "DELETE",
  });
});

Then("it should successfully delete the category", async function () {
  const respBody = await response.json();
  assert.equal(respBody?.status, "success");
});

//////////////////////// Create a product
Given("there is a created category", async function () {
  assert.equal(categoryId?.length > 0, true);
  response = await fetch(`${url_endpoint}/product/category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "bdd_test",
    }),
  });
  const body = await response.json();
  categoryId = body.message.id;
  assert.equal(categoryId?.length > 0,true);
});
When("sending a request to the product creation api", async function () {
  response = await fetch(`${url_endpoint}/product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "product_bdd",
      price: 1,
      description: "string",
      categoryId,
    }),
  });
});

Then("it should return the created product", async function () {
  const respBody = await response.json();
  productId = respBody?.message?.id;
  assert.equal(respBody?.message?.name, "product_bdd");
});


//////////////////////// List products
Given("there is at least one product created", function () {
  assert.equal(productId?.length > 0, true);
});

When("sending a request to fetch the list of products", async function () {
  response = await fetch(`${url_endpoint}/product`);
});

Then("it should return the list of products", async function () {
  const respBody = await response.json();
  const hasProducts = respBody.products.length > 0;
  assert.equal(hasProducts, true);
});

//////////////////////// Fetch a product
When("sending a request to fetch the product", async function () {
  response = await fetch(`${url_endpoint}/product/${productId}`);
});

Then("it should return the product", async function () {
  const respBody = await response.json();
  assert.equal(respBody.product.id, productId);
});

//////////////////////// Edit a product
When("sending a request to modify the product", async function () {
  response = await fetch(`${url_endpoint}/product/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "product_modified",
      price: 2,
      description: 'test',
      categoryId
    }),
  });
});

Then("it should return the modified product", async function () {
  const respBody = await response.json();
  assert.equal(respBody?.message?.name, "product_modified");
});

//////////////////////// Delete a product
When("sending a request to delete the product", async function () {
  response = await fetch(`${url_endpoint}/product/${productId}`, {
    method: "DELETE",
  });
});

Then("it should successfully delete the product", async function () {
  const respBody = await response.json();
  assert.equal(respBody?.status, "success");
});

Then("the api status should be {int}", function (status) {
  assert.equal(response.status, status);
});
