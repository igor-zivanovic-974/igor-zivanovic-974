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
include_once "../../models/subcategory.php";


// instantiate database and category object
$database = new DatabaseConnection();
$db = $database->getConnection();

// initialize object
$subcategory = new Subcategory($db);

// query categories
$stmt = $subcategory->read();
$num = $stmt->rowCount();

// check if more than 0 record found
if ($num > 0) {

    // categories array
    $subcategories_arr = array();
    $subcategories_arr["items"] = array();

    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $subcategory_item = array(
            "id" => intval($id),
            "name" => $name,
            "categoryId" => intval($categoryId)
        );

        array_push($subcategories_arr["items"], $subcategory_item);
    }

    // set response code - 200 OK
    http_response_code(200);

    // show categories data in json format
    echo json_encode($subcategories_arr);
} else {

    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no categories found
    echo json_encode(
        array("message" => "No categories found.")
    );
}
