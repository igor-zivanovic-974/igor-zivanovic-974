<?php

// required headers
// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Vary: Origin, Access-Control-Request-Headers");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE");
header("Access-Control-Allow-Headers: cache-control,expires,pragma");

// include database and object files
include_once "../../config/db.php";
include_once "../../models/product.php";


// instantiate database and product object
$database = new DatabaseConnection();
$db = $database->getConnection();

// initialize object
$product = new Product($db);

// set ID property of record to read
$product->q = isset($_GET['q']) ? $_GET['q'] : die();

// query products
$stmt = $product->search();
$num = $stmt->rowCount();

// check if more than 0 record found
if ($num > 0) {

    // products array
    $products_arr = array();
    $products_arr["items"] = array();

    // retrieve our table contents
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        // extract row
        extract($row);

        $product_item = array(
            "id" => $id,
            "name" => $name,
            "alias" => $alias,
            "description" => html_entity_decode($description),
            "groupId" => $groupId,
            "groupName" => $groupName,
            "categoryId" => $categoryId,
            "categoryName" => $categoryName,
            "subcategoryId" => $categoryId,
            "subcategoryName" => $categoryName,
            "price" => $price,
            "barcode" => $barcode,
            "dimension" => $dimension,
            "weight" => $weight,
            "image" => $image,
            "active" => $active
        );

        array_push($products_arr["items"], $product_item);
    }

    // set response code - 200 OK
    http_response_code(200);

    // show products data in json format
    echo json_encode($products_arr);
} else {

    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no products found
    echo json_encode(
        array("message" => "No products found.")
    );
}
