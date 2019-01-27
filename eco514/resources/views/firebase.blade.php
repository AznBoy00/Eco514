<?php
    //dd($child);
//    dd($data[$child[0]]['title']);
    for($i = 0; $i < sizeof($child); $i++) {
        echo $data[$child[$i]]['title'] . "\n";
        echo $data[$child[$i]]['body'] . "\n";
    }
?>
