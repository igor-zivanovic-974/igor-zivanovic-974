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
include_once '../../models/supplier.php';

// get database connection
$database = new DatabaseConnection();
$db = $database->getConnection();

// prepare supplier object
$supplier = new Supplier($db);

// set ID property of record to read
$supplier->id = isset($_GET['id']) ? $_GET['id'] : die();

// read the details of supplier to be edited
$supplier->readOne();

if ($supplier->id != null) {
    // create array
    $supplier_arr = array(
        "id" => $supplier->id,
        "name" => $supplier->name,
        "description" => html_entity_decode($supplier->description),
        "image" => $supplier->image,

    );

    // set response code - 200 OK
    http_response_code(200);


    // make it json format
    echo json_encode($supplier_arr);
} else {
    // set response code - 404 Not found
    http_response_code(404);

    // tell the user supplier does not exist
    echo json_encode(array("message" => "Supplier does not exist."));
}
