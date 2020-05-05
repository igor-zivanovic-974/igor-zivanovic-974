<?php

class Group
{

    // database connection and table name
    private $conn;

    // object properties
    public $id;
    public $name;

    // constructor with $db as database connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // read products
    public function read()
    {
        $query = "SELECT pg.id, pg.name FROM product_groups pg";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    function readOne()
    {

        // query to read single record
        $query = "SELECT pg.id, pg.name FROM product_groups pg
                    WHERE pg.id = ? 
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

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }
}
