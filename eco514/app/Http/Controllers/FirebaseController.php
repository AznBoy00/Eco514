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

//$newPost->getKey(); // => -KVr5eu8gcTv7_AHb-3-

//$newPost->getUri(); // => https://my-project.firebaseio.com/blog/posts/-KVr5eu8gcTv7_AHb-3-

//$newPost->getChild('title')->set('Changed post title');

//$newPost->getValue(); // Fetches the data from the realtime database

//$newPost->remove();
        //$database->getReference('TEST')->getChild('body')->set('ASD');

        $data = $database->getReference()->getValue();

        return view('firebase', ["data" => $data]);

    }

}

?>
