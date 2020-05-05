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
include_once '../../models/category.php';

// get database connection
$database = new DatabaseConnection();
$db = $database->getConnection();

// prepare category object
$category = new category($db);

// set ID property of record to read
$category->id = isset($_GET['id']) ? $_GET['id'] : die();

// read the details of category to be edited
$category->readOne();

if ($category->id != null) {
    // create array
    $category_arr = array(
        "id" => $category->id,
        "name" => $category->name,
        "groupId" => $category->groupId,

    );

    // set response code - 200 OK
    http_response_code(200);


    // make it json format
    echo json_encode($category_arr);
} else {
    // set response code - 404 Not found
    http_response_code(404);

    // tell the user category does not exist
    echo json_encode(array("message" => "category does not exist."));
}
