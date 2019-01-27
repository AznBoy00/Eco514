<?php
    //dd($child);
//    dd($data[$child[0]]['title']);
    for($i = 0; $i < sizeof($child); $i++) {
        echo $data[$child[0]]['title'] . "\n";
        echo $data[$child[0]]['body'] . "\n";
    }
?>
