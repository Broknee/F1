<?php
include 'head.php';
?>

<body>

    <div id="intro">
        <a href="index.php"><img id="logo" src="./img/logo.png" alt="logo f1"></a>
        <div id="menu">
          <ul>
            <li><a href="./#ecuries_lien">Les écuries</a></li>
            <li><a href="./#pilotes_lien">Les pilotes</a></li>
            <li><a href="./#circuits_lien">Les circuits</a></li>
            <li><a href="form.php">Rejoignez-nous!</a></li>
          </ul>
    
          <i id="light_mode" class="fa-solid fa-sun"></i>
          <i id="dark_mode" class="fa-solid fa-moon"></i>
        </div>
    
      </div>
    
    <h1>Rejoignez-nous!</h1>
    <div id="formulaire">
    <form>
        <input type="text" placeholder="Nom Prénom">
        <input type="text" placeholder="email">
        <textarea maxlength="1000" rows="4" placeholder="Parlez-nous de votre passion pour la F1"></textarea>
        <input id="submit" type="submit">
    </form>
</div>

    <script src="./js/style.js" defer></script>
  <script src="./js/mode.js" defer></script>
</body>
</html>