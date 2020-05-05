<?php

class Category
{

    // database connection and table name
    private $conn;

    // object properties
    public $id;
    public $name;
    public $groupId;

    // constructor with $db as database connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // read products
    public function read()
    {
        $query = "SELECT pc.id, pc.name, pc.group_id as groupId FROM product_categories pc";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    function readOne()
    {

        // query to read single record
        $query = "SELECT pc.id, pc.name, pc.group_id as groupId FROM product_categories pc
                    WHERE pc.id = ? 
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
        $this->groupId = $row['groupId'];

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }
}
