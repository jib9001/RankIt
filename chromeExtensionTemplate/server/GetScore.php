<?php
/**
 * Created by PhpStorm.
 * User: jib11
 * Date: 4/8/2017
 * Time: 7:29 PM
 */

function GetScore()
{
    if (isset($_GET['domain'])) {
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

            GetScore();
        }
        else
        {
            $query = "SELECT UpVotes, DownVotes FROM t_site WHERE SiteID = ".$id;
            $result = mysqli_query($db, $query);

        }
    }
}