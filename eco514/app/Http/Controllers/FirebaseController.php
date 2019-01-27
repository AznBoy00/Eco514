<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Kreait\Firebase;

use Kreait\Firebase\Factory;

use Kreait\Firebase\ServiceAccount;

use Kreait\Firebase\Database;

class FirebaseController extends Controller

{

//

    public function index(){

        $serviceAccount = ServiceAccount::fromJsonFile(__DIR__.'/fb-test-fb84d-97756b2972d3.json');

        $firebase = (new Factory)

            ->withServiceAccount($serviceAccount)

            ->withDatabaseUri('https://fb-test-fb84d.firebaseio.com/')

            ->create();

        $database = $firebase->getDatabase();

//        $newPost = $database
//
//            ->getReference('TEST')
//
//            ->push([
//
//                'title' => 'TITLE',
//
//                'body' => 'BODY'
//
//            ]);

        $child = $database->getReference('TEST')->getChildKeys();
        $data = $database->getReference('TEST')->getValue();

        return view('firebase', ["data" => $data, "child" => $child]);

    }

}

?>
