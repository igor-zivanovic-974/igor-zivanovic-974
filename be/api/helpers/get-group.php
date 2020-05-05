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
include_once '../../models/group.php';

// get database connection
$database = new DatabaseConnection();
$db = $database->getConnection();

// prepare group object
$group = new Group($db);

// set ID property of record to read
$group->id = isset($_GET['id']) ? $_GET['id'] : die();

// read the details of group to be edited
$group->readOne();

if ($group->id != null) {
    // create array
    $group_arr = array(
        "id" => $group->id,
        "name" => $group->name,

    );

    // set response code - 200 OK
    http_response_code(200);


    // make it json format
    echo json_encode($group_arr);
} else {
    // set response code - 404 Not found
    http_response_code(404);

    // tell the user group does not exist
    echo json_encode(array("message" => "Group does not exist."));
}
