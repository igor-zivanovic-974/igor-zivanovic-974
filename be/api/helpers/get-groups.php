<?php

// required headers
// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Vary: Origin, Access-Control-Request-Headers");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE");
header("Access-Control-Allow-Headers: cache-control, expires, pragma");
header('Content-Type: text/html; charset=utf-8');

// include database and object files
include_once "../../config/db.php";
include_once "../../models/group.php";


// instantiate database and group object
$database = new DatabaseConnection();
$db = $database->getConnection();

// initialize object
$group = new Group($db);

// query groups
$stmt = $group->read();
$num = $stmt->rowCount();

// check if more than 0 record found
if ($num > 0) {

    // groups array
    $groups_arr = array();
    $groups_arr["items"] = array();

    // retrieve our table contents
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $group_item = array(
            "id" => intval($id),
            "name" => $name
        );

        array_push($groups_arr["items"], $group_item);
    }

    // set response code - 200 OK
    http_response_code(200);

    // show groups data in json format
    echo json_encode($groups_arr);
} else {

    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no groups found
    echo json_encode(
        array("message" => "No groups found.")
    );
}
