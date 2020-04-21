<?php

// required headers
// header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin, Accept, X-Auth-Token, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization, x-http-method-override");
// header("Access-Control-Allow-Headers: *");
// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json;charset=utf-8");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
// header("Access-Control-Allow-Credentials: true");
// header("Access-Control-Max-Age: 1728000");
// header('Cache-Control: no-cache');
// header('Pragma: no-cache');
// headersheader("Access-Control-Allow-Headers: *");
// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json;charset=utf-8");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
// header("Access-Control-Allow-Credentials: true");
// header("Access-Control-Max-Age: 1728000");
// header('Cache-Control: no-cache');
// header('Pragma: no-cache');

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Vary: Origin, Access-Control-Request-Headers");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE");
header("Access-Control-Allow-Headers: cache-control,expires,pragma");

// include database and model files
include_once "../../config/db.php";
include_once "../../models/supplier.php";


// instantiate database 
$database = new DatabaseConnection();
$db = $database->getConnection();

// initialize supplier object
$suppliers = new Supplier($db);

// query suppliers
$stmt = $suppliers->read();
$num = $stmt->rowCount();

// check if more than 0 record found
if ($num > 0) {

    // suppliers array
    $suppliers_arr = array();
    $suppliers_arr["items"] = array();

    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $supplier_item = array(
            "id" => $id,
            "name" => $name,
            "description" => html_entity_decode($description),
            "image" => $image,
        );

        array_push($suppliers_arr["items"], $supplier_item);
    }

    // set response code - 200 OK
    http_response_code(200);

    // show suppliers data in json format
    echo json_encode($suppliers_arr);
} else {

    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no suppliers found
    echo json_encode(
        array("message" => "No suppliers found.")
    );
}
