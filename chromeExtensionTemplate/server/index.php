<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Rank 'Em</title>
    <link rel="stylesheet" href="cssmaster.css">
  </head>
  <body>
    <div id="wrapper">
      <ul>
        <h1>Top Five</h1>
        <?php
            $db = mysqli_connect("localhost", "root", "P@ssword", "rankit");
            $query = "SELECT Domain, UpVotes, DownVotes FROM t_site ORDER BY (UpVotes - DownVotes) DESC LIMIT 5";
            $result = mysqli_query($db, $query);
            $i = 1;

            while($row = $result->fetch_row())
            {
                $score = $row[1] - $row[2];
                echo '<div class="circlebase">#'.$i.' <a target="_blank" href="http://'.$row[0].'"><h3>'.$row[0].'('.$score.')</h3></a></div>';
                $i+=1;
            }

        ?>
      </ul>
          <!--
        <div class="circlebase">#1</div>
        <div class="circlebase">#2</div>
        <div class="circlebase">#3</div>
        <div class="circlebase">#4</div>
        <div class="circlebase">#5</div>
      </ul>-->
    </div>
  </body>
</html>
