<?php
require 'CelsiusService.class.php';

$celsius = $_GET['celsius'];
$celsiusIndex = 0.0;

if(is_numeric($celsius)) {
    $celsiusIndex = CelsiusService::getIndex($celsius);
}

sleep (1);

echo $celsiusIndex;
?>