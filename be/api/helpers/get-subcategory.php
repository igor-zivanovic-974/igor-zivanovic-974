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
include_once '../../models/subcategory.php';

// get database connection
$database = new DatabaseConnection();
$db = $database->getConnection();

// prepare subcategory object
$subcategory = new Subcategory($db);

// set ID property of record to read
$subcategory->id = isset($_GET['id']) ? $_GET['id'] : die();

// read the details of subcategory to be edited
$subcategory->readOne();

if ($subcategory->id != null) {
    // create array
    $subcategory_arr = array(
        "id" => $subcategory->id,
        "name" => $subcategory->name,
        "categoryId" => $subcategory->categoryId,

    );

    // set response code - 200 OK
    http_response_code(200);


    // make it json format
    echo json_encode($subcategory_arr);
} else {
    // set response code - 404 Not found
    http_response_code(404);

    // tell the user subcategory does not exist
    echo json_encode(array("message" => "Subcategory does not exist."));
}
