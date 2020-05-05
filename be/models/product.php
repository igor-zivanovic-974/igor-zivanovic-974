<?php

class Product
{

    // database connection and table name
    private $conn;
    private $tableName = "products";

    // object properties
    public $id;
    public $name;
    public $alias;
    public $description;
    public $groupId;
    public $groupName;
    public $categoryId;
    public $categoryName;
    public $subcategoryId;
    public $subcategoryName;
    public $price;
    public $barcode;
    public $dimension;
    public $weight;
    public $active;

    // constructor with $db as database connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // read products
    function read()
    {

        // select all query
        $query = "SELECT p.id, p.name as name, p.alias, p.description, p.group_id as groupId, pc.name as groupName, 
                    p.category_id as categoryId, psc.name as categoryName, p.subcategory_id as subcategoryId, psc.name as subcategoryName, 
                    p.price, p.barcode, p.dimension, p.weight, p.active
                    FROM products p
                    LEFT JOIN product_groups pg ON pg.id = p.group_id 
                    LEFT JOIN product_categories pc ON pc.id = p.category_id 
                    LEFT JOIN product_subcategories psc ON psc.id = p.subcategory_id
                    WHERE p.active = true";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }



    // read products by category ID
    function readByCategoryId()
    {

        // select all query
        $query = "SELECT p.id, p.name as name, p.alias, p.description, p.group_id as groupId, pc.name as groupName, 
                    p.category_id as categoryId, psc.name as categoryName, p.subcategory_id as subcategoryId, psc.name as subcategoryName, 
                    p.price, p.barcode, p.dimension, p.weight, p.active
                    FROM products p
                    LEFT JOIN product_groups pg ON pg.id = p.group_id 
                    LEFT JOIN product_categories pc ON pc.id = p.category_id 
                    LEFT JOIN product_subcategories psc ON psc.id = p.subcategory_id
                    WHERE p.active = true AND p.category_id = ?";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // bind id of product to be updated
        $stmt->bindParam(1, $this->categoryId);

        // execute query
        $stmt->execute();

        return $stmt;
    }



    // read products by subcategory ID
    function readBySubcategoryId()
    {

        // select all query
        $query = "SELECT p.id, p.name as name, p.alias, p.description, p.group_id as groupId, pc.name as groupName, 
                    p.category_id as categoryId, psc.name as categoryName, p.subcategory_id as subcategoryId, psc.name as subcategoryName, 
                    p.price, p.barcode, p.dimension, p.weight, p.active
                    FROM products p
                    LEFT JOIN product_groups pg ON pg.id = p.group_id 
                    LEFT JOIN product_categories pc ON pc.id = p.category_id 
                    LEFT JOIN product_subcategories psc ON psc.id = p.subcategory_id
                    WHERE p.active = true AND p.subcategory_id = ?";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // bind id of product to be updated
        $stmt->bindParam(1, $this->subcategoryId);

        // execute query
        $stmt->execute();

        return $stmt;
    }


    // read products by subcategory ID
    function search()
    {

        // select all query
        $query = "SELECT p.id, p.name as name, p.alias, p.description, p.group_id as groupId, pc.name as groupName, 
                    p.category_id as categoryId, psc.name as categoryName, p.subcategory_id as subcategoryId, psc.name as subcategoryName, 
                    p.price, p.barcode, p.dimension, p.weight, p.active
                    FROM products p
                    LEFT JOIN product_groups pg ON pg.id = p.group_id 
                    LEFT JOIN product_categories pc ON pc.id = p.category_id 
                    LEFT JOIN product_subcategories psc ON psc.id = p.subcategory_id
                    WHERE p.active = true AND p.name LIKE :q OR p.alias LIKE :q";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // bind id of product to be updated
        $stmt->bindParam(':q', $this->q);

        // execute query
        $stmt->execute();

        return $stmt;
    }



    // create product
    function create()
    {

        // query to insert record
        $query = "INSERT INTO " . $this->tableName . "
                SET 
                name=:name,
                alias=:alias,
                description=:description,
                group_id=:groupId,
                category_id=:categoryId,
                subcategory_id=:subcategoryId,
                price=:price,
                barcode=:barcode,
                dimension=:dimension,
                weight=:weight,
                active=:active";


        // prepare query
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->alias = htmlspecialchars(strip_tags($this->alias));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->groupId = htmlspecialchars(strip_tags($this->groupId));
        $this->categoryId = htmlspecialchars(strip_tags($this->categoryId));
        $this->subcategoryId = htmlspecialchars(strip_tags($this->subcategoryId));
        $this->price = htmlspecialchars(strip_tags($this->price));
        $this->barcode = htmlspecialchars(strip_tags($this->barcode));
        $this->dimension = htmlspecialchars(strip_tags($this->dimension));
        $this->weight = htmlspecialchars(strip_tags($this->weight));
        $this->active = htmlspecialchars(strip_tags($this->active));



        // bind values
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":alias", $this->alias);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":groupId", $this->groupId);
        $stmt->bindParam(":categoryId", $this->categoryId);
        $stmt->bindParam(":subcategoryId", $this->subcategoryId);
        $stmt->bindParam(":price", $this->price);
        $stmt->bindParam(":barcode", $this->barcode);
        $stmt->bindParam(":dimension", $this->dimension);
        $stmt->bindParam(":weight", $this->weight);
        $stmt->bindParam(":active", $this->active);

