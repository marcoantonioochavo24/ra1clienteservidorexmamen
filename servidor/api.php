<?php

header('Access-Control-Allow-Origin: *');

$productos = [
    [
        "id" => 1,
        "nombre" => "Camiseta básica",
        "descripcion" => "Camiseta de algodón 100% en varios colores.",
        "precio" => 12.99,
        "img" => "https://www.soloepis.com/7991-large_default/camiseta-algodn-varios-colores.jpg",
        "categoria" => "ropa"
    ],
    [
        "id" => 2,
        "nombre" => "Pantalón vaquero",
        "descripcion" => "Pantalón de mezclilla azul clásico.",
        "precio" => 29.95,
        "img" => "https://estilomoto.com/wp-content/uploads/2024/01/VAQUERO-UNIK-CON-KEVLAR-PJ-0E-AZUL-OSCURO-1.png",
        "categoria" => "ropa"


    ],
    [
        "id" => 3,
        "nombre" => "Zapatillas deportivas",
        "descripcion" => "Zapatillas ligeras y cómodas para el día a día.",
        "precio" => 45.50,
         "img" => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-IUXKZRZA6EQOIel-hQ1F5zjyfZR9Hd1LLg&s",
         "categoria" => "calzado"
    ],
    [
        "id" => 4,
        "nombre" => "Sudadera con capucha",
        "descripcion" => "Sudadera de algodón ideal para el frío.",
        "precio" => 35.90,
         "img" => "https://minimalismbrand.com/cdn/shop/files/sudadera-con-capucha-algodon-organico-negra_2f080590-6ae3-4dae-8296-f955353e5972_2048x.jpg?v=1727176164",
         "categoria" => "ropa"
    ],
    [
         "id" => 5,
        "nombre" => "Gorra Básica",
        "descripcion" => "Gorra ajustable.",
        "precio" => 9.87,
         "img" => "https://www.regalopublicidad.com/images/1hy14/274df8862ba9ffca855d2ed169e8/610-460/gorra-basica-fabricada-en-algodon-liso-negra.jpg",
         "categoria" => "accesorios"
    ],
    [
         "id" => 6,
        "nombre" => "Mochila",
        "descripcion" => "Mochila resistente para usu diario.",
        "precio" => 24.50,
         "img" => "https://www.sulema.es/tienda/52984-large_default/mochila-escolar-paris.jpg",
         "categoria" => "accesorios"
    ]
    
    
];

if (isset($_GET['id'])) {
    header('Content-Type: application/json');
    $id = intval($_GET['id']);
    foreach ($productos as $p) {
        if ($p['id'] === $id) {
            echo json_encode($p);
            exit;
        }
    }
    echo json_encode(["error" => "Producto no encontrado"]);
 }else if (isset($_GET['modo']) && $_GET['modo'] === 'texto') {
    header('Content-Type: text/html; charset=UTF-8');
    mostrarProductosJSON($productos);
} //Pista debes detectar el max con  el get para el ejercicio--> Ejercicio 4: Filtrado de productos por GET
else {
    echo json_encode($productos);
}


///Función que muestra por pantalla un listado de productos.
//http://localhost/ra1clienteservidorexmamen/servidor/api.php?modo=texto
function mostrarProductosJSON($productos) {
    echo "--- Lista de productos ---<br>";
    // Convertir el array a Json
    $json = json_encode($productos);
    $array = json_decode($json, true);
    //Creo un foreach para recorrerlo  y pintar por pantalla, el id, nombre y precio del producto
    foreach ($array as $p) {
        echo $p["nombre"] . " - " . number_format($p["precio"], 2) . "€<br>";
    }
}
