<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include database and object files
include_once '../../config/db.php';
include_once '../../models/product.php';

// get database connection
$database = new DatabaseConnection();
$db = $database->getConnection();

// prepare product object
$product = new Product($db);

// get id of product to be edited
$data = json_decode(file_get_contents("php://input"));

// set ID property of product to be edited
$product->id = intval($data->id);

// set product property values
$product->name = $data->name;
$product->alias = $data->alias;
$product->description = $data->description;
$product->groupId = $data->groupId;
$product->categoryId = $data->categoryId;
$product->subcategoryId = $data->subcategoryId;
$product->price = $data->price;
$product->barcode = $data->barcode;
$product->dimension = $data->dimension;
$product->weight = $data->weight;
$product->image = $data->image;
$product->active = $data->active;

// update the product
if ($product->update()) {

    // set response code - 200 ok
    http_response_code(200);

    // tell the user
    echo json_encode(array("message" => "Product was updated."));
}

// if unable to update the product, tell the user
else {

    // set response code - 503 service unavailable
    http_response_code(503);

    // tell the user
    echo json_encode(array("message" => "Unable to update product."));
}
