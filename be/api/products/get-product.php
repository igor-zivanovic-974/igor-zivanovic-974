<?php
// required headers
// header("Access-Control-Allow-Origin: '*'");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: GET");
// header("Access-Control-Allow-Credentials: true");
// header('Content-Type: application/json');
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Vary: Origin, Access-Control-Request-Headers");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE");
header("Access-Control-Allow-Headers: cache-control,expires,pragma");

// include database and object files
include_once '../../config/db.php';
include_once '../../models/product.php';

// get database connection
$database = new DatabaseConnection();
$db = $database->getConnection();

// prepare product object
$product = new Product($db);

// set ID property of record to read
$product->id = isset($_GET['id']) ? $_GET['id'] : die();

// read the details of product to be edited
$product->readOne();

if ($product->id != null) {
    // create array
    $product_arr = array(
        "id" => intval($product->id),
        "name" => $product->name,
        "alias" => $product->alias,
        "description" => html_entity_decode($product->description),
        "groupId" => intval($product->groupId),
        "groupName" => $product->groupName,
        "categoryId" => intval($product->categoryId),
        "categoryName" => $product->categoryName,
        "subcategoryId" => intval($product->subcategoryId),
        "subcategoryName" => $product->subcategoryName,
        "price" => $product->price,
        "barcode" => $product->barcode,
        "dimension" => $product->dimension,
        "weight" => $product->weight,
        "image" => $product->image,
        "active" => $product->active,
    );

    // set response code - 200 OK
    http_response_code(200);


    // make it json format
    echo json_encode($product_arr);
} else {
    // set response code - 404 Not found
    http_response_code(404);

    // tell the user product does not exist
    echo json_encode(array("message" => "Product does not exist."));
}
