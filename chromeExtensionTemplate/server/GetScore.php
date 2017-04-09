<?php
/**
 * Created by PhpStorm.
 * User: jib11
 * Date: 4/8/2017
 * Time: 7:29 PM
 */
GetScore();

function GetScore()
{
    if (isset($_GET['domain'])) {
        $domain = $_GET['domain'];

        $db = mysqli_connect("localhost", "root", "P@ssword", "rankit");

        $query = "SELECT SiteID FROM t_site WHERE Domain = '" . $domain . "'";

        $result = mysqli_query($db, $query);

        $id = 0;

        if ($result->num_rows > 0) {
            $row = $result->fetch_row();
            $id = $row[0];
        } else {
            $query = "INSERT INTO t_site (Domain, UpVotes, DownVotes) VALUE ('" . $domain . "', 0, 0)";

            mysqli_query($db, $query);

            GetScore();
        }

        $query = "SELECT UpVotes, DownVotes FROM t_site WHERE SiteID = " . $id;
        $result = mysqli_query($db, $query);
        /*$json = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $json[] = $row;
        }*/
        $row = $result->fetch_row();

        $upVotes = $row[0];
        $downVotes = $row[1];

        $score = $upVotes - $downVotes;
        header('Content-type: application/json');
        header("Access-Control-Allow-Origin: *");
        echo ($score);

    }
}
