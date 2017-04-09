<?php
/**
 * Created by PhpStorm.
 * User: jib11
 * Date: 4/8/2017
 * Time: 5:23 PM
 */
DownVote();

function DownVote()
{
    if (isset($_GET['domain'])/* && isset($_GET['browserAgent'])*/) {
        $domain = $_GET['domain'];
        $db = mysqli_connect($db = mysqli_connect("localhost", "root", "P@ssword", "rankit"));

        $query = "SELECT SiteID FROM t_site WHERE Domain = '" . $domain . "'";

        $result = mysqli_query($db, $query);

        $id = 0;

        if ($result->num_rows > 0) {
            $row = $result->fetch_result();
            $id = $row[0];
        }


        $query = "SELECT DownVotes FROM t_site WHERE SiteID = " . $id;
        $result = mysqli_query($db, $query);
        $row = $result->fetch_result();
        $downVotes = $row[0];

        $downVotes += 1;

        $query = "UPDATE t_site SET DownVotes = " . $downVotes;

        mysqli_query($db, $query);

        $updatedDownVotes = array ('DownVotes'=>$downVotes);

        echo json_encode($updatedDownVotes);
    }
}