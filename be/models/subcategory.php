<?php

class Subcategory
{

    // database connection and table name
    private $conn;

    // object properties
    public $id;
    public $name;
    public $categoryId;

    // constructor with $db as database connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // read products
    public function read()
    {
        $query = "SELECT psc.id, psc.name, psc.category_id as categoryId FROM product_subcategories psc";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    function readOne()
    {

        // query to read single record
        $query = "SELECT psc.id, psc.name, psc.category_id as categoryId FROM product_subcategories psc
                    WHERE psc.id = ? 
                    LIMIT 0,1";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // bind id of product to be updated
        $stmt->bindParam(1, $this->id);

        // $stmt->debugDumpParams();

        // execute query
        $stmt->execute();

        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        // set values to object properties
        $this->id = $row['id'];
        $this->name = $row['name'];
        $this->categoryId = $row['categoryId'];

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }
}
