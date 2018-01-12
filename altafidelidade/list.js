var produtos = [
    {
        codigo:1,
        imagem:{
            src:"https://dafitistatic-a.akamaihd.net/p/Lacoste-Camisa-Polo-Lacoste-Urban-Roxa-6827-1369341-3-zoom.jpg",
            alt:"Camisa Roxa",
            title:"Roxo"
        },
        tamanho:[30,40,44],        
        descrição:"Puma Golf Raglan Tech Polo Tee",
        cor:"#663c8c",
        preco:100,
        qtd:1
    },
    {
        codigo:2,   
        imagem:{
            src:"https://images.thenorthface.com/is/image/TheNorthFace/CH6A_0C5_hero?$638x745$",
            alt:"Shorts",
            title:"Shorts"
        },
        tamanho:["IZI","GG","XSQ"],
        descrição:"Shorts muito loko",
        cor:"#000000",
        preco:120,
        qtd:2
    },
    {
        codigo:3,    
        imagem:{
            src:"https://http2.mlstatic.com/tenis-masculino-yeezy-bost-2017-sapatenis-masculino-promoco-D_NQ_NP_376425-MLB25445925489_032017-F.jpg",
            alt:"Tenis",
            title:"Tenis"
        },
        tamanho:[41,42,43],
        descrição:"Tenis que o Murillo usa",
        cor:"#2e2b32",
        preco:1000,
        qtd:1
    }
];
{/* <tr class="row-itens">
<td class="delete-body"><button class="delete-item">X</button></td>
<td class="name-body">
  <img src="https://www.ecompletocdn.com.br/i/fp/1811/748599_121_1466774514.jpg">
  <div class="name-body-description">
    <p><b>Puma Golf Raglan Tech Polo Tee</b></p></br>
    COLOR:<input type="color">
    SIZE: <select>
      <option value="41">41</option>
      <option value="42">42</option>
    </select>
  </div>
</td>
<td class="price-body">R$<b>100</b></td>
<td class="quantity-body">
  <div>

    <button class="button-minus">-</button>
    <input type="number" min="1" max="999"/>
    <button class="button-plus">+</button>
  </div>
</td>
<td class="total-body">R$<b>100</b></td>        
</tr> */}
function listar() {
    var template = "";

    for (var i = 0; i < produtos.length; i++) {
        template += '<tr class="row-itens">';
        template += '<td class="delete-body"><button class="delete-item">X</button></td>';
        template += '<td class="name-body">';
        template += '<img src='+produtos[i].imagem.src+'>';
        template += '<div class="name-body-description">';
        template += '<p><b>'+produtos[i].descrição+'</b></p></br>';
        template += 'COLOR:<input type="color" value='+produtos[i].cor+'>';
        template += 'SIZE: <select>';
        for (var j = 0; j < produtos[i].tamanho.length; j++) {
            template += '<option value='+produtos[i].tamanho[j]+'>'+produtos[i].tamanho[j]+'</option>';            
        }
        template += '</select>';
        template += '</div>';
        template += '</td>';
        template += '<td class="price-body">R$<b>'+produtos[i].preco+'</b></td>';
        template += '<td class="quantity-body">';
        template += '<div>';
        template += '<button class="button-minus">-</button>';
        template += '<input type="number" min="1" value='+produtos[i].qtd+' max="999"/>';
        template += '<button class="button-plus">+</button>';
        template += '</div>';
        template += '</td>';
        template += '<td class="total-body">R$<b>100</b></td>';
        template += '</tr>';
        
    }
    document.getElementById('resultado').innerHTML = template;
    
}