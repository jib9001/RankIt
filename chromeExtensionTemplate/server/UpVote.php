<?php
/**
 * Created by PhpStorm.
 * User: jib11
 * Date: 4/8/2017
 * Time: 5:23 PM
 */
UpVote();

function UpVote()
{
    if (isset($_GET['domain'])/* && isset($_GET['browserAgent'])*/) {
        $domain = $_GET['domain'];
        $db = mysqli_connect("localhost", "root", "P@ssword", "rankit");

        $query = "SELECT SiteID FROM t_site WHERE Domain = '" . $domain . "'";

        $result = mysqli_query($db, $query);

        $id = 0;

        if ($result->num_rows > 0) {
            $row = $result->fetch_row();
            $id = $row[0];
        }


        $query = "SELECT UpVotes, DownVotes FROM t_site WHERE SiteID = " . $id;
        $result = mysqli_query($db, $query);
        $row = $result->fetch_row();
        $upVotes = $row[0];
        $downVotes = $row[1];

        $upVotes += 1;
        $score = $upVotes - $downVotes;

        $query = "UPDATE t_site SET UpVotes = " . $upVotes."  WHERE SiteID = ".$id;

        mysqli_query($db, $query);

        $updatedUpVotes = array('UpVotes'=>$upVotes);

        header('Content-type: application/json');
        header("Access-Control-Allow-Origin: *");
        echo ($score);
    }
}
