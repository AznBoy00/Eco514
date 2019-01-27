<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Google\Cloud\Firestore\FirestoreClient;

class FireStore extends Controller
{
    // Create the Cloud Firestore client
    public function index(){

        $db = new FirestoreClient();
        printf('Created Cloud Firestore client with default project ID.' . PHP_EOL);

//        $child = $database->getReference('TEST')->getChildKeys();
//        $data = $database->getReference('TEST')->getValue();
//
//        return view('firebase', ["data" => $data, "child" => $child]);

    }

}
