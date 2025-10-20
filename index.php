<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <title>Bem-vindo às Praias de Moçambique</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
  <style>
    body, html {
      height: 100%;
      margin: 0;
      font-family: 'Verdana', sans-serif;
      color: white;
    }

    .hero {
      background-image: url('praias-mocambique.jpeg'); /* Substitua com o caminho real da imagem */
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 100vh;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .overlay {
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    }

    .hero-content {
      position: relative;
      z-index: 1;
      padding: 20px;
    }

    .hero h1 {
      font-size: 3.5rem;
      font-weight: bold;
      text-shadow: 2px 2px 5px #000;
    }

    .hero p {
      font-size: 1.5rem;
      margin-bottom: 30px;
      text-shadow: 1px 1px 3px #000;
    }

    .btn-hero {
      font-size: 1.2rem;
      padding: 12px 30px;
      border-radius: 8px;
      background-color: rgba(255, 255, 255, 0.2);
      border: 2px solid white;
      color: white;
      transition: 0.3s ease;
    }

    .btn-hero:hover {
      background-color: white;
      color: #333;
    }
  </style>
</head>
<body>

  <div class="hero">
    <div class="overlay"></div>
    <div class="hero-content">
      <h1>Bem-vindo às Praias de Moçambique</h1>
      <p>Explore os destinos mais paradisíacos da costa africana</p>
      <a href="index.html" class="btn btn-hero">Acessar</a>
    </div>
  </div>

</body>
</html>
