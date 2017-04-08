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
        $db = mysqli_connect($db = mysqli_connect("lighning.servegame.com", "root", "P@ssword", "rankit"));

        $query = "SELECT SiteID FROM t_site WHERE Domain = '" . $domain . "'";

        $result = mysqli_query($db, $query);

        $id = 0;

        if ($result->num_rows > 0) {
            $row = $result->fetch_result();
            $id = $row[0];
        }

        if ($id == 0)
        {

            $db = mysqli_connect("lighning.servegame.com", "root", "P@ssword", "rankit");

            $query = "INSERT INTO t_site (Domain, UpVotes, DownVotes) VALUE ('" . $domain . "', 0, 0)";

            mysqli_query($db, $query);

            UpVote();
        }
        else
        {
            $query = "SELECT UpVotes FROM t_site WHERE SiteID = ".$id;
            $result = mysqli_query($db, $query);
            $row = $result->fetch_result();
            $upVotes = $row[0];

            $upVotes += 1;

            $query = "UPDATE t_site SET UpVotes = ".$upVotes;

            mysqli_query($db, $query);
        }

    }


}