        // execute query
        if ($stmt->execute()) {
            return true;
        }

        return false;
    }





    // used when filling up the update product form
    function readOne()
    {

        // query to read single record
        $query = "SELECT p.id, p.name as name, p.alias, p.description, p.group_id as groupId, pc.name as groupName, 
                    p.category_id as categoryId, psc.name as categoryName, p.subcategory_id as subcategoryId, psc.name as subcategoryName, 
                    p.price, p.barcode, p.dimension, p.weight, p.active
                    FROM products p
                    LEFT JOIN product_groups pg ON pg.id = p.group_id 
                    LEFT JOIN product_categories pc ON pc.id = p.category_id 
                    LEFT JOIN product_subcategories psc ON psc.id = p.subcategory_id
                    WHERE p.active = true AND p.id = ?
                    LIMIT 0,1";




        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // bind id of product to be updated
        $stmt->bindParam(1, $this->id);

        // execute query
        $stmt->execute();

        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        // set values to object properties
        $this->id = $row['id'];
        $this->name = $row['name'];
        $this->alias = $row['alias'];
        $this->description = $row['description'];
        $this->groupId = $row['groupId'];
        $this->groupName = $row['groupName'];
        $this->categoryId = $row['categoryId'];
        $this->categoryName = $row['categoryName'];
        $this->subcategoryId = $row['subcategoryId'];
        $this->subcategoryName = $row['subcategoryName'];
        $this->price = $row['price'];
        $this->barcode = $row['barcode'];
        $this->dimension = $row['dimension'];
        $this->weight = $row['weight'];
        $this->active = $row['active'];

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }






    // update the product
    function update()
    {

        // update query
        $query = "UPDATE " . $this->tableName . "
                SET 
                    name=:name,
                    alias=:alias,
                    description=:description,
                    group_id=:groupId,
                    category_id=:categoryId,
                    subcategory_id=:subcategoryId,
                    price=:price,
                    barcode=:barcode,
                    dimension=:dimension,
                    weight=:weight,
                    active=:active 
                WHERE id = :id";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->alias = htmlspecialchars(strip_tags($this->alias));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->groupId = htmlspecialchars(strip_tags($this->groupId));
        $this->categoryId = htmlspecialchars(strip_tags($this->categoryId));
        $this->subcategoryId = htmlspecialchars(strip_tags($this->subcategoryId));
        $this->price = htmlspecialchars(strip_tags($this->price));
        $this->barcode = htmlspecialchars(strip_tags($this->barcode));
        $this->dimension = htmlspecialchars(strip_tags($this->dimension));
        $this->weight = htmlspecialchars(strip_tags($this->weight));
        $this->active = htmlspecialchars(strip_tags($this->active));
        $this->id = htmlspecialchars(strip_tags($this->id));

        // bind new values
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":alias", $this->alias);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":groupId", $this->groupId);
        $stmt->bindParam(":categoryId", $this->categoryId);
        $stmt->bindParam(":subcategoryId", $this->subcategoryId);
        $stmt->bindParam(":price", $this->price);
        $stmt->bindParam(":barcode", $this->barcode);
        $stmt->bindParam(":dimension", $this->dimension);
        $stmt->bindParam(":weight", $this->weight);
        $stmt->bindParam(":active", $this->active);
        $stmt->bindParam(':id', $this->id);

        // execute the query
        if ($stmt->execute()) {
            return true;
        }

        return false;
    }





    // delete the product
    function delete()
    {

        // delete query
        $query = "DELETE FROM " . $this->tableName . " WHERE id = ?";

        // prepare query
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->id = htmlspecialchars(strip_tags($this->id));

        // bind id of record to delete
        $stmt->bindParam(1, $this->id);

        // execute query
        if ($stmt->execute()) {
            return true;
        }

        return false;
    }
}
