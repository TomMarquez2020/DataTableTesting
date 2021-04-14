
<?php
    // get data
    $ident = $_GET["ident"];
    $fname = $_GET["fname"];
    $lname = $_GET["lname"];
    $zip = $_GET["zip"];
    $country = $_GET["country"];

    // create array now for json object

    $datafile = "data/test1.json";
    $fh = fopen($datafile, 'w') or die("can't open file");
    // fwrite($fh, $stringData);
    fclose($fh);


?